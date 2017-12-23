import React from 'react'
import {Link} from 'react-router-dom'

export default class MenuContinente extends React.Component{
    render(){
        return(
           <div>
               
                 <Link to="/timesamerica" class="link-continentes" >

                <img class="img-continentes" src="https://upload.wikimedia.org/wikipedia/commons/3/38/Am%C3%A9rique_fran%C3%A7aise.JPG" alt="imagem america"/>
               
                </Link>

                <Link to="/timeseuropa" class="link-continentes">
                <img class="img-continentes" src="http://blogs.rochester.edu/thegreendandelion/wp-content/uploads/2011/01/Europe1.jpg" alt="imagem america"/>
                </Link>



              
              
           </div>
        )
    }
}
