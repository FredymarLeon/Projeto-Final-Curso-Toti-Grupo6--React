import React from "react";


function EditarServico({onEditarServico}){
    const [id, setId] = useState("");
    const [peca, setPeca] = useState("");
    const [ajuste, setAjuste] = useState("");
    const [preco, setPreco] = useState("");

    const servico = {peca, ajuste, preco};
    fetch(`http://localhost:5000/servicos/${selectedServico.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(servico),
        })
        .then((response) => response.json())
        .then((data) => {
            const servicos = servicos.map((servico) =>
            servico.id === selectedServico.id ? data : servico
            );
            setServicos(servico);

            setSelectedServico(data);

        })
};

export default EditarServico;