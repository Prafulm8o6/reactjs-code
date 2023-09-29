import React from 'react'

const DisplayList = (props) => {
    return (
        <>
            <div className='bg-white shadow p-5 justify-content-center'>
                <div className='row py-2'>
                    <div className='col'>
                        <label className='text-center fs-2 fw-bold'>Add New Department</label>
                    </div>
                </div>
                <ul className='px-1'>
                    {
                        (props.deptList.length > 0) ?
                            props.deptList.map((ele) => {
                                return (<li>{ele}</li>)
                            })
                            :
                            "No Data"
                    }
                </ul>
            </div>
        </>
    )
}

export default DisplayList