import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import axios from "axios";

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
        <form onSubmit={handleSubmit(onSignUp)} className='signup-form'>
            <h3 className='signup-title'>Welcome!</h3>

            <div className="form-group mb-3">
                <label className='signup-subtitle' htmlFor="name">Name</label>
                <input {...register('name', {required: true})} type="text" className="form-control" id="name" aria-describedby="emailHelp"
                       placeholder="Enter name"/>
            </div>
            <div className="form-group mb-3">
                <label className='signup-subtitle' htmlFor="email">Email address</label>
                <input {...register('email', {required: true})} type="email" className="form-control" id="email" aria-describedby="emailHelp"
                       placeholder="Enter email"/>
            </div>
            <div className="form-group mb-3">
                <label className='signup-subtitle' htmlFor="password">Password</label>
                <input {...register('password', {required: true})} type="password" className="form-control" id="password" placeholder="Password"/>
            </div>
            <div className='text-center'>
                <p className='text-end'>
                    <Link  to='/sign_in'>Sign In</Link>
                </p>
                <button type="submit" className="signup-btn">Sign up</button>
            </div>
        </form>
    );
};

export default SignUp;