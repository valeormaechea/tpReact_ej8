import React from "react";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [dni, setDni] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    console.log(nombre.value);
    e.preventDefault();
    let bool = false;
    if (nombre == "" || apellido == "" || dni == "" || email == "") {
      console.log("false");
      bool = false;
    } else {
      console.log("true");
      bool = true;
      setNombre("");
      setApellido("");
      setDni("");
      setEmail("");
    }

    mandarForm(bool);
  };

  const mandarForm = (bool) => {
    if (bool == false) alert("Completar todos los datos");
    else alert("Datos enviados correctamente");
  };

  return (
    <div className="container">
      <Form id="formulario" className="row" >
        <Form.Group className="mb-3 col-md-6">
          <Form.Label>Nombres</Form.Label>
          <Form.Control
            type="text"
            placeholder="Juan"
            onChange={(e) => setNombre(e.target.value.trimStart())}
            value={nombre}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3 col-md-6">
          <Form.Label>Apellidos</Form.Label>
          <Form.Control
            type="text"
            placeholder="Perez"
            onChange={(e) => setApellido(e.target.value.trimStart())}
            value={apellido}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3 col-md-6">
          <Form.Label>DNI</Form.Label>
          <Form.Control
            type="number"
            placeholder="42005785"
            onChange={(e) => setDni(e.target.value.trimStart())}
            value={dni}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3 col-md-6">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="persona@servicio.com"
            onChange={(e) => setEmail(e.target.value.trimStart())}
            value={email}
            required
          />
        </Form.Group>

        <Button id="botonEnviar" type="submit" onClick={handleSubmit}>
          Enviar
        </Button>
      </Form>
    </div>
  );
};

export default Formulario;
