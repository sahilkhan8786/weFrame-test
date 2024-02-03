import React from 'react'

const Button = ({ text }) => {
    return (
        <div className='w-full flex items-center mt-2 justify-start gap-5'>
            <button className=' bg-supportBTN text-buttonText w-5/6 py-3 rounded-xl inline-flex items-center justify-center'>{text}</button>
            <div className='flex px-4 py-5 rounded-xl cursor-pointer bg-heroBG gap-1'>
                <span className='w-1 h-1 rounded-full bg-activeLink'></span>
                <span className='w-1 h-1 rounded-full bg-activeLink'></span>
                <span className='w-1 h-1 rounded-full bg-activeLink'></span>

            </div>
        </div>
    )
}

export default Button