import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    
    const navigate = useNavigate();
    
    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const loginAuthCookie = JSON.parse(localStorage.getItem('loginAuthCookie'));
    
    useEffect(() => {
        return () => {
            if (loginAuthCookie) {
                setUser({ ...user, email: loginAuthCookie[0]['email'] })
            }
        }
    }, [])

    const handleOnLoginClick = async (event) => {

        event.preventDefault();

        const { email, password } = user;

        let userLogin = await axios.post('http://localhost:5050/user/login', { email, password })

        if (userLogin) {

            userLogin = await userLogin.data;

            console.log(userLogin)

            alert(userLogin[0]['_id'])
            alert("Login Successfully.")

            sessionStorage.setItem('loginAuthSession', JSON.stringify(userLogin))

            let rememberMe = document.getElementById('loginAuthCookie')

            if (rememberMe.checked) {
                localStorage.setItem('loginAuthCookie', JSON.stringify(userLogin));
            }

            navigate('/user/crud', { replace: true });

            navigate(0);

        }
        else {
            alert("Invalid email & password.")
        }
        setUser({
            email: "",
            password: ""
        });
    }

    return (
        <>
            <div className='mx-auto my-5 col-lg-3 card p-5'>
                <h1 className='fw-bold text-center mb-3'>Login Form</h1>
                <form onSubmit={handleOnLoginClick}>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email address</label>
                        <input type="email" value={user.email} class="form-control" id="email" onChange={(event) => { setUser({ ...user, email: event.target.value }) }} />
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" value={user.password} class="form-control" id="password" onChange={(event) => { setUser({ ...user, password: event.target.value }) }} />
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="loginAuthCookie" />
                        <label class="form-check-label" for="loginAuthCookie">Remember Me</label>
                    </div>
                    <button type="submit" class="btn btn-dark">Login</button>
                </form>
            </div>
        </>
    )
}

export default Login