import React from 'react'
import {Link} from 'react-router-dom'



export default class MenuLogin extends React.Component{
    render(){
        return(
           <div class="menu-login">
              
            <ul class="menu-login__container">
            <li class="menu-login__item">  <Link to="/cadastro" >Login</Link></li>
            
            
             <li class="menu-login__item"> <Link to="/cadastrar" >Cadastrar</Link></li>
         </ul>


           </div>
           
         
               
        )
    }
}
