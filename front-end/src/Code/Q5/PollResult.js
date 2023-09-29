import React, { useEffect } from 'react'

const PollResult = (props) => {

    return (
        <>
            <div className='bg-white shadow p-5 justify-content-center'>
                <div className='row py-2'>
                    <div className='col text-center'>
                        <label className='text-center fs-2 fw-bold'>Poll Result</label>
                    </div>
                </div>
                <ul className='px-1'>
                    {
                        (props.pollQue) ?
                            <>
                                <div className='row py-2'>
                                    <div className='col'>
                                        <label className='text-center fw-bold'>{props.pollQue.question}</label>
                                    </div>
                                </div>
                                <div>{props.pollQue.option_a} : {props.pollQue.option_a_count}</div>
                                <div>{props.pollQue.option_b} : {props.pollQue.option_b_count}</div>
                                <div>{props.pollQue.option_c} : {props.pollQue.option_c_count}</div>
                                <div>{props.pollQue.option_d} : {props.pollQue.option_d_count}</div>
                            </>
                            :
                            "No Data"
                    }
                </ul>
            </div>
        </>
    )
}

export default PollResult