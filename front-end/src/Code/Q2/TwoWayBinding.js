import React, { useState } from 'react'
import AddData from './AddData'
import DisplayList from './DisplayList';

const TwoWayBinding = () => {
    const [dept, setDept] = useState([]);
    return (
        <>
            <div className='container p-5 my-5'>
                <div className='text-center fs-1 fw-bold py-3 mb-5'>
                    Two Way Data Binding
                </div>
                <div className='row'>
                    <div className='col'>
                        <AddData dept={dept} deptList={setDept} />
                    </div>
                    <div className='col'>
                        <DisplayList deptList={dept} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default TwoWayBinding