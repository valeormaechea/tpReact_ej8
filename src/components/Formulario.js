import React from 'react';
import { Form, Button } from 'react-bootstrap';
const Formulario = () => {

    return (
        <div className='container'>
            <Form id='formulario' className='row'>
                <Form.Group className="mb-3 col-md-6">
                    <Form.Label>Nombres</Form.Label>
                    <Form.Control type="text" placeholder="Juan" required />
                </Form.Group>
                <Form.Group className="mb-3 col-md-6">
                    <Form.Label>Apellidos</Form.Label>
                    <Form.Control type="text" placeholder="Perez" required />
                </Form.Group>
                <Form.Group className="mb-3 col-md-6">
                    <Form.Label>DNI</Form.Label>
                    <Form.Control type="number" placeholder="42005785" required />
                </Form.Group>
                <Form.Group className="mb-3 col-md-6">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="persona@servicio.com" />
                </Form.Group>

                <Button id='botonEnviar' type="submit">
                    Enviar
                </Button>
            </Form >
        </div>
    );
};

export default Formulario;