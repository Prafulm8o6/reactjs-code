import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {

    const loginAuthSession = JSON.parse(sessionStorage.getItem('loginAuthSession'));
    const navigate = useNavigate();

    const logout = () => {
        sessionStorage.removeItem('loginAuthSession');
        navigate('/login', { replace: true });
        navigate(0);
    }

    return (
        <>
            <nav className="navbar navbar-dark navbar-expand-lg bg-dark py-lg-4">
                <div className="container-fluid px-lg-5">
                    <NavLink className="navbar-brand fs-3 px-lg-5" to="/">React Learning App</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav gap-lg-5 text-center">
                            {
                                (loginAuthSession) ?
                                    <>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link active dropdown-toggle fs-5" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Assignment Questions
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li><NavLink className="dropdown-item" to="/register-form">Q1. Registraion Form</NavLink></li>
                                                <hr />
                                                <li><NavLink className="dropdown-item" to="/two-way-binding">Q2. Two Way Binding</NavLink></li>
                                                <hr />
                                                <li>
                                                    <div className='px-3'>Q3. Create Billing System Using</div>
                                                    <br />
                                                    <ul className="navbar-nav">
                                                        <li><NavLink className="dropdown-item" to="/bill-counter-usestate">A. UseState</NavLink></li>
                                                        <li><NavLink className="dropdown-item" to="/bill-counter-reducer">B. Reducer</NavLink></li>
                                                        <li><NavLink className="dropdown-item" to="/bill-counter-context-api">C. Context API</NavLink></li>
                                                        <li><NavLink className="dropdown-item" to="/bill-counter-redux">D. Redux Toolkit</NavLink></li>
                                                    </ul>
                                                </li>
                                                <hr />
                                                <li><NavLink className="dropdown-item" to="/user/crud">Q4. CRUD Operations</NavLink></li>
                                                <hr />
                                                <li><NavLink className="dropdown-item" to="/poll-system">Q5. POLL System</NavLink></li>
                                                <hr />
                                                {/* <li><a className="dropdown-item" href="/">Q6. BLOG Application</a></li> */}
                                                <li>
                                                    <div className='px-3'>Q6. BLOG Application</div>
                                                    <br />
                                                    <ul className="navbar-nav">
                                                        <li><NavLink className="dropdown-item" to="/manage-blog">Blog Manage</NavLink></li>
                                                        <li><NavLink className="dropdown-item" to="/blogs">View Blogs</NavLink></li>
                                                    </ul>
                                                </li>
                                                <hr />
                                                <li><NavLink className="dropdown-item" to="/file-upload">Q7. File Upload And Display</NavLink></li>
                                                <br />
                                            </ul>
                                        </li>
                                        <li className="nav-item my-auto fs-5">
                                            <span className="nav-link active">Hi, {loginAuthSession[0]['name']}</span>
                                        </li>
                                        <li className="nav-item my-auto fs-5 mx-auto">
                                            <button className="nav-link btn btn-danger text-white fw-bold px-3" onClick={() => { logout() }}>Logout</button>
                                        </li>
                                    </>
                                    :
                                    <>
                                        <li className="nav-item my-auto fs-5">
                                            <NavLink className="nav-link active" aria-current="page" to="/login">Login</NavLink>
                                        </li>
                                        <li className="nav-item my-auto fs-5">
                                            <NavLink className="nav-link active" aria-current="page" to="/signup">Register</NavLink>
                                        </li>
                                    </>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar