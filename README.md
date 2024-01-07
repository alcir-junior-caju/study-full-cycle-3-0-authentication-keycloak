# Curso Full Cycle 3.0 - Módulo Autenticação e Keycloak

<div>
    <img alt="Criado por Alcir Junior [Caju]" src="https://img.shields.io/badge/criado%20por-Alcir Junior [Caju]-%23f08700">
    <img alt="License" src="https://img.shields.io/badge/license-MIT-%23f08700">
</div>

---

## Descrição

O Curso Full Cycle é uma formação completa para fazer com que pessoas desenvolvedoras sejam capazes de trabalhar em projetos expressivos sendo capazes de desenvolver aplicações de grande porte utilizando de boas práticas de desenvolvimento.

---

## Repositório Pai
https://github.com/alcir-junior-caju/study-full-cycle-3-0

---

## Visualizar o projeto na IDE:

Para quem quiser visualizar o projeto na IDE clique no teclado a tecla `ponto`, esse recurso do GitHub é bem bacana

---
### O que é OAuth 2.0?

`OAuth 2.0` foi criado por um grupo de trabalho formado em 2007 pelo `Internet Engineering Task Force (IETF)` para resolver os problemas de segurança na autenticação e autorização de aplicativos de terceiros.

O grupo de trabalho incluiu representantes de empresas como Google, Microsoft, Yahoo, Facebook, Twitter e muitas outras, e após dois anos de trabalho, em 2010, a primeira versão oficial do `OAuth 2.0` foi publicada.

Ao contrário de seu antecessor, o OAuth 1.0, que foi projetado especificamente para autenticação baseado em token, o `OAuth 2.0` foi criado para suportar não apenas autenticação em token, mas também autorização baseado em token.

Desde então, o `OAuth 2.0` se tornou um dos protocolos de autenticação e de autorização mais populares do mundo, utilizado por muitas empresas, aplicativos e serviços em todo mundo.

A versão atual do `OAuth 2.0` é a RFC 6749, publicada em 2012, e continua sendo utilizada e aprimorada pela comunidade de desenvolvimento de software em todo mundo.

O `OAuth 2.0` é um protocolo de autorização que permite que aplicativos obtenham acesso limitado a recursos protegidos em nome do propretário do recurso, sem a necessidade de de compartilhar as credenciais de acesso. A estrutura do `OAuth 2.0` é composta por quatro atores principais, que interagem entre si para obter autorização e acesso a recursos protegidos:

1. `Resource Owner` (Propietário do Recurso): é o usuário ou aplicativo que possuí o recurso protegido que precisa ser acessado. Por exemplo, um que deseja autorizar um aplicativo a acessar sua conta do Google Drive.
2. `OAuth Server` (Servidor de autorização): é o servidor que autentica o proprietário do recurso e concede permissões de acesso ao aplicativo solicitante. ELe é responsável por verificar a identidade do usuário e validar as credenciais de acesso.
3. `Client` (Aplicativo Solicitante): é o aplicativo que solicita acesso ao recurso protegido em nome do proprietário do recurso. O aplicativo deve ter uma identificação exclusiva e credenciais de acesso para autenticar-se juntoao servidor de autorização
4. `Resource Server` (Servidor de recurso): é o servidor que hospeda o recurso protegido que o aplicativo solicitante deseja acessar. Ele é responsável por verificar se o aplicativo tem permissão para acessar o recurso e conceder acesso se a autorização for concedida.

### O que é Open Id Connect?

O `OpenID 1.0`em 2006 permitia que os usuários se autenticassem em diferentes sites usando uma única identidade, mas tinha várias limitações e vulnerabilidades de segurança.

Por causa dessas limitações, o `OpenID 1.0` nunca se tornou amplamente adotado e foi eventualmente substiuído pelo `OpenID 2.0` em 2007. O `OpenID 2.0` melhorou a segurança, adicionou recursos de autenticação multifator e adicionou suporte para vários provedores de identidade.

O `OpenID Connect` é uma camada de autenticação baseada em `token` sobre o protocolo `OAuth 2.0`. Ele foi criado para fornecer autenticação federada para aplicativos web e móveis, permitindo que os usuários façam login em diferentes aplicativos usando as credenciais de uma única identidade.

O `OpenID Connect` foi desenvolvido pelo `OpenID Foundation`, uma organização sem fins lucrativos que se dedica a promover padrões abertos de autenticação e autorização na internet. A especificação do `OpenID Connect`  foi publicada em 2014, e desde então, muitas empresas e organizações adotaram essa tecnologia, para oferecer autenticação federada para seus usuários.

O `OpenID Connect` é baseado em conceitos como fluxos de autenticação, tokens de acesso, tokens de atualização e identidades verificáveis. Ele fornece uma maneira segura e padronizada de autenticar usuários em diferentes aplicativos, sem exigir que os aplicativos armazenem senhas ou outras credenciais de autenticação. Em vez disso, o `OpenID Connect` usa `tokens` cripitografados para autenticar os usuários e proteger suas informações pessoais.

Hoje, o `OpenID Connect` é amplamente utilizado em aplicativos de todos os tipos e tamanhos, desde aplicativos empresariais até aplicativos de consumo, em uma ampla variedade de setores, incluindo finanças, saúde, varejo, governo e muito mais. A especificação do `OpenID Connect` continua evoluindo para atender às necessidades em constante mudança dos usuários e desenvolvedores de software em todo o mundo.

### O que é keycloak?

Imagens atualizadas: https://quay.io/repository/keycloak/keycloak?tab=info

