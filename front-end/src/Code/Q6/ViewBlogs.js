import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';

const ViewBlogs = () => {
    const [blog, setBlog] = useState([]);
    const [search, setSearch] = useState('');
    const navigate = useNavigate();
    var i = 0;

    const getData = async () => {
        const blogData = await axios.get('http://localhost:5050/blog/display');
        setBlog(blogData.data);
    }

    const searchBlogData = async (search) => {
        let key = search;
        if (key) {
            let searchBlog = await axios.get(`http://localhost:5050/blog/search/${key}`);
            setBlog([])
            if (searchBlog) {
                setBlog(searchBlog.data);
            } else {
                getData()
            }
        }
    }

    useEffect(() => {
        if (search.length > 0) {
            searchBlogData(search)
        } else {
            getData()
        }
    }, [search, blog])

    const deleteBlogData = async (id) => {
        let deleteBlog = axios.delete(`http://localhost:5050/blog/delete/${id}`);
        if (deleteBlog) {
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
                        <label className='text-center fs-2 fw-bold'>Blog Table</label>
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
                            <th>Created By</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            (blog.length > 0) ?
                                <>
                                    {
                                        blog.map((ele) => {
                                            return (
                                                <>
                                                    <tr key={ele._id}>
                                                        <td>{++i}</td>
                                                        <td>{ele.subject}</td>
                                                        <td>{ele.description}</td>
                                                        <td>{ele.created_by}</td>
                                                        <td><div className='d-flex gap-3'>
                                                            <NavLink className='btn btn-outline-info fw-bold' to={`/blog/update/${ele._id}`}>Edit</NavLink>
                                                            <button className='btn btn-outline-danger fw-bold' onClick={() => {
                                                                deleteBlogData(ele._id)
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

export default ViewBlogs