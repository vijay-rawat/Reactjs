import React, { Component } from 'react'

 class UserGreetings extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              isLoggedIn: true 
         }
     }
     //Ternary operator Approach
    render() { return this.state.isLoggedIn ?(
        <div>welcome vijay</div>
    ): <div>WELCOME Guest</div>
    

        //Second APPROACH

        //let message
        //if (this.state.isLoggedIn){
          //  message= <div>Welcome vijay</div>
        //} else {
          //  message = <div> welcome guest</div>
        //}
        //return <div> {message}</div>

//FIRST APPROACH

       // if(this.state.isLoggedIn) {
         //   return <div>Welcome visvas</div>
        //} else 
        //return <div>Welcome Guest</div>
        //return (
          //  <div>
           //  <div>Welcome viasvas</div>
            // <div>Welcome Guest</div>

           // </div>
        
    }
}

export default UserGreetings
