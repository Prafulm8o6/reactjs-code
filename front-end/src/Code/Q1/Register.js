import React, { useState } from 'react'

const Register = () => {
    const [user, setUser] = useState(
        {
            fname: '',
            mname: '',
            lname: '',
            email: '',
            username: '',
            password: '',
            dob: '',
            mobile: '',
            address: '',
            gender: '',
            city: ''
        }
    );
    const cityList = ['surat', 'vadodara', 'valsad'];

    const registerData = (event) => {
        event.preventDefault();
        alert(`Name : ${user.fname} ${user.mname} ${user.lname}\nEmail : ${user.email}\nUsername : ${user.username}\nMobile No. : ${user.mobile}\nDate Of Birth : ${user.dob}\nCity : ${user.city}\nAddress : ${user.address}\nGender : ${user.gender}`)
    }
    return (
        <>
            <div className='container card p-5 my-5 shadow'>
                <h1 className='fw-bold text-dark opacity-75'>Registration Form</h1>
                <hr className='border border-warning border-2 opacity-100' />
                <form class="row g-3" onSubmit={registerData}>
                    <div class="col-md-4">
                        <label for="fname" class="form-label fw-bold text-secondary">First name</label>
                        <input type="text" class="form-control" name="fname" value={user.fname} onChange={(event) => { setUser({ ...user, fname: event.target.value }) }} />
                    </div>
                    <div class="col-md-4">
                        <label for="mname" class="form-label fw-bold text-secondary">Middle name</label>
                        <input type="text" class="form-control" name="mname" value={user.mname} onChange={(event) => { setUser({ ...user, mname: event.target.value }) }} />
                    </div>
                    <div class="col-md-4">
                        <label for="lname" class="form-label fw-bold text-secondary">Last name</label>
                        <input type="text" class="form-control" name="lname" value={user.lname} onChange={(event) => { setUser({ ...user, lname: event.target.value }) }} />
                    </div>
                    <div class="col-md-4">
                        <label for="email" class="form-label fw-bold text-secondary">Email</label>
                        <input type="text" class="form-control" name="email" value={user.email} onChange={(event) => { setUser({ ...user, email: event.target.value }) }} />
                    </div>
                    <div class="col-md-4">
                        <label for="username" class="form-label fw-bold text-secondary">Username</label>
                        <input type="text" class="form-control" name="username" value={user.username} onChange={(event) => { setUser({ ...user, username: event.target.value }) }} />
                    </div>
                    <div class="col-md-4">
                        <label for="password" class="form-label fw-bold text-secondary">Password</label>
                        <input type="password" class="form-control" name="password" value={user.password} onChange={(event) => { setUser({ ...user, password: event.target.value }) }} />
                    </div>
                    <div class="col-md-4">
                        <label for="dob" class="form-label fw-bold text-secondary">dob</label>
                        <input type="date" class="form-control" name="dob" value={user.dob} onChange={(event) => { setUser({ ...user, dob: event.target.value }) }} />
                    </div>
                    <div class="col-md-4">
                        <label for="gender" class="form-label fw-bold text-secondary">Gender</label>
                        <div className="d-flex" onChange={(event) => { setUser({ ...user, gender: event.target.value }) }} value={user.gender}>
                            <div className="d-flex">
                                <input type="radio" class="form-check px-3" name="gender" value="male" />
                                <label for="gender" class="form-label fw-bold text-secondary px-2">Male</label>
                            </div>
                            <div className="d-flex">
                                <input type="radio" class="form-check px-3" name="gender" value="female" />
                                <label for="gender" class="form-label fw-bold text-secondary px-2">Female</label>
                            </div>
                            <div className="d-flex">
                                <input type="radio" class="form-check px-3" name="gender" value="other" />
                                <label for="gender" class="form-label fw-bold text-secondary px-2">Other</label>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <label for="city" class="form-label fw-bold text-secondary">City</label>
                        <select class="form-select" name="city" value={user.city} onChange={(event) => { setUser({ ...user, city: event.target.value }) }}>
                            {cityList.map((ele) => {
                                return (
                                    <option selected value={ele}>{ele}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div class="col-md-4">
                        <label for="address" class="form-label fw-bold text-secondary">address</label>
                        <textarea rows="0" className='form-control' name="address" value={user.address} onChange={(event) => { setUser({ ...user, address: event.target.value }) }}></textarea>
                    </div>
                    <div class="col-md-4">
                        <label for="mobile" class="form-label fw-bold text-secondary">mobile</label>
                        <input type="text" class="form-control" name="mobile" value={user.mobile} onChange={(event) => { setUser({ ...user, mobile: event.target.value }) }} />
                    </div>
                    <div class="col-12">
                        <button class="btn btn-warning text-white fw-bold" type="submit">Register</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Register