import React from 'react'
import Button from './Button'
import ImageContainer from './helpers/ImageContainer'
import { adArr } from '@/constant'

const AdList = () => {
    return (
        <div className='flex gap-12 flex-wrap'>

            {adArr.map(el => (
                <article className='adList' key={el.heading}>
                    <ImageContainer imageSRC={el.image} width={'500'} height={'280'} />
                    <div className='p-2 flex flex-col justify-around'  >
                        <h1 className='text-center text-xl pt-2'>{el.heading}</h1>
                        <p className='text-articleText'>{el.para}</p>

                        <Button text={'Visit'} />
                    </div>
                </article>
            ))}

        </div>
    )
}

export default AdList