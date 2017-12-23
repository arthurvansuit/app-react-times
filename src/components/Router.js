import React from 'react'
import {BrowserRouter as Roteador, Switch,Route} from 'react-router-dom'
import Home from './home/Home'
import Cadastro from './home/Cadastro'
import Cadastrar from './home/Cadastrar'
import TimesAmerica from './home/TimesAmerica'
import TimesEuropa from './home/TimesEuropa'
import TimesBrasil from './home/brasil/TimesBrasil'
import Times from './home/brasil/flamengo/Times'
import Jogadores from './home/brasil/flamengo/Jogadores'

export default class Router extends React.Component{
    render(){
        return(
            <Roteador>
                <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/cadastro" component={Cadastro}/>
                <Route path="/cadastrar" component={Cadastrar}/>
                <Route path="/timesamerica" component={TimesAmerica}/>
                <Route path="/timeseuropa" component={TimesEuropa}/>
                <Route path="/timesbrasil" component={TimesBrasil}/>
                <Route path="/times/:nomeTime" component={Times}/>
                <Route path="/jogadores/:id" component={Jogadores}/>
            </Switch>
            </Roteador>
        )
    }
}



