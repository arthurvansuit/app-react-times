import React from 'react'
import {Link} from 'react-router-dom'

export default class TimesBrasil extends React.Component{
render(){
    return(
        <div>
             <li class="brasil"> <Link to="/times/flamengo">Flamengo
             <img class="bandeira" src="https://www.fabricadebandeiras.com.br/img/products/bandeira-flamengo_1_1200.jpg" alt="imagem flamengo"/></Link></li>
            <h3 class="informacoes">Nome: Clube de Regatas do Flamengo
                <p>Fundação: 17 de novembro de 1895, Rio de Janeiro</p>
                <p>Mascote: Urubu</p>
                <p>Presidente atual: Eduardo Bandeira de Mello</p>
                <p>Treinador: Reinaldo Rueda</p>
            </h3>
            </div>
                )
     }
  }