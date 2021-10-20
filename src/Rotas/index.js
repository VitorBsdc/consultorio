import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
 
import Home from '../paginas/Home';
import Contato from '../paginas/Contato';
import Missao from "../paginas/Missao";
import Planos from '../paginas/Planos';
 
const Rotas = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/'        component={ Home } />
            <Route exact path='/Contato' component={ Contato } />
            <Route exact path='/Missao' component={ Missao } />
            <Route exact path='/Planos' component={ Planos } />
        </Switch>
    </BrowserRouter>
);
 
export default Rotas;