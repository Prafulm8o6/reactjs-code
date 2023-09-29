import axios from 'axios';
import React, { useState } from 'react'

const FileUpload = () => {

    const [file, setFile] = useState('');

    const handleOnSubmit = async (event) => {

        event.preventDefault();

        const url = 'http://localhost:5050/file/add-new-file';

        const newFormData = new FormData();

        newFormData.append("file", file);
        newFormData.append("filename", file.name);

        const config = {
            headers : {
                'content-type' : 'multipart/form-data'
            }
        }

        axios.post(url, newFormData, config).then((response) => {
            console.log(response.data)
        });

        console.log(newFormData.get('file'))
    }

    return (
        <>
            <div className='container-fluid p-lg-5 '>
                <div className='row'>
                    <div className='col-lg-4'>
                        <div className='py-5 bg-white shadow justify-content-center'>
                            <form className='px-5 mx-auto' encType="multipart/form-data" onSubmit={handleOnSubmit}>
                                <div className='row py-2'>
                                    <div className='col'>
                                        <label className='text-center fs-2 fw-bold'>Add New Image</label>
                                    </div>
                                </div>
                                <div className='row py-2'>
                                    <div className='col'>
                                        <input type="file" name="file" className='form-control' onChange={(event) => { setFile(event.target.files) }} required />
                                    </div>
                                </div>
                                <div className='row py-2'>
                                    <div className='col'>
                                        <input type="submit" value="Add" className='btn btn-dark w-100' />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='bg-white shadow p-5 justify-content-center'>
                            <div className='row py-2'>
                                <div className='col'>
                                    <label className='text-center fs-2 fw-bold'>Images</label>
                                </div>
                            </div>
                            "No Data"
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FileUpload