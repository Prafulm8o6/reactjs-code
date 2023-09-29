import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddFeedBack = () => {

    const [feedBack, setFeedBack] = useState(
        {
            user_id: "",
            subject: "",
            message: ""
        }
    );

    const navigate = useNavigate();
    const loginAuthSession = JSON.parse(sessionStorage.getItem('loginAuthSession'));

    useEffect(() => {
        return () => {
            if (loginAuthSession) {
                setFeedBack({ ...feedBack, user_id: loginAuthSession[0]['_id'] })
            } else {
                navigate('/login', { replace: true });
                navigate(0);
            }
        }
    }, [])

    const handleOnAddClick = (event) => {
        event.preventDefault();
        const { user_id, subject, message } = feedBack;
        const feedBackInsert = axios.post('http://localhost:5050/feedback/add-feedback', { user_id, subject, message });
        if (feedBackInsert) {
            alert("added...")
        }
        navigate('/user/crud', { replace: true });
        navigate(0);
    }

    const handleOnReset = () => {
        setFeedBack({
            subject: "",
            message: ""
        })
    }

    return (
        <>
            <div className='py-5 bg-white shadow justify-content-center'>
                <form className='px-5  mx-auto' onSubmit={handleOnAddClick} onReset={handleOnReset}>
                    <div className='row py-2'>
                        <div className='col'>
                            <label className='text-center fs-2 fw-bold'>Add New FeedBack</label>
                        </div>
                    </div>
                    <div className='row py-2 d-none'>
                        <div className='col'>
                            <input type="hidden" value={feedBack.user_id} className='form-control' placeholder='department name' onChange={(event) => { setFeedBack({ ...feedBack, user_id: event.target.value }) }} required />
                        </div>
                    </div>
                    <div className='row py-2'>
                        <div className='col'>
                            <input type="text" value={feedBack.subject} className='form-control' placeholder='subject' onChange={(event) => { setFeedBack({ ...feedBack, subject: event.target.value }) }} required />
                        </div>
                    </div>
                    <div className='row py-2'>
                        <div className='col'>
                            <textarea rows="5" className='form-control' placeholder='feedback' onChange={(event) => { setFeedBack({ ...feedBack, message: event.target.value }) }} required></textarea>
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

export default AddFeedBack