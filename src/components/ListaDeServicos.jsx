import React, {useState, useEffect} from "react";
import CadastrarServico from "./CadastrarServico";
import "./ListaDeServico.css";
import Table from 'react-bootstrap/Table';

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
        <><CadastrarServico onCadastrarServico={handleCadastrarServico}/>

        <h1 className="title">Lista de Servicos</h1>

        <Table striped bordered hover size="sm">
    
            <thead>
                <tr>
                <th>#</th>
                <th>Peça</th>
                <th>Ajuste</th>
                <th>Preço</th>
                </tr>
            </thead>

            <tbody>
            {servicos.map((servico)=> (
                <tr>
                    <th>{servico.id}</th>
                    <td> {servico.peca}</td>
                    <td> {servico.ajuste}</td>
                    <td> {servico.preco}</td>
                </tr>
            ))}
            </tbody>
        </Table>
        </>
    );
}

export default ListaDeServicos;