// Middleware simples para validar os campos de aluno
module.exports = (req, res, next) => {
    const { nome } = req.body;

    if (!nome || typeof nome !== 'string') {
        return res.status(400).json({ erro: 'Nome é obrigatório e deve ser uma string' });
    }

    next();
};
// Middleware de validação dos campos do aluno
module.exports = (req, res, next) => {
    const { nome, senha, email } = req.body;

    if (!nome || typeof nome !== 'string') {
        return res.status(400).json({ erro: 'Nome é obrigatório e deve ser texto' });
    }
    if (!senha) {
        return res.status(400).json({ erro: 'Senha é obrigatório' });
    }
    if (!email) {
        return res.status(400).json({ erro: 'E-mail é obrigatório' });
    }

    next();
};