O `Keycloak`foi criado pela `JBoss`, uma divisão da `Red Hat` em 2014. A ideia era fornecer uma solução de autenticação e autorização de código aberto que pudesse ser facilmente integrada com aplicações web e serviços. A `JBoss` queria desenvolver uma ferramenta que fosse fácil de usar, mas também flexível o suficiente para se adapatar a diferentes requisitos de segurança.

O projeto foi iniciado por `Bill Burke`, que já havia criado o framework `RESTEasy` para desenvolvimento de `APIs RESTful` em Java. Burk viu a necessidade de uma solução de segurança mais abrangente que pudesse ser facilmente integrada com o `RESTEasy` e outras aplicações.

O `Keycloak` foi lançado oficialmente em 2015, e desde então tem sido constantemente atualizado e aprimorado. O projeto é de código aberto e é mantido por uma comunidade de desenvolvedores dedicados. Além disso, a `Red Hat` oferece suporte comercial para o `Keycloak`, tornando-o uma opção viável para empresas que precisam de recursos de segurança avançados.

Hoje, o `keycloak` é usado por uma variedade de empresas e organizações em todo o mundo para proteger aplicações e serviços. Sua flexibilidade e facilidade de uso tornaram-no uma escolha popular para desenvolvedores que precisam de uma solução de segurança robusta e personalizável.

Foi aceito como projeto incubado na `CNCF`, em 10 de abril de 2023.

#### Tecnologias usadas
- Java;
- Wildfly;
- Banco de dados:
    - H2;
    - MySQL;
    - PostgreSQL;
    - Oracle;
    - SQL Server;
    - Maria DB;
- React.js;

#### Principais caracteristicas e beneficios
1. Suporte a múltiplas plataformas: O `keycloak` pode ser utilizado em uma variedade de plataformas, incluindo Java, Node.js e .NET;
2. Integração com diversos provedores de identidade: O `keycloak` suporta uma ampla gama de provedores de identidade, como `LDAP`, `Microsoft Active Directory`, `Google`, `Facebook` e `Twitter`;
3. Administração centralizada: O `keycloak` oferece um console de administração centralizado que permite gerenciar usuários, grupos, clientes e outros recursos de segurança;
4. Proteção de API: O `keycloak` pode proteger `APIs` com `tokens` de acesso baseados em `OAuth 2.0` e `OpenID Connect`;
5. Personalização de Login: O `keycloak` permite que os usuários personalizem a página de `login` e usem seus próprios temas;
6. Suporte a Multi-Tenancy: O `keycloak` suporta a separação de dados e configurações para diferentes clientes e organizações;
7. Integração com DevOps: O `keycloak` pode ser facilmente integrado com ferramentas de `DevOps`, como `Kubernetes` e `Docker`;
8. Extensibilidade: O `keycloak` é altamente extensível e pode ser facilmente estendido com `plugins` e `APIs` personalizadas;
9. Alta escalabilidade: O `keycloak` é altamente escalável e pode lidar com grandes volumes de tráfego e usuários;
10. Open-source: O `keycloak` é um projeto de código aberto e é desenvolvido pela comunidade, o que siginifica que é constantemente atualizado e melhorado;


#### Principais funcionalidades
1. Autenticação de usuários: O `keycloak` permite que os usuários se autentiquem em diferentes aplicativos usando diferentes métodos de autenticação, como login e senha, autenticação multifator, SSO e outras opções;
2. Gerenciamento de usuários: O `keycloak` fornece um console de administração onde os administradores podem gerenciar usuários, atribuir papéis e permissões, e visualizar logs de atividades;
3. Autorização de usuários: O `keycloak` permite que os administradores configurem políticas de autorização para restringir o acesso a recursos específicos com base em papéis e permissões;
4. Integração com diferentes protocólos de autenticação e autorização: O `keycloak` suporta diferentes protocolos, como `OAuth 2.0`, `OpenID Connect` e `SAML 2.0`, para permitir a integração com diferentes sistemas;
5. Configuração flexível: O `keycloak` oferece uma ampla variedade de configurações que podems ser personalizadas para atender às necessidades específicas de cada aplicativo ou serviço;
6. Gerenciamento de sessão: O `keycloak` fornece recursos para gerenciar sessões de usuário, incuindo controle de expiração, renovação e encerramento de sessões;
7. Autenticação e autorização baseadas em níveis: O `keycloak` permite que os administradores configurem políticas de autenticação e autorização em diferentes níveis, como aplicativo, grupo de usuários, função ou permissão;

#### Principais casos de uso
1. Single Sign-On (SSO): O `keycloak` permite que os usuários façam login uma vez e acessem diferentes aplicativos e serviços sem a necessidade de autenticar novamente;
2. Proteção de API: O `keycloak` pode ser utilizado para proteger `APIs`, permitindo que apenas usuários autenticados e autorizados acessem recursos protegidos;
3. Gerenciamento de usuários: O `keycloak` oferece recursos para gerenciar usuários, permitindo que os administradores adicionem, removam e gerenciem usuários e seus papéis e permissões;
4. Autenticação multifator: O `keycloak` suporta diferentes métodos de autenticação multifator, como autenticação por SMS, autenticação por e-mail ou autenticação por meio de aplicativo móvel.
5. Integração com diferentes sistemas: O `keycloak` pode ser integrado com diferentes sistemas, como sistemas de gerenciamento de conteúdo, sistema de gerenciamento de aprendizado, sistemas de gerenciamento de identidade e outros;
6. Gerenciamento de sessão: O `keycloak` oferece recursos para gerenciar sessões de usuários, permitindo que os administradores configurem políticas de expiração, renovação e encerramento de sessões;
7. Autorização baseada em papéis: O `keycloak` permite que os administradores configurem políticas de autorização baseadas em papéis, permitindo que apenas usuários autorizados acessem recursos específicos;
