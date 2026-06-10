const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "startup"
});

connection.connect((err) => {
    if (err) {
        console.log("Erro ao conectar:", err);
        return;
    }

    console.log("MySQL conectado!");
});

module.exports = connection;