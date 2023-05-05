import React from "react";
import LoginForm from "../../Componentes/LoginBox/LoginForm";
import { Container } from "@mui/material";

function Login(props ) {

    return (
        <Container >
           
            <div className="container">
                <LoginForm/> 
            </div>
           
           
        </Container>      
    );
}
export default Login;