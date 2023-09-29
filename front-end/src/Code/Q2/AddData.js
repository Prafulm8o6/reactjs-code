import React, { useState } from 'react'

const AddData = (props) => {
    const [dname, setDname] = useState();
    const handleAddDept = (event) => {
        event.preventDefault();
        props.deptList([...props.dept, dname]);
        setDname("");
    }
    const handleOnReset = (event) => {
        props.deptList([]);
        event.preventDefault();
        setDname("");
    }
    return (
        <>
           <div className='py-5 bg-white shadow justify-content-center'>
                <form className='px-5  mx-auto' onSubmit={handleAddDept} onReset={handleOnReset}>
                    <div className='row py-2'>
                        <div className='col'>
                            <label className='text-center fs-2 fw-bold'>Add New Department</label>
                        </div>
                    </div>
                    <div className='row py-2'>
                        <div className='col'>
                            <input type="text" value={dname} className='form-control' placeholder='department name' onChange={(event) => { setDname(event.target.value) }} />
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

export default AddData