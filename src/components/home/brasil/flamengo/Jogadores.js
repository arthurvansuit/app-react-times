import React from 'react'
import {Link} from 'react-router-dom'
import ServicoTime from '../../../../servicos/ServicoTime'

export default class Jogadores extends React.Component{
    constructor(props){
        super(props);
        let param = this.props.match.params.id;
        this.state ={
            jogador: ServicoTime.flamengo.find((jog)=>jog.id === param)
        }
    }
render(){
    return(
        <div>
            <p>
            <li><Link to="/flamengo"> </Link> 
               <h3>Nome: {this.state.jogador.nome}</h3>
               <h3>Data de Nascimento:  {this.state.jogador.dataNascimento}</h3>
               <h3>No clube desde:  {this.state.jogador.anoNoClube}</h3>
               <h3>Jogos/Gols:  {this.state.jogador.jogosGols}</h3>
               </li>
               </p>
              
            </div>

        

            
                )
     }
  }