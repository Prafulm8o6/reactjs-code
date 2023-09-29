import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PollQuestion from './PollQuestion'
import PollResult from './PollResult'


const PollSystem = () => {

  const [pollQue, setPollQue] = useState({
    question: '',
    option_a: '',
    option_b: '',
    option_c: '',
    option_d: '',
    option_a_count: 0,
    option_b_count: 0,
    option_c_count: 0,
    option_d_count: 0
  })

  const getData = async () => {
    const getPollData = await axios.get('http://localhost:5050/poll/get-poll-question');
    if (getPollData) {
      setPollQue({
        ...pollQue,
        question: getPollData.data[0]['question'],
        option_a: getPollData.data[0]['option_a'],
        option_b: getPollData.data[0]['option_b'],
        option_c: getPollData.data[0]['option_c'],
        option_d: getPollData.data[0]['option_d'],
        option_a_count: getPollData.data[0]['option_a_count'],
        option_b_count: getPollData.data[0]['option_b_count'],
        option_c_count: getPollData.data[0]['option_c_count'],
        option_d_count: getPollData.data[0]['option_d_count']
      })
    }
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <div className='container'>
        <div className='text-center fs-1 fw-bold py-3 mb-5'>
          Poll System
        </div>
        <div className='row'>
          <div className='col'>
            <PollQuestion pollQue={pollQue} setPollQue={setPollQue} />
          </div>
          <div className='col'>
            <PollResult pollQue={pollQue} />
          </div>
        </div>
      </div>
    </>
  )
}

export default PollSystem