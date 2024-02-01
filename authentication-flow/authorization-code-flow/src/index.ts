import express from 'express';
import session from 'express-session';
import crypto from 'crypto';
import jwt from "jsonwebtoken";

const app = express();

const memoryStore = new session.MemoryStore();

app.use(
  session({
    secret: "my-secret",
    resave: false,
    saveUninitialized: false,
    store: memoryStore,
    //expires
  })
);

const middlewareIsAuth = (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    //@ts-expect-error - type mismatch
    if (!req.session.user) {
      return res.redirect("/login");
    }
    next();
  };

app.get('/', (req, res) => {
    res.json({ message: 'Hello World' });
});

app.get('/login', (req, res) => {
    const nonce = crypto.randomBytes(16).toString('base64');
    const state = crypto.randomBytes(16).toString('base64');
    //@ts-expect-error - type mismatch
    req.session.nonce = nonce;
    //@ts-expect-error - type mismatch
    req.session.state = state;
    req.session.save();
    const params = new URLSearchParams({
        client_id: 'api',
        redirect_uri: 'http://localhost:3333/callback',
        response_type: 'code',
        scope: 'openid',
        nonce,
        state,
    });

    const url = `http://localhost:8787/realms/test/protocol/openid-connect/auth?${params.toString()}`;
    console.log('URL', url);
    res.redirect(url);
});

app.get("/logout", (req, res) => {
    const params = new URLSearchParams({
      //client_id: "api",
      //@ts-expect-error
      id_token_hint: req.session.id_token,
      post_logout_redirect_uri: "http://localhost:3333/login",
    });

    req.session.destroy((err) => {
      console.error(err);
    });

    const url = `http://localhost:8787/realms/test/protocol/openid-connect/logout?${params.toString()}`;
    res.redirect(url);
});
// /login ----> keycloak (formulario de auth) ----> /callback?code=123 ---> keycloak (devolve o token)

app.get('/callback', async (req, res) => {
    //@ts-expect-error - type mismatch
    if (req.session.user) {
        return res.redirect("/admin");
    }

    //@ts-expect-error - type mismatch
    if(req.query.state !== req.session.state) {
        //poderia redirecionar para o login em vez de mostrar o erro
        return res.status(401).json({ message: "Unauthenticated" });
    }

    console.log('CALLBACK', req.query);
    const params = new URLSearchParams({
        client_id: 'api',
        grant_type: 'authorization_code',
        code: req.query.code as string,
        redirect_uri: 'http://localhost:3333/callback',
    });
    const url = `http://keycloak-keycloak-1:8080/realms/test/protocol/openid-connect/token`;
    console.log('URL', url);
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: params.toString(),
    });
    const result = await response.json();
    const payloadAccessToken = jwt.decode(result.access_token) as any;
    const payloadRefreshToken = jwt.decode(result.refresh_token) as any;
    const payloadIdToken = jwt.decode(result.id_token) as any;
    if (
      //@ts-expect-error - type mismatch
      payloadAccessToken.nonce !== req.session.nonce ||
      //@ts-expect-error - type mismatch
      payloadRefreshToken.nonce !== req.session.nonce ||
      //@ts-expect-error - type mismatch
      payloadIdToken.nonce !== req.session.nonce
    ) {
      return res.status(401).json({ message: "Unauthenticated" });
    }

    //@ts-expect-error - type mismatch
    req.session.user = payloadAccessToken;
    //@ts-expect-error - type mismatch
    req.session.access_token = result.access_token;
    //@ts-expect-error - type mismatch
    req.session.id_token = result.id_token;
    req.session.save();
    res.json(result);
});

app.get("/admin", middlewareIsAuth, async (req, res) => {
    //@ts-expect-error - type mismatch
    res.json(req.session.user);
    const response = await fetch("https://api.linkedin.com/v2/me", {
      headers: {
        //@ts-expect-error - type mismatch
        Authorization: `Bearer ${req.session.access_token}`,
      },
    });
    console.log('RES', await response.json());
});

app.listen(3333, () => {
    console.log('Listening on port 3333');
});
