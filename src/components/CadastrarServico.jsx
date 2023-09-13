import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';


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
            alert("Serviço cadastrado com sucesso!")
        })
        .catch(error=>{
            console.log(error);
        });
    };
    return (

        <Container> 
            <Card>
                <Card.Header as="h1">Cadastrar Serviço</Card.Header>
                <Card.Body>
                    <Form onSubmit={handleSubmit} className="add-servico-form">
                            <Form.Group className="mb-3">
                                <Form.Label as="h4">Peça</Form.Label>
                                <Form.Control
                                    type="text" placeholder="Nome da roupa: calça, saia.."
                                    value={peca}
                                    onChange={(e)=>setPeca(e.target.value)}
                                    id="peca"
                                    autoComplete="none">
                                </Form.Control>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label as="h4">Ajuste</Form.Label>
                                <Form.Control
                                    type="text" placeholder="Descripção do Ajuste"
                                    value={ajuste}
                                    onChange={(e)=>setAjuste(e.target.value)}
                                    id="ajuste"
                                    autoComplete="none">
                                </Form.Control>
                                </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label as="h4">Preço</Form.Label>
                                <Form.Control                                        type="text" placeholder="Valor do serviço em R$"
                                    value={preco}
                                    onChange={(e)=>setPreco(e.target.value)}
                                    id="preco"
                                    autoComplete="none">
                                </Form.Control>
                            </Form.Group>
                            <Button type="submit" variant="primary">Adicionar Serviço</Button>
                    </Form>
                </Card.Body>
            </Card>

        </Container>
    )
};

export default CadastrarServico;