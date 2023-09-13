import React, {useState, useEffect} from "react";
import CadastrarServico from "./CadastrarServico";
import "./ListaDeServico.css";
import Table from 'react-bootstrap/Table';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Button } from "react-bootstrap";


function ListaDeServicos(){
    const [servicos, setServicos]= useState([]);


    useEffect(()=>{
        fetch("http://localhost:5000/servicos")
        .then((res)=> res.json()) 
        .then((data)=> setServicos(data))
        .catch((error)=> console.log(error));
    }, []);

        const handleCadastrarServico = (servico)=>{
            setServicos((prevServico)=> [...prevServico, servico]);
        }

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
                    <td>
                        <ButtonGroup aria-label="Basic example">
                            <Button variant="primary">Editar</Button>
                            <Button variant="danger">Deletar</Button>
                        </ButtonGroup></td>
                </tr>
            ))}
            </tbody>
        </Table>
        </>
    );
}

export default ListaDeServicos;
