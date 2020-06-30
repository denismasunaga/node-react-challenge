import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import {Button} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import AuthenticationService from "../../services/Authentication/Authentication";

export default function Home() {
    const history = useHistory();
    let auth = new AuthenticationService();

    async function handleClick() {
        auth.deleteToken();
        history.push('/')
    }

    return (
        <div className="Home">
            <Jumbotron><h1>Bem vindo!</h1></Jumbotron>
            <Button onClick={handleClick}>
                Logout
            </Button>
        </div>
    )
}