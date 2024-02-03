import React from 'react'

const ContentHeading = ({ title }) => {
    return (
        <div className='flex justify-between mt-12 mr-12 mb-4'>
            <h1 className=' text-2xl '>
                {title}
            </h1>
            <p className='text-seeAll cursor-pointer'>See all</p>
        </div>
    )
}

export default ContentHeading