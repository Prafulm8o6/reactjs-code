import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import AddFeedBack from './AddFeedBack';
import Display from './Display';

const CRUD = () => {


    const navigate = useNavigate();
    const loginAuthSession = sessionStorage.getItem('loginAuthSession');

    useEffect(() => {
        return () => {
            if (!loginAuthSession) {
                navigate('/login', { replace: true });
                navigate(0);
            }
        }
    }, [])

    return (
        <>
            <div className='container-fluid p-5'>
                <div className='text-center fs-1 fw-bold mb-5'>
                    CRUD Operations
                </div>
                <div className='row'>
                    <div className='col-4'>
                        <AddFeedBack />
                    </div>
                    <div className='col'>
                        <Display />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CRUD