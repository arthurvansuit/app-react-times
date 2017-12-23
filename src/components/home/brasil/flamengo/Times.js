import React from 'react'
import {Link} from 'react-router-dom'
import ServicoTime from '../../../../servicos/ServicoTime'


export default class Times extends React.Component{
constructor(props){
  super(props);
  let time = this.props.match.params.nomeTime;
  this.state = {
    jogadores : ServicoTime[time]
  }
}

render(){
    const jogadores = this.state.jogadores.map((jog)=>{
      return (
        <p>
        <li class="jogadores"><Link to={{
            pathname: '/jogadores/'+jog.id,
        
        }}>{jog.nome}<img className="imgjogadores" src={jog.imagem} alt={jog.nome}/></Link></li>
        </p>
      )
    })
    return(
        
        <div>
          <Link to="/flamengo"></Link>
          <div>
            
          {jogadores}
         
          </div>

            </div>
                )
     }
  }