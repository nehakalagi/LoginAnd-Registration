import React, { Component } from 'react';
import './App.css';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const api = axios.create({
    baseURL: 'https://ttmg-backend.herokuapp.com'
})

const notify = () => toast('Login Successful');

const Login = (props) => {
    const history = useHistory();
    const handleClick = async () => {
        try {
            const res = await api.post('/api/auth/staffLogin', {
                email: "nehak@gmail.com", password: "nehak@123",
            })
            console.log(res)


            if (res.status == 200) {
                history.push('/LoginNewPage');
            }
            else {
                console.log('failed');
            }

        }
        catch (e) {
            console.log('Error', e);

        }


    }

    // States for registration
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // States for checking the errors
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);


    // Handling the email change
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
    };

    // Handling the password change
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
    };

    // Handling the form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === '' || password === '') {
            setError(true);
        } else {
            setSubmitted(true);
            setError(false);
        }
    };


    return (
        <div className="form">
            <div>
                <h1>Login</h1>
            </div>

            <form>
                {/* Labels and inputs for form data */}


                <label className="label">Email</label>
                <input onChange={handleEmail} className="input"
                    value={email} type="email" required />

                <label className="label">Password</label>
                <input onChange={handlePassword} className="input"
                    value={password} type="password" required />

                <button className="btn" type="submit" onClick={handleClick}>
                    Login
                </button>
            </form>

            <div>
                <Toaster
                    position="bottom-center"
                    reverseOrder={false}
                />
            </div>
        </div>
    );
}


export default Login;