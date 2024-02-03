import React from 'react'
import ImageContainer from './helpers/ImageContainer'
import articelAvatar from '@/assets/images/article-avatar.png'
import ArticleButton from './ArticleButton'
import Button from './Button'
import { artilceArr } from '@/constant'
const ArticlesList = () => {
    return (
        <div className='flex flex-wrap gap-5 '>
            {artilceArr.map((el) => (
                <article className='w-fit p-3 bg-white rounded-xl' key={el.heading}>
                    <ImageContainer imageSRC={el.image} width={'435px'} height={'228px'} />
                    <div>
                        <div className=' flex items-center justify-between pt-2 flex-wrap'>
                            <div className='flex flex-1 items-center gap-1 flex-wrap'>
                                <span className='text-seeAll'>{el.type}</span>
                                <div className='w-1 h-1 bg-dot rounded-full'></div>
                                <span className='text-articleText'>20 Sep 2022</span>
                            </div>

                            <div className='flex gap-2 items-center'>
                                <ImageContainer imageSRC={articelAvatar} width={'30px'} height={'30px'} />
                                Maria Doe
                            </div>
                        </div>
                        <div className='flex items-center justify-between pt-2 flex-wrap'>
                            <h1 className='text-2xl max-[1200px]:text-xl'>
                                {el.heading}
                            </h1>
                            <ArticleButton text={el.buttonText} />
                        </div>
                        <div>
                            <p className='pb-1'>{el.para}</p>
                            <div className='flex  gap-3 items-center flex-wrap'>
                                {el.list.map(el => (
                                    <span key={el} className='wrapper-span'>{el}</span>
                                ))}


                            </div>
                        </div>
                        <Button text={'View'} />
                    </div>
                </article>

            ))}



        </div>
    )
}

export default ArticlesList