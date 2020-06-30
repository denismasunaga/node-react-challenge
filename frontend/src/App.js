import React from 'react';
import './App.css';
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter,
    Route
} from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

function App() {
    return (
        <div className="App">
            <header className="Frontend">
                <BrowserRouter>
                        <Route exact path="/" >
                            <Login />
                        </Route>
                        <PrivateRoute exact path="/home" component={Home}/>
                </BrowserRouter>
            </header>
        </div>
    );
}

export default App;
