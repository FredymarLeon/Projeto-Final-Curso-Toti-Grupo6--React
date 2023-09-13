import React from "react";
import CadastrarServico from "./CadastrarServico";


function DeletarServico({onDeletarServico}){
    const [peca, setPeca] = useState("");
    const [ajuste, setAjuste] = useState("");
    const [preco, setPreco] = useState("");
    const servico = {peca, ajuste, preco};

    fetch(`http://localhost:5000/contatos/${servico.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(servico),
      })


};


export default DeletarServico;

        
