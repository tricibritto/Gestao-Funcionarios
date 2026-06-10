const express = require("express");
const cors = require("cors");
const db = require("./src/database/connection");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/colaboradores", (req, res) => {

    const { nome_completo, idade, cargo, salario, tempo_empresa, data_admissao, setor, status
      } = req.body;

    if (idade < 18) {
        return res.status(400).json({
            mensagem: "Idade mínima é 18 anos."
        });
    }

    const sql = `
        INSERT INTO colaboradores
        (nome_completo, idade, cargo, salario, tempo_empresa, data_admissao, setor, status)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(
        sql,
        [ nome_completo, idade, cargo, salario, tempo_empresa, data_admissao, setor, status],
        (err, result) => {
            if (err) {
                return res.status(500).json(err);
            }
            res.status(201).json({
                mensagem: "Colaborador cadastrado com sucesso!"
            });
        }
    );
});

app.get("/colaboradores", (req, res) => {

    db.query(
        "SELECT * FROM colaboradores",
        (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }
            res.json(result);
        }
    );
});

app.put("/colaboradores/:id", (req, res) => {

    const { id } = req.params;
    const { nome_completo, idade, cargo, salario, tempo_empresa, data_admissao, setor, status
       } = req.body;

    const sql = `
        UPDATE colaboradores
        SET
        nome_completo=?,
        idade=?,
        cargo=?,
        salario=?,
        tempo_empresa=?,
        data_admissao=?,
        setor=?,
        status=?
        WHERE id=?
    `;

    db.query(
        sql,
        [ nome_completo, idade, cargo, salario, tempo_empresa, data_admissao, setor, status, id  ],
        (err) => {

            if (err) {
                return res.status(500).json(err);
            }
            res.json({
                mensagem: "Colaborador atualizado!"
            });
        }
    );
});

app.delete("/colaboradores/:id", (req, res) => {

    const { id } = req.params;

    db.query(
        "DELETE FROM colaboradores WHERE id=?",
        [id],
        (err) => {

            if (err) {
                return res.status(500).json(err);
            }
            res.json({
                mensagem: "Colaborador removido!"
            });
        }
    );
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});