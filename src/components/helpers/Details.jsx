import { detailsArr } from '@/constant'
import React from 'react'
import ImageContainer from './ImageContainer'

const Details = () => {
    return (
        <div className='mt-12 flex gap-4 mr-12 flex-wrap'>

            {
                detailsArr.map((el) => (
                    <article className='details' key={el.heading}>
                        < ImageContainer imageSRC={el.icon} width={'36px'} height={'36px'} isColor={true} />
                        <div>
                            <h2 className='text-3xl max-[1600px]:text-2xl max-[1300px]:text-xl pb-3'>{el.heading}</h2>
                            <p className='text-sm'>{el.para}&nbsp;New&nbsp;Updates</p>
                        </div>

                    </article >
                ))
            }

        </div >
    )
}

export default Details