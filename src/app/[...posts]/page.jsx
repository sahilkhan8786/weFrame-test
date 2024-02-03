'use client'
import React, { useContext, useEffect } from 'react'
import Image from 'next/image'
import postAvatar from '@/assets/images/post-avatar.png'
import ImageContainer from '@/components/helpers/ImageContainer'
import { down, left, right } from '@/assets/icons'
import postImage from '@/assets/images/post-1.png'
import postImageBG from '@/assets/images/post-1-bg.png'
import { ToggleContext } from '../context/ToggleContext'
import { urban } from '@/assets/fonts'
const page = () => {
    const { setShowSearchBar } = useContext(ToggleContext)
    useEffect(() => { setShowSearchBar(false) }, [])
    return (
        <div className={`postPage ${urban.className}`}>
            <div className='w-full flex items-center justify-between flex-wrap gap-2'>
                <span className=' flex gap-4 flex-wrap items-center'>
                    <ImageContainer imageSRC={postAvatar} width={'40px'} height={'40px'} />
                    <p className='text-articleText'>James Robert</p>
                    <p className='text-postsText'>Create on 13 July 2022</p>
                </span>
                <span className=' flex gap-4 items-center flex-wrap'>
                    <div className=' flex items-center px-3 py-2 bg-heroBG'>
                        <p>
                            Accessibility
                        </p>
                        <ImageContainer imageSRC={down} width={'24px'} height={'24px'} />
                    </div>
                    <div className='flex px-3 py-4 bg-heroBG gap-1 '>
                        <span className='rounded-full w-1 h-1 bg-activeLink'></span>
                        <span className='rounded-full w-1 h-1 bg-activeLink'></span>
                        <span className='rounded-full w-1 h-1 bg-activeLink'></span>
                    </div>
                </span>
            </div>

            <div className='mt-5 relative h-[100%] text-white'>
                <div className='relative w-[100%] h-[100%]'>
                    <Image src={postImageBG} fill alt='BG' />
                </div>
                <div className='absolute z-20 top-0 left-0 w-full flex items-center justify-center h-[100%]'>
                    <div className='relative w-[500px] h-[100%] max-[500px]:w-[300px]'>
                        <Image src={postImage} fill alt='Post' />
                        <span className='absolute bottom-[100px] px-2'>
                            <h1 className='text-2xl pb-3'>Chez pierre restaurant in Monte Carlo by Vuidafieri Partner</h1>
                            <button className='bg-postBTNBG text-seeAll rounded-lg px-3 py-2'>Business</button>
                        </span>
                        <div className='absolute top-[50%] -left-[10%] bg-arrow p-2'>
                            <ImageContainer imageSRC={left} width={'24px'} height={'24px'} />

                        </div>
                        <div className=' absolute top-[50%] -right-[10%] bg-arrow p-2'>
                            <ImageContainer imageSRC={right} width={'24px'} height={'24px'} />

                        </div>
                    </div>
                </div>
            </div>




        </div>
    )
}

export default page