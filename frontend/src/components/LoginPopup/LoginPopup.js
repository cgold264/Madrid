import React, {useState} from 'react';
import Popup from 'reactjs-popup';

import { useSelector, useDispatch } from 'react-redux';
import { ReactBingmaps } from 'react-bingmaps';
import {falseLoginPopup} from '../../actions/userActions';
import { validateLogin } from '../../services/loginService';


export default function LoginPopup(){
    const {loginPopup} = useSelector((state) => state.popups)

    const[loginPage, setLoginPage] = useState(true) 
    const[userName, setUserName] = useState(true) 
    const[password, setPassword] = useState(true) 
    const dispatch = useDispatch();

    return <div style={{width: "100%", maxHeight: "75%"}}>
      <Popup 
            open={loginPopup} 
            position="center" 
            onClose={() => {dispatch(falseLoginPopup())}}
            >
                <button className="close" onClick={() => {dispatch(falseLoginPopup())}}>&times;</button>
        {loginPage ? 
            <>
                <div className="row text-center">
                    <h1 className="text-dark"><b>Login</b></h1>
                </div>

                <div className="m-3">
                        <form>
                            <div className="form-outline mb-4">
                                <input type="text   " for="loginUserName" className="form-control" onBlur={(input) => {
                                    setUserName(input.target.value)
                                }}/>
                                <label class="form-label" for="loginUserName" >Username</label>
                            </div>
                        <div className="form-outline mb-4">
                            <input type="password" id="loginPassword" className="form-control" />
                            <label className="form-label" for="loginPassword" onBlur={(input) => {
                                    setPassword(input.target.value)
                                }}>Password</label>
                        </div>
                        <div className="row text-center">
                            <button type="button" className="btn btn-primary btn-block mb-4" onClick={() => {
                                validateLogin(userName, password)
                            }}>
                                    Sign in
                                </button>
                        </div>
                        <div class="text-center">
                            <p>Not a member? <button type="button" className="btn button-link text-primary"onClick={() => {setLoginPage(false)}}>Register</button></p>
                        </div>
                    </form>
                </div>
                
            </>
        : <>
            <div className="row text-center">
                <h1 className="text-dark"><b>Create an Account</b></h1>
            </div>

            <div className="m-3">
                    <form>
                        <div className="form-outline mb-4">
                            <input type="email" for="loginUserName" className="form-control" />
                            <label class="form-label" for="loginUserName">Username</label>
                        </div>
                    <div className="form-outline mb-4">
                        <input type="password" id="loginPassword" className="form-control" />
                        <label className="form-label" for="loginPassword">Password</label>
                    </div>
                    <div className="row text-center">
                        <button type="button" className="btn btn-primary btn-block mb-4">
                            Register Account
                        </button>
                    </div>
                    
                    <div class="text-center">
                        <p>Already a member? <button type="button" className="btn button-link text-primary"onClick={() => {setLoginPage(true)}}>Login</button></p>
                    </div>
                </form>
            </div>
        </>
        }
        
        </Popup> 
        </div>
}
