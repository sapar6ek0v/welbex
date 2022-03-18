import React, {useState} from 'react';
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {singIn} from "../redux/action/userActions.js";
import {Wrapper} from "./styles/SignIn.styled.js";
import Container from "./Container.js";

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
        <Container>
            <Wrapper>

                <div className="form">
                    <label htmlFor="email">Email address</label>
                    <input onChange={e => setEmail(e.target.value)} type="email" id="email"
                           placeholder="Enter email"/>


                    <label htmlFor="password">Password</label>
                    <input onChange={e => setPassword(e.target.value)} type="password" id="password" placeholder="Password"/>

                    <div className='text-center'>
                        <p className='text-end'>
                            <Link to='/sign_up'>Sign Up</Link>
                        </p>
                        <button onClick={onSignIn} type="button">Sign In</button>
                    </div>
                </div>

            </Wrapper>
        </Container>
    );
};

export default SignIn;