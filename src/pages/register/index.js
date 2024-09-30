import React from "react"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth }   from '../../services/firbease';

class Register extends React.Component{
    constructor(){
        super()
        this.state = {
            firstName: '',
            lastName:'',
            email:'',
            password:'',
            loading:false
        }
    }
    handleChangeInput = e =>{
        const { name , value } = e.target         
        
        this.setState ({
            [name]:value
        });
    }

    handleRegister = async e=>{
        e.preventDefault();
        const {email, password } = this.state
        this.setState({
            loading:true
        });

        try{
           await createUserWithEmailAndPassword(auth,email,password)
        }
        catch{
            console.log("error;");  
        }
        finally{
            this.setState({
                loading:false
            })
        }
    }
    render(){
        const { loading } = this.state
        return(
          <div>
                <fieldset>
                    <legend>Register</legend>
                    <form onSubmit={this.handleRegister}>   
                        <label htmlFor = "">
                            <p>First Name</p>
                            <input name="firstName"  type="text" placeholder="First Name" onChange={this.handleChangeInput}/>
                        </label>
                        <label htmlFor = "">
                            <p>Last Name</p>
                            <input name="lastName" type="text" placeholder="Last Name"  onChange={this.handleChangeInput}/>
                        </label>
                        <label htmlFor = "">
                            <p>Email</p>
                            <input  name="email" type="email" placeholder="Email"  onChange={this.handleChangeInput}/>
                        </label>
                        <label htmlFor = "">
                            <p>Password</p>
                            <input name="password" type="password" placeholder="Password" onChange={this.handleChangeInput}/>
                        </label>
                        <hr/>
                        <button>{ loading ? "Loading..." : "Register"} </button>
                    </form>
                </fieldset>
            </div>
        )
    }
}

export default Register