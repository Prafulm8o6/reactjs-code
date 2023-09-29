import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddNewBlog = () => {

    const [blog, setBlog] = useState({
        subject: "",
        description: "",
        created_by: ""
    });


    const navigate = useNavigate();
    const loginAuthSession = JSON.parse(sessionStorage.getItem('loginAuthSession'));

    useEffect(() => {
        return () => {
            if (loginAuthSession) {
                setBlog({ ...blog, created_by: loginAuthSession[0]['name'] })
            } else {
                navigate('/login', { replace: true });
                navigate(0);
            }
        }
    }, [])

    const handleOnAddClick = (event) => {
        event.preventDefault();
        const { subject, description, created_by } = blog;
        const blogInsert = axios.post('http://localhost:5050/blog/add-blog', { subject, description, created_by });
        if (blogInsert) {
            alert("New blog added.")
        }
        navigate('/manage-blog', { replace: true });
        navigate(0);
    }

    const handleOnReset = (event) => {
        setBlog({...blog,
            subject: "",
            description: ""
        })
    }

    return (
        <>
            <div className='py-5 bg-white shadow justify-content-center'>
                <form className='px-5  mx-auto' onSubmit={handleOnAddClick} onReset={handleOnReset}>
                    <div className='row py-2'>
                        <div className='col'>
                            <label className='text-center fs-2 fw-bold'>Add New Blog</label>
                        </div>
                    </div>
                    <div className='row py-2'>
                        <div className='col'>
                            <input type="text" value={blog.subject} className='form-control' placeholder='subject' onChange={(event) => { setBlog({ ...blog, subject: event.target.value }) }} required />
                        </div>
                    </div>
                    <div className='row py-2'>
                        <div className='col'>
                            <textarea rows="5" className='form-control' placeholder='feedback' value={blog.description} onChange={(event) => { setBlog({ ...blog, description: event.target.value }) }} required></textarea>
                        </div>
                    </div>
                    <div className='row py-2'>
                        <div className='col'>
                            <input type="text" value={blog.created_by} className='form-control' placeholder='department name' onChange={(event) => { setBlog({ ...blog, created_by: event.target.value }) }} disabled />
                        </div>
                    </div>
                    <div className='row py-2'>
                        <div className='col'>
                            <input type="submit" value="Add" className='btn btn-dark w-100' />
                        </div>
                        <div className='col'>
                            <input type="reset" value="Reset" className='btn btn-dark w-100' />
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AddNewBlog