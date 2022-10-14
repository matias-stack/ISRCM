import React from "react";
import {Container} from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "../styles/Login.css"
import Logo from "../assets/Logo.png"

export default function Login(){
    return(
        <Container id="main-container" className="d-grid h-100">
            <Form id="sign-in-form" className="text-center w-100">
                <img className="mb-4 isrcm-logo" src={Logo} alt="ISCRM"/>
                <h1 className="mb-3 fs-3 fw-normal">Inicia sesion por favor</h1>
                
                <Form.Group controlId="sing-in-email-address">
                    <Form.Control required type='email' size='lg' placeholder="correo electronico" autoComplete="username" className="position-relative"/>
                </Form.Group>
                
                <Form.Group controlId="sing-in-password" className="mb-3">
                    <Form.Control required type='password' size='lg' placeholder="contraseña" autoComplete="current -password" className="position-relative"/>
                </Form.Group>

                <Form.Group controlId="remember-me" className="d-flex justify-content-center">
                    <Form.Check label="recuerdame"/>
                </Form.Group>
                <Button variant="primary" size="lg">iniciar</Button>
            </Form>
        </Container>
    );
}