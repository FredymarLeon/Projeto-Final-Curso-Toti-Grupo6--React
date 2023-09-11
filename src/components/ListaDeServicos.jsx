import React, {useState, useEffect} from "react";
import CadastrarServico from "./CadastrarServico";
import "./ListaDeServico.css";

function ListaDeServicos(){
    const [servicos, setServicos]= useState([]);
    const [servicoEditado, setServicoEditado] = useState(null);

    useEffect(()=>{
        fetch("http://localhost:5000/servicos")
        .then((res)=> res.json()) 
        .then((data)=> setServicos(data))
        .catch((error)=> console.log(error));
    }, []);

        const handleCadastrarServico = (servico)=>{
            setServicos((prevServico)=> [...prevServico, servico]);
        }

        const handleEliminarServico = (id) => {
            setServicos((prevServicos) => prevServicos.filter((servico) => servico.id !== id));
        };

        const handleEditarServico = (servico) => {
            setServicoEditado(servico);
        };

        const handleSalvarServicoEditado = (servicoEditado) => {
            setServicos((prevServicos) =>
              prevServicos.map((servico) =>
                servico.id === servicoEditado.id ? servicoEditado : servico
              )
            );
            setServicoEditado(null);
        };

    return(
        <div className="container"><CadastrarServico onCadastrarServico={handleCadastrarServico}/>
            <h1 className="title">Lista de Servicos</h1>

            <ul className="servico-list">
                {servicos.map((servico)=> (
                    <li key={servico.id} className="servico-list-item">
                        <div className="servico-info">
                            <div className="servico-peca">
                            {servico.peca}</div>
                            <div className="servico-ajuste">
                            {servico.ajuste}</div>
                            <div className="servico-preco">
                            {servico.preco}</div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListaDeServicos;