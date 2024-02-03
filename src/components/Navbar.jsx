'use client'
import React, { useContext, useEffect } from 'react'
import ImageContainer from './helpers/ImageContainer'
import { search, avatar, dropDown, calender, ham, close, back } from '../assets/icons'
import { ToggleContext } from '@/app/context/ToggleContext'
import { nunito, urban } from '@/assets/fonts'

const DatePicker = () => {
    return (
        <label className='pointer'>
            <input type="date" value={'2024-02-02'} className='hidden' readOnly />
            <div className='flex gap-3 items-center'>
                <p>2024-02-02</p>
                <ImageContainer imageSRC={calender} width={'20px'} height={'20px'} />
            </div>
        </label>
    )
}

const Navbar = () => {
    const { isActive, setIsActive, showSearchBar, setShowSearchBar } = useContext(ToggleContext)

    useEffect(() => {
        setShowSearchBar(true)
    }, [])


    return (

        <nav className={`navbar ${urban.className} font-medium`}>
            {isActive ?
                (<label className='cursor-pointer z-20 
                 hide ' onClick={() => setIsActive(prev => !prev)}>
                    <ImageContainer imageSRC={ham} width={'24px'} height={'24px'} />
                </label>)
                :
                (<label className='cursor-pointer z-20 hide' onClick={() => setIsActive(prev => !prev)}>
                    <ImageContainer imageSRC={close} width={'24px'} height={'24px'} />
                </label>)
            }

            {showSearchBar ? <label className='flex items-center gap-2 border rounded-full px-2 py-4 w-[400px] bg-searchBG cursor-pointer  max-[550px]:w-[50%] '>
                <ImageContainer imageSRC={search} width={'24px'} height={'24px'} />
                <input type="text" placeholder='Search' className={`bg-searchBG placeholder:${nunito.className}`} readOnly />
            </label> :
                <label className='flex items-center gap-2 text-2xl cursor-pointer'>
                    <ImageContainer imageSRC={back} width={'30px'} height={'30px'} />
                    Stories
                </label>
            }

            <div className='flex gap-3 '>

                <div className='border rounded-md px-4 py-2  gap-4 flex calender'>
                    <DatePicker />
                    OR
                    <DatePicker />
                </div>

                <div className='flex w-[300px] justify-between px-2 py-1 items-center border rounded-md cursor-pointer max-[1024px]:w-fit'>
                    <div className='flex items-center gap-2'>
                        <ImageContainer imageSRC={avatar} width={'33px'} height={'33px'} />
                        <article className='max-[1024px]:hidden'>
                            <p className='text-xs'>Welcome Back</p>
                            <p>Akshita Patel</p>
                        </article>
                    </div>
                    <div>
                        <ImageContainer imageSRC={dropDown} width={'24px'} height={'24px'} />
                    </div>
                </div>
            </div>
        </nav>

    )
}

export default Navbar