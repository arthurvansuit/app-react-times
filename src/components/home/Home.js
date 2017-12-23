import React from 'react'
import MenuLogin from './MenuLogin'
import MenuContinente from './MenuContinente'

export default class Home extends React.Component{
    render(){
        return(
           <div>
               <MenuLogin/>
               <MenuContinente/>
           </div>
        )
    }
}



