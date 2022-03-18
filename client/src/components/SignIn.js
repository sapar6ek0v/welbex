import React, {useState} from 'react';
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {singIn} from "../redux/action/userActions.js";

const SignIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onSignIn = () => {
        axios.post('/api/user/sign_in', {email, password})
            .then(({data}) =>{
                dispatch(singIn(data))
                navigate('/')
            })
            .catch(e => alert(e.response?.data?.message || "Error!"))
    }

    return (
        <form className='signup-form'>

            <div className="form-group mb-3">
                <label className='signup-subtitle' htmlFor="email">Email address</label>
                <input onChange={e => setEmail(e.target.value)} type="email" className="form-control" id="email" aria-describedby="emailHelp"
                       placeholder="Enter email"/>
            </div>

            <div className="form-group mb-3">
                <label className='signup-subtitle' htmlFor="password">Password</label>
                <input onChange={e => setPassword(e.target.value)} type="password" className="form-control" id="password" placeholder="Password"/>
            </div>

            <div className='text-center'>
                <p className='text-end'>
                    <Link to='/sign_up'>Sign Up</Link>
                </p>
                <button onClick={onSignIn} type="button" className="signup-btn">Sign In</button>
            </div>

        </form>
    );
};

export default SignIn;