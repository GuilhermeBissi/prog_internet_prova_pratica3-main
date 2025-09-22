// Importações principais
const express = require('express');
const path = require('path');
const alunosRoutes = require('./rotas/alunosRoutes');

const app = express();
const PORT = 1122;

// Middleware para interpretar JSON
app.use(express.json());

// Rotas da API (CRUD de alunos)
app.use('/api/alunos', alunosRoutes);

// Inicialização do servidor
app.listen(PORT, () => {
    console.log(` Servidor rodando em http://localhost:${PORT}`);
});
