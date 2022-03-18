import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import axios from "axios";
import Container from "./Container.js";
import {Wrapper} from "./styles/SignIn.styled.js";

const SignUp = () => {
    const {handleSubmit, register} = useForm()
    const navigate = useNavigate()


    const onSignUp = (data) => {
        axios.post('/api/user/sign_up', data)
            .then(({data}) => {
                alert(data.message)
                navigate('/sign_in')
            })
            .catch(e => alert(e.response?.data?.message || "Error"))
    }

    return (
        <Container>
            <Wrapper>
                <form onSubmit={handleSubmit(onSignUp)} className='form'>
                    <h3 className='text-center'>Welcome!</h3>


                    <label htmlFor="name">Name</label>
                    <input {...register('name', {required: true})} type="text" id="name"
                               placeholder="Enter name"/>

                    <label htmlFor="email">Email address</label>
                    <input {...register('email', {required: true})} type="email" id="email"
                               placeholder="Enter email"/>

                    <label htmlFor="password">Password</label>
                    <input {...register('password', {required: true})} type="password" id="password" placeholder="Password"/>

                    <div className='text-center'>
                        <p className='text-end'>
                            <Link  to='/sign_in'>Sign In</Link>
                        </p>
                        <button>Sign up</button>
                    </div>
                </form>
            </Wrapper>
        </Container>
    );
};

export default SignUp;