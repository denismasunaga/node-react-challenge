import Login from 'frontend/src/pages/Login/Login'
import Home from 'frontend/src/pages/Home/Home'

const routes = [
    {
        path: '/',
        name: 'Login Page',
        component: Login
    },
    {
        path: '/home',
        name: 'Home Page',
        component: Home
    },
]
export default routes