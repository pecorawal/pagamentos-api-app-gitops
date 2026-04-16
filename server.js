const express = require('express');
const app = express();
const PORT = 8080;

app.get('/api/pagamentos', (req, res) => {
    res.json({
        status: "Aprovado",
        transacao: Math.floor(Math.random() * 100000),
        mensagem: "Pagamento processado com sucesso! (Versão 1.0)",
        ambiente: process.env.NODE_ENV || "desenvolvimento"
    });
});

app.listen(PORT, () => {
    console.log(`Pagamentos API rodando na porta ${PORT}`);
});
