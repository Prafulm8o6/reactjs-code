import React, { useState } from 'react'

const SignUp = () => {
    
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        dob: ""
    });

    const handleOnSignUpClick = async (event) => {
        event.preventDefault();
        alert("Registraion Successfully.")
        setUser({
            name: "",
            email: "",
            password: "",
            dob: ""
        });
    }

    return (
        <>
            <div className='mx-auto my-5 col-lg-3 card p-5'>
                <h1 className='fw-bold text-center mb-3'>Registraion Form</h1>
                <form onSubmit={handleOnSignUpClick}>
                    <div class="mb-3">
                        <label for="name" class="form-label">Name</label>
                        <input type="text" value={user.name} class="form-control" id="name" onChange={(event) => { setUser({ ...user, name: event.target.value }) }} />
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email address</label>
                        <input type="email" value={user.email} class="form-control" id="email" onChange={(event) => { setUser({ ...user, email: event.target.value }) }} />
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" value={user.password} class="form-control" id="password" onChange={(event) => { setUser({ ...user, password: event.target.value }) }} />
                    </div>
                    <div class="mb-3">
                        <label for="dob" class="form-label">Date Of Birth</label>
                        <input type="date" value={user.dob} class="form-control" id="dob" onChange={(event) => { setUser({ ...user, dob: event.target.value }) }} />
                    </div>
                    <button type="submit" class="btn btn-dark">Sign Up</button>
                </form>
            </div>
        </>
    )
}

export default SignUp