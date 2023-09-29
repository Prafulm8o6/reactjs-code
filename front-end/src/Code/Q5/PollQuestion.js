import React from 'react'

const PollQuestion = (props) => {

    const handleOnSubmt = (event) => {

        event.preventDefault();
        let option_a = document.getElementById('option_a');
        let option_b = document.getElementById('option_b');
        let option_c = document.getElementById('option_c');
        let option_d = document.getElementById('option_d');

        if (option_a.checked) {
            props.setPollQue({ ...props.pollQue, option_a_count: props.pollQue.option_a_count + 1 })
        }
        else if (option_b.checked) {
            props.setPollQue({ ...props.pollQue, option_b_count: props.pollQue.option_b_count + 1 })
        }
        else if (option_c.checked) {
            props.setPollQue({ ...props.pollQue, option_c_count: props.pollQue.option_c_count + 1 })
        }
        else if (option_d.checked) {
            props.setPollQue({ ...props.pollQue, option_d_count: props.pollQue.option_d_count + 1 })
        }
        else {
            alert('Select the any option');
        }

        option_a.checked = false;
        option_b.checked = false;
        option_c.checked = false;
        option_d.checked = false;

    }
    return (
        <>
            <div className='py-5 bg-white shadow justify-content-center'>
                <h1 className='text-center fw-bold fs-2'>Poll Question</h1>
                <form className='px-5  mx-auto' onSubmit={handleOnSubmt}>
                    <div className='row py-2'>
                        <div className='col'>
                            <label className='text-center fw-bold'>{props.pollQue.question}</label>
                        </div>
                    </div>
                    <div className='row py-2'>
                        <div className='d-flex gap-3'>
                            <input type="radio" id="option_a" name='option' className='form-check' value="a" />
                            <label className='text-center' htmlFor="option_a" >{props.pollQue.option_a}</label>
                            <br />
                        </div>
                        <div className='d-flex gap-3'>
                            <input type="radio" id="option_b" name='option' className='form-check' value="b" />
                            <label className='text-center' htmlFor="option_b" >{props.pollQue.option_b}</label>
                            <br />
                        </div>
                        <div className='d-flex gap-3'>
                            <input type="radio" id="option_c" name='option' className='form-check' value="c" />
                            <label className='text-center' htmlFor="option_c" >{props.pollQue.option_c}</label>
                            <br />
                        </div>
                        <div className='d-flex gap-3'>
                            <input type="radio" id="option_d" name='option' className='form-check' value="d" />
                            <label className='text-center' htmlFor="option_d" >{props.pollQue.option_d}</label>
                            <br />
                        </div>
                    </div>
                    <div className='row py-2'>
                        <div className='col'>
                            <input type="submit" value="Submit" className='btn btn-dark w-100' />
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default PollQuestion