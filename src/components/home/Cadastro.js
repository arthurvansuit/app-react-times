import React from 'react';

export default class Cadastro extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: "",
            senha: ""
        }
    }
    onChangeEmail(event){
        let email = event.target.value;
            this.setState({email});
    }
    onChangeSenha(event){
        let senha = event.target.value;
        this.setState({senha});
    }
onSave(event){
event.preventDefault();
alert("Bem vindo"+JSON.stringify(this.state));
}
render(){
    return(
    
    <div><form onSubmit = {this.onSave.bind(this)}>
        <div>
   <label> Email </label><br/>
    <input value = {this.state.email}
    onChange = {this.onChangeEmail.bind(this)}/>
   </div>

     <div> 
   <label>Senha</label><br/>
   <input value = {this.state.senha}
    onChange = {this.onChangeSenha.bind(this)}/>
    </div>


        <div>
     <p><button type = "submit"> Entrar </button></p>
         </div>

</form>

          </div>

                )
     }
  }