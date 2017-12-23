import React from 'react';
import {Link} from 'react-router-dom'

export default class TimesAmerica extends React.Component{
render(){
    return(
        <div>
               <li class="brasil"><Link to="/timesbrasil">Brasil
              <img class="bandeira" src="https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg" alt="imagem brasil"/></Link></li>
            </div>

            
                )
     }
  }