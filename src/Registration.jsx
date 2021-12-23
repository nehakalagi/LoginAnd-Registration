import React, { Component } from 'react';
import './App.css';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const api = axios.create({
    baseURL: 'https://ttmg-backend.herokuapp.com'
})

const notify = () => toast('Registration Successful');

const Registration = () => {
    const history = useHistory();
    const handleClick = async () => {
        try {
            const res = await api.post('/api/auth/staffRegister', {
                email: "neha1234@gmail.com", password: "nehak@123",
                name: "nehak", mobile: "8050475152"
            })
            console.log(res)


            if (res.status == 200) {
                history.push('/Login');
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
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mobile, setMobile] = useState('');

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

    // Handling the name change
    const handleName = (e) => {
        setName(e.target.value);
        setSubmitted(false);
    };

    // Handling the mobile no. change
    const handleMobile = (e) => {
        setMobile(e.target.value);
        setSubmitted(false);
    };

    // Handling the form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === '' || email === '' || password === '' || mobile === '') {
            setError(true);
        } else {
            setSubmitted(true);
            setError(false);
        }
    };


    return (
        <div className="form">
            <div>
                <h1>User Registration</h1>
            </div>

            {/* Calling to the methods */}
            <form>
                {/* Labels and inputs for form data */}


                <label className="label">Email</label>
                <input onChange={handleEmail} className="input"
                    value={email} type="email" required />

                <label className="label">Password</label>
                <input onChange={handlePassword} className="input"
                    value={password} type="password" required />

                <label className="label">Name</label>
                <input onChange={handleName} className="input"
                    value={name} type="text" required />

                <label className="label">Mobile No.</label>
                <input onChange={handleMobile} className="input"
                    value={mobile} type="tel" placeholder="888 888 8888" pattern="[0-9]" maxLength="10" title="Ten digits code" required />

                <button onClick={handleClick} className="btn" type="submit">
                    Submit
                </button>

                <div>
                    <Toaster
                        position="bottom-center"
                        reverseOrder={false}
                    />
                </div>
            </form>
        </div>
    );
}


export default Registration;