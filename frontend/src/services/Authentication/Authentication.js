import axios from 'axios'

export default class AuthenticationService {
    constructor () {
        this.http = axios
    }

    async doLogin (email, password) {
        try {
            const token = await this.http.post(
                `/login`,
                { email: email, password: password })

            return token
        } catch (error) {
            throw error
        }
    }
}