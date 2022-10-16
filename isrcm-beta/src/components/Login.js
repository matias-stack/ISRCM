import React from "react";
import {Container} from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import "../styles/Login.css"
import Logo from "../assets/Logo.png"

export default function Login(){
    return(
            <Container id="main-container" className="d-grid h-100 ">
             <Card id="card-login" className=" text-center ">
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
                        <div className="d-grid">
                        <Button id="boton" variant="primary" size="lg">iniciar</Button>
                        </div>
                        <div className="d-grid">
                        <Button variant="link" size="lg">Crear usuario</Button>
                        </div>
                    </Form>
                </Card>
                <section id="Footer" class="Footer">
                    <footer class="text-center text-white">
                        <div class="container p-4 pb-0">
                        <section class="">
                            <p class="d-flex justify-content-center align-items-center">
                            <span class="me-3"></span>
                            <button type="button" class="btn btn-outline-light btn-rounded">
                                acerca de nosotros
                            </button>
                            </p>
                        </section>
                        </div>
                        <div class="text-center p-3">
                        © 2022 Copyright: I.S.C.R.M.
                        </div>
                    </footer>
                </section>   
            </Container>
  
    );
}