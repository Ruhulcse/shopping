import React,{useState} from 'react'
import axios from 'axios';
import {URL} from "../utils/config"
import "../css/Login.css"
import Nav from '../Components/Nav';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errormsg, setErrormsg] = useState('');
   

    const submitHandler = async (e) => {
        e.preventDefault();
        const loginData = {};
        loginData.email = email;
        loginData.password = password;
       
        try {
            const {data} = await axios.post(`${URL}users/login`,loginData);
            console.log(data);
            if(data.message === "successfully login"){
                localStorage.setItem('user', true);
                localStorage.setItem('userData', JSON.stringify(data.data));
                window.location.href = '/';
            }
            else{
                setErrormsg("Invalid email or password");
            }
        } catch (error) {
            
        }
    }
    return (
        <div>
            <Nav/>
            <h1 style={{paddingBottom: "3%"}}>.</h1>
            <div class="container pt-5">
            <div class="d-flex justify-content-center h-100">
                <div class="card">
                    <div class="card-header">
                        <h3 className="d-flex justify-content-center">Sign In </h3>
                    </div>
                    <div class="card-body">
                        {errormsg&&<p style={{color:"red"}}>{errormsg}</p>}
                        <form onSubmit={submitHandler}>
                            <div class="input-group form-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text"><i class="fas fa-envelope"></i></span>
                                </div>
                                <input 
                                type="email" 
                                class="form-control"
                                placeholder="Email"
                                value={email}
                                onChange={(e) =>
                                    setEmail(e.target.value)
                                }
                                 />
                                
                            </div>
                            <div class="input-group form-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text"><i class="fas fa-key"></i></span>
                                </div>
                                <input
                                 type="password" 
                                 class="form-control"
                                 placeholder="password"
                                 value={password}
                                 onChange={(e) =>
                                     setPassword(e.target.value)
                                 }
                                  />
                            </div>
                            <div class="form-group">
                                <input type="submit" value="Login" class="btn float-right login_btn"/>
                            </div>
                        </form>
                    </div>
                    <div class="card-footer">
                        <div class="d-flex justify-content-center links">
                            Don't have an account?<a href="/registration">Sign Up</a>
                        </div>
                    </div>
                </div>
            </div>
           </div>
        </div>
    )
}

export default Login