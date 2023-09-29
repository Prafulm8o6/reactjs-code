import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Update = () => {

    const [feedBack, setFeedBack] = useState(
        {
            user_id: "",
            subject: "",
            message: ""
        }
    );

    const navigate = useNavigate();
    const param = useParams();
    const loginAuthSession = JSON.parse(sessionStorage.getItem('loginAuthSession'));

    const getData = async () => {
        const feedBackData = await axios.get(`http://localhost:5050/feedback/update/id/${param.id}`);
        if (feedBackData) {
            console.log(feedBackData)
            setFeedBack({ ...feedBack, user_id: feedBackData.data['user_id'], subject: feedBackData.data['subject'], message: feedBackData.data['message'] })
        }
    }

    useEffect(() => {
        return () => {
            if (loginAuthSession) {
                setFeedBack({ ...feedBack, user_id: loginAuthSession[0]['user_id'] })
            } else {
                navigate('/login', { replace: true });
                navigate(0);
            }
            getData()
        }
    }, [])

    const handleOnUpdateClick = (event) => {
        event.preventDefault();
        const { user_id, subject, message } = feedBack;
        const feedBackUpdate = axios.put(`http://localhost:5050/feedback/update-feedback/${param.id}`, { user_id, subject, message });
        if (feedBackUpdate) {
            alert(feedBack.user_id)
        }
        navigate('/user/crud', { replace: true });
        navigate(0);
    }


    return (
        <>
            <div className='col-lg-4 mx-auto my-5 py-5 bg-white shadow justify-content-center'>
                <form className='px-5  mx-auto' onSubmit={handleOnUpdateClick}>
                    <div className='row py-2'>
                        <div className='col'>
                            <label className='text-center fs-2 fw-bold'>Update FeedBack</label>
                        </div>
                    </div>
                    <div className='row py-2 d-node'>
                        <div className='col'>
                            <input type="hidden" value={feedBack.user_id} className='form-control' placeholder='id' onChange={(event) => { setFeedBack({ ...feedBack, user_id: event.target.value }) }} required />
                        </div>
                    </div>
                    <div className='row py-2'>
                        <div className='col'>
                            <input type="text" value={feedBack.subject} className='form-control' placeholder='subject' onChange={(event) => { setFeedBack({ ...feedBack, subject: event.target.value }) }} required />
                        </div>
                    </div>
                    <div className='row py-2'>
                        <div className='col'>
                            <textarea rows="5" className='form-control' value={feedBack.message} placeholder='feedback' onChange={(event) => { setFeedBack({ ...feedBack, message: event.target.value }) }} required></textarea>
                        </div>
                    </div>
                    <div className='row py-2'>
                        <div className='col'>
                            <input type="submit" value="Update" className='btn btn-dark w-100' />
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Update