import React from 'react'

const Button = ({props}: any) => {
  return (
    <button className='bg-white py-[0.5rem] px-[1rem] rounded-2xl'>
        {props}
    </button>
  )
}

export default Button