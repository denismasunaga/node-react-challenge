import axios from 'axios'
import React from "react";
import { Redirect } from "react-router-dom/";

export default class AuthenticationService {
    constructor () {
        this.http = axios
    }

    async doLogin (email, password) {
        try {
            const token = await this.http.post(
                `/login`,
                { email: email, password: password })
            this.setToken(token.data['token'])
            return <Redirect to='/home' />
        } catch (error) {
            throw error
        }
    }

    setToken(token) {
        localStorage.setItem('@frontend/token', token);
    }

    deleteToken() {
        localStorage.removeItem('@frontend/token')
    }

    isAuthenticated() {
        return localStorage.getItem('@frontend/token') !== null
    }


}