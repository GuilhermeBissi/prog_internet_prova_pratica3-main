# 📦 CRUD JWT JSON

Desenvolver uma API BackEnd com **Node.js**, **Express**, **JWT** e persistência em **arquivo JSON**.  
Implementar o  **CRUD de usuários** e autenticação baseada em token.
Os teste deve ser feito utilizando **Thunder Client** nas respectivas rotas

# 📌 Rotas da API

## POST /register → cadastrar novo usuário.
Dados: { nome, email, senha }
## POST /login → autenticação do usuário.
Gera um JWT válido por 1h.
## GET /users → listar todos os usuários (rota protegida).
## GET /users/:id → buscar um usuário específico por id (rota protegida).
## PUT /users/:id → atualizar dados de um usuário (rota protegida).
## DELETE /users/:id → remover usuário (rota protegida).

---

## 🚀 Tecnologias Sugeridas
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [JWT](https://jwt.io/)
- [bcryptjs](https://www.npmjs.com/package/bcryptjs)
- [uuid](https://www.npmjs.com/package/uuid)

---

## 📂 Estrutura do Projeto
     ├─ db.json
     ├─ server.js
     ├─ utils/
     │     └─ db.js
     ├─ middleware/
     │     └─ auth.js
     ├─ controllers/
     │    ├─ authController.js
     │    └─ usersController.js
     └─ routes/
          ├─ auth.js
          └─ users.js

__________________________________________________________________________________________________________________

## 📋 Análise do Projeto CRUD JWT JSON

Este projeto implementa uma API com Node.js, Express e persistência em arquivo JSON.
A proposta era desenvolver um CRUD de usuários com autenticação via JWT.

A seguir estão os pontos analisados, sugestões de melhorias e o que faltou.

## ✅ Pontos Positivos:

Estrutura de pastas organizada, separando rotas, controladores e middleware.

Uso de Express Router, facilitando a modularização do código.

JWT implementado para autenticação.

Rotas básicas de CRUD criadas.

## ⚠️ Pontos de Melhoria:

Persistência em JSON

O projeto não utiliza db.json com funções auxiliares em utils/db.js.

O ideal seria centralizar leitura e escrita do arquivo em um módulo utilitário, evitando repetição de código.

Senha dos usuários

Não foi utilizada a biblioteca bcryptjs para salvar a senha de forma segura.

Atualmente, as senhas parecem estar sendo salvas em texto puro (o que não é recomendado).

Validação dos dados

Não há verificação se o usuário já existe no cadastro (email duplicado).

Poderia ser usado express-validator ou validações manuais para garantir integridade.

Autenticação (middleware)

O middleware de autenticação não está em uma pasta middleware/ separada como no enunciado.

Melhor prática seria centralizar esse código e reutilizá-lo nas rotas protegidas.

Uso de UUID

O projeto não utiliza uuid para geração de IDs.

IDs manuais ou incrementais podem causar conflitos em ambientes reais.

## ❌ O que faltou em relação ao enunciado:

Pasta controllers/ com separação clara de authController.js e usersController.js.

Arquivo utils/db.js para lidar com a persistência de dados em JSON.

Implementação do bcryptjs para criptografar senhas.

Uso de uuid para geração de IDs.

Middleware de autenticação (auth.js) separado na pasta middleware/.

## 💡 Sugestões de Melhoria:

Criar um módulo utilitário (utils/db.js) para abstrair leitura/escrita do db.json.

Implementar bcryptjs para salvar senhas de forma segura.

Usar uuid para IDs únicos.

Organizar melhor a estrutura de pastas conforme o enunciado sugeriu:

├─ db.json
├─ server.js
├─ utils/
│   └─ db.js
├─ middleware/
│   └─ auth.js
├─ controllers/
│   ├─ authController.js
│   └─ usersController.js
└─ routes/
    ├─ auth.js
    └─ users.js


Adicionar mensagens de erro mais claras (ex.: “Usuário não encontrado”, “Token inválido ou expirado”).

Implementar validações nos campos (nome, email, senha).