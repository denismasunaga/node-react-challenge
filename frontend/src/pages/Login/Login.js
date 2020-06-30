import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./Login.css";
import AuthenticationService from "../../services/Authentication/Authentication";
import { useHistory, Redirect } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    let auth = new AuthenticationService();

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            await auth.doLogin(email, password)
            history.push('/home')

        } catch (error) {
            throw error
        }

    }

    if (auth.isAuthenticated()) return <Redirect to='/home' />

    return (
        <div className="Login">
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        autoFocus
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="password" >
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                </Form.Group>
                <Button disabled={!validateForm()} variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        </div>
    );
}