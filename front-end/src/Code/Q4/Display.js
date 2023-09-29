import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';

const Display = () => {

    const [feedBack, setFeedBack] = useState([]);
    const [search, setSearch] = useState('');
    const navigate = useNavigate();
    var i = 0;

    const getData = async () => {
        const feedBackData = await axios.get('http://localhost:5050/feedback/display');
        setFeedBack(feedBackData.data);
    }

    const searchFeedBackData = async (search) => {
        let key = search;
        if (key) {
            let searchFeedBack = await axios.get(`http://localhost:5050/feedback/search/${key}`);
            setFeedBack([])
            if (searchFeedBack) {
                setFeedBack(searchFeedBack.data);
            } else {
                getData()
            }
        }
    }

    useEffect(() => {
        if (search.length > 0) {
            searchFeedBackData(search)
        } else {
            getData()
        }
    }, [search,feedBack])

    const deleteFeedBackData = async (id) => {
        let deleteFeedBack = axios.delete(`http://localhost:5050/feedback/delete/${id}`);
        if (deleteFeedBack) {
            alert("deleted.")
            navigate('/user/crud', { replace: true });
            navigate(0);
        }
    }

    return (
        <>
            <div className='bg-white shadow p-5 justify-content-center'>
                <div className='row py-2'>
                    <div className='col-lg-9'>
                        <label className='text-center fs-2 fw-bold'>Feedback Table</label>
                    </div>
                    <div className='col-lg-3'>
                        <input type="text" value={search} className='form-control' placeholder='search here...' onChange={(event) => { setSearch(event.target.value); }} />
                    </div>
                </div>
                <table className='table table-dark table-hover'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Subject</th>
                            <th>Message</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            (feedBack.length > 0) ?
                                <>
                                    {
                                        feedBack.map((ele) => {
                                            return (
                                                <>
                                                    <tr key={ele._id}>
                                                        <td>{++i}</td>
                                                        <td>{ele.subject}</td>
                                                        <td>{ele.message}</td>
                                                        <td><div className='d-flex gap-3'>
                                                            <NavLink className='btn btn-outline-info fw-bold' to={`/feedback/update/${ele._id}`}>Edit</NavLink>
                                                            <button className='btn btn-outline-danger fw-bold' onClick={() => {
                                                                deleteFeedBackData(ele._id)
                                                            }}>Delete</button>
                                                        </div></td>
                                                    </tr>
                                                </>
                                            )
                                        })
                                    }
                                </>
                                :
                                <>
                                    <tr>
                                        <td colSpan={4} className="text-center">No Records.</td>
                                    </tr>
                                </>
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Display