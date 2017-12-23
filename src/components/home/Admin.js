import React from 'react'
import {Route, Link} from 'react-router-dom'


export default class Admin extends React.Component{
    render(){
        return(
            <div>
                <h3>Continentes</h3>
                <ul>
                    <li><Link to="/adm/america">América</Link></li> 
                    <li><Link to="/adm/europa">Europa</Link></li>
                    </ul>
                <Route path="/adm/america" component={América}/>
                <Route path="/adm/europa" component={Europa}/>
                </div>
        )
    }
}
