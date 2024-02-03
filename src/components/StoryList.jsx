import React from 'react'
import Link from 'next/link'
import ImageContainer from './helpers/ImageContainer'
import { story1 } from '@/assets/images'
import { analyticsStory, eye } from '@/assets/icons'
import ArticleButton from './ArticleButton'
import Button from './Button'
import { storyArr } from '@/constant'



const StoryList = () => {

    return (
        <div className='flex gap-8 flex-wrap'>

            {storyArr.map((el) => (

                <article className='relative w-fit text-white' key={el.heading}>
                    <ImageContainer imageSRC={el.image} width={''} height={''} className='absolute top-0 left-0' />
                    <div className='absolute right-2 top-2 flex gap-2 items-center'>
                        <span className='flex gap-2 items-center bg-white text-activeLink rounded-lg p-2 text-sm cursor-pointer flex-wrap'>
                            <ImageContainer imageSRC={eye} width={'16px'} height={'16px'} />
                            428
                        </span>
                        <span className='bg-white text-activeLink rounded-lg p-2  cursor-pointer'>
                            <ImageContainer imageSRC={analyticsStory} width={'16px'} height={'16px'} />
                        </span>
                    </div>
                    <div className='absolute bottom-0 p-1 pl-2'>
                        <h1 className='text-2xl max-[400px]:text-xl'>{el.heading}</h1>
                        <div className='flex items-center justify-between flex-wrap'>
                            <span >{el.type}</span>
                            <div className='w-1 h-1 bg-dot rounded-full'></div>
                            <span className='text-articleText'>20 Sep 2022</span>
                            <ArticleButton text={el.buttonText} />
                        </div>
                        <Link href={`/${el.type}`}>
                            <Button text={'View'} />
                        </Link>
                    </div>
                </article>
            ))}



        </div>
    )
}

export default StoryList