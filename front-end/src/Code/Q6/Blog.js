import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

const Blog = (props) => {
    const [blog, setBlog] = useState([]);
    const [search, setSearch] = useState('');

    const category = props.category;


    const getData = async () => {
        // alert(category)
        let blogData;
        if (category === null) {
            blogData = await axios.get('http://localhost:5050/blog/display');
        }
        else if (category === 'html') {
            blogData = await axios.get('http://localhost:5050/blog/search/category/html');
        }
        else if (category === 'php') {
            blogData = await axios.get('http://localhost:5050/blog/search/category/php');
        }
        else if (category === 'aspdotnet') {
            blogData = await axios.get('http://localhost:5050/blog/search/category/asp.net');
        }
        else if (category === 'iot') {
            blogData = await axios.get('http://localhost:5050/blog/search/category/iot');
        }
        else {
            blogData = await axios.get('http://localhost:5050/blog/display');
        }
        setBlog(blogData.data);
        // navigate(0)
    }

    const searchBlogData = async (search) => {
        let key = search;
        if (key) {
            let searchBlog = await axios.get(`http://localhost:5050/blog/search/${key}`, { category });
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

    return (
        <>
            <div className='justify-content-center container my-5'>
                <div className='row bg-white shadow p-4 '>
                    <div className='col-lg-9 d-flex my-auto'>
                        <NavLink className='nav-link text-center px-5 fw-bold' to='/blogs' >Blogs</NavLink>
                        <NavLink className='nav-link text-center px-5 fw-bold' to='/html-blogs' >HTML</NavLink>
                        <NavLink className='nav-link text-center px-5 fw-bold' to='/php-blogs' >PHP</NavLink>
                        <NavLink className='nav-link text-center px-5 fw-bold' to='/aspdotnet-blogs'>ASP.NET</NavLink>
                        <NavLink className='nav-link text-center px-5 fw-bold' to='/iot-blogs' >IOT</NavLink>
                    </div>
                    <div className='col-lg-3'>
                        <input type="text" value={search} className='form-control' placeholder='search here...' onChange={(event) => { setSearch(event.target.value); }} />
                    </div>
                </div>
                <div className='row row-cols-1 py-5 gap-3'>
                    {
                        (blog.length > 0) ?
                            <>
                                {
                                    blog.map((ele) => {
                                        return (
                                            <>
                                                <div className='col card p-5 shadow bg-dark text-white' key={ele._id}>
                                                    <div className='fs-1 fw-bold'>
                                                        {ele.subject}
                                                    </div>
                                                    <div className='fs-5 py-3'>
                                                        <p>{ele.description}</p>
                                                    </div>
                                                    <span>Created By : <i>{ele.created_by}</i></span>
                                                    <span>{ele.created_on}</span>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </>
                            :
                            <>
                                <div className="w-100 py-5">
                                    <div className="text-center fw-bold fs-1">No Blogs</div>
                                </div>
                            </>
                    }
                </div>
            </div>
        </>
    )
}

export default Blog