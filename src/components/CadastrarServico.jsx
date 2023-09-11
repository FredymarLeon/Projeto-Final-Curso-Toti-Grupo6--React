import React, {useState} from "react";

function CadastrarServico({onCadastrarServico}){
    const [peca, setPeca] = useState("");
    const [ajuste, setAjuste] = useState("");
    const [preco, setPreco] = useState("");
    const handleSubmit=(e)=>{
        e.preventDefault();

        const servico = {peca, ajuste, preco};
        fetch("http://localhost:5000/servicos", {method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify(servico)})
        .then(response=>{
            if(response.ok){
                return response.json();
            } else{
                throw new Error("Erro ao adicionar o servico");
            }
        })
        .then(data=>{
            onCadastrarServico(data);
            setPeca("");
            setAjuste("");
            setPreco("");
        })
        .catch(error=>{
            console.log(error);
        });
    };
    return (
        <form onSubmit={handleSubmit}className="add-servico-form">
            <h2 className="subtitle">Adicionar Servico</h2>
            <div className="form-group">
                <label htmlFor="nome" className="label">Peca</label>
                <input
                    type="text"
                    value={peca}
                    onChange={(e)=>setPeca(e.target.value)}   className="input"
                    id="peca"
                    autoComplete="none">
                </input>
            </div>
            <div className="form-group">
                <label htmlFor="ajuste" className="label">Ajuste</label>
                <input
                    type="text"
                    value={ajuste}
                    onChange={(e) => setAjuste(e.target.value)}
                    className="input"
                    id="ajuste"
                    autoComplete="none"></input>
            </div>
            <div className="form-group">
                <label htmlFor="preco" className="label">Preco</label>
                <input
                    type="text"
                    value={preco}
                    onChange={(e) => setPreco(e.target.value)}
                    className="input"
                    id="preco"
                    autoComplete="none">
                </input>
            </div>
            <button type="submit" className="button">Adicionar</button>
        </form>
    )
};

export default CadastrarServico;