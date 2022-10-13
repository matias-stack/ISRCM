import React from "react";
import {Container} from "react-bootstrap";
import { Form } from "react-bootstrap";
import "../styles/Login.css"

export default function Login(){
    return(
        <Container>
            <Form>
                <img src="../assets/Login.png" alt="ISCRM"/>
            </Form>
        </Container>
    );
}