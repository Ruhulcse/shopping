import React, { useState } from 'react'
import {URL} from "../utils/config"
import "../css/register.css"
import axios from 'axios';
import Nav from '../Components/Nav';
function Registration({history}) {

    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [msg, setMsg] = useState("");

    const Login = () =>{
        history.push('/login');
    }
    const submitHandler = async (e) => {
        e.preventDefault();
        const userSchema = {
            FirstName,
            LastName,
            email,
            password,
        };
        
        try {
            const {data} = await axios.post(`${URL}users/registration`,userSchema);
            console.log(data);
            if(data){
                setMsg("Registratoin successfull!!")
                history.push('/login');
            }
        } catch (error) {
            setMsg(error.response.data.message)
        }
    }
    return (
        <div>
            <Nav/>
            <h1 style={{paddingBottom: "3%"}}>.</h1>
            <div class="container register">
                <div class="row">
                    <div class="col-md-3 register-left">
                        <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt=""/>
                        <h3>Welcome</h3>
                    </div>
                    <div class="col-md-9 register-right">
                        <div class="tab-content">
                            <div class="tab-pane fade show active">
                                {msg?(<p class="register-heading" style={{color: "red"}}>{msg}</p>):<h3 class="register-heading">Register as Customer</h3>}
                                <div>
                                <form onSubmit={submitHandler}>
                                <div class="row register-form">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input 
                                            type="text" 
                                            class="form-control" 
                                            placeholder="First Name *" 
                                            value={FirstName}
                                            onChange={(e) => setFirstName(e.target.value)} />
                                        </div>
                                        <div class="form-group">
                                            <input type="email"
                                             class="form-control" 
                                             placeholder="Your Email *"
                                             value={email}
                                             onChange={(e) =>
                                                 setEmail(e.target.value)
                                             } />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input type="text"
                                             class="form-control"
                                             placeholder="Lastname *" 
                                             value={LastName}
                                             onChange={(e) =>
                                                 setLastName(e.target.value)
                                             }  />
                                        </div>
                                        <div class="form-group">
                                            <input
                                             type="password"
                                             class="form-control"  
                                             placeholder="Password *"
                                             value={password}
                                             onChange={(e) =>
                                                 setPassword(e.target.value)
                                             }/>
                                             {(password.length>0&&password.length<8)&&<p>minimum password length is 8</p>}
                                        </div>
                                        <button type="submit" class="btnRegister">
                                          Register
                                        </button>
                                    </div>     
                                </div>
                                </form>
                                <div className="pl-5">
                                <h4>have a account?</h4>
                                    <button type="submit" class="btn btn-success"
                                    onClick={Login}
                                    >
                                         Login
                                    </button>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Registration
