import React from 'react'
import AddNewBlog from './AddNewBlog'
import ViewBlogs from './ViewBlogs'

const BlogCRUD = () => {
    return (
        <>
            <div className='container-fluid p-5'>
                <div className='row'>
                    <div className='col-4'>
                        <AddNewBlog />
                    </div>
                    <div className='col'>
                        <ViewBlogs />
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogCRUD