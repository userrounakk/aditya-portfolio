import React from 'react'

const Card = () => {
  return (
    <form action="POST">
        <label htmlFor='role' className='text-white'>Role: </label>
        <input type='text' id='role' name='role' />
        <br/>
        <br/>
        <label htmlFor='date' className='text-white'>date: </label>
        <input type='number' id='date' name='date' />
    </form>
  )
}

export default Card