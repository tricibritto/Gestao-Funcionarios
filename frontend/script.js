const api = "http://localhost:3000/colaboradores";

async function listar() {

    const resposta = await fetch(api);
    const dados = await resposta.json();

    const lista = document.getElementById("lista");

    lista.innerHTML = "";

    dados.forEach(colaborador => {

        lista.innerHTML += `
        <tr>
            <td>${colaborador.nome_completo}</td>
            <td>${colaborador.cargo}</td>
            <td>${colaborador.setor}</td>
            <td class="${
                colaborador.status === "Ativo"
                    ? "status-ativo"
                    : "status-inativo"
            }">
                ${colaborador.status}
            </td>
        </tr>
        `;
    });
}

listar();

document
    .getElementById("formulario")
    .addEventListener("submit", async (e) => {

        e.preventDefault();

        const colaborador = {

            nome_completo: document.getElementById("nome").value,
            idade: document.getElementById("idade").value,
            cargo: document.getElementById("cargo").value,
            salario: document.getElementById("salario").value,
            tempo_empresa: document.getElementById("tempo").value,
            data_admissao: document.getElementById("admissao").value,
            setor: document.getElementById("setor").value,
            status: document.getElementById("status").value

        };

        await fetch(api, {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(colaborador)

        });

        document.getElementById("formulario").reset();

        listar();
    });