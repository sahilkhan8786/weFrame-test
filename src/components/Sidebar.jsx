'use client'
import React, { useContext, useState } from 'react'
import { dashboard, support } from '@/assets/icons'
import ImageContainer from './helpers/ImageContainer'
import { sidebarArr } from '@/constant'
import { ToggleContext } from '@/app/context/ToggleContext'
import { urban } from '@/assets/fonts'
const Sidebar = () => {
    const { isActive } = useContext(ToggleContext)
    const [isActiveNav, SetIsActiveNav] = useState('Content')


    const navigationHandler = (value) => {
        SetIsActiveNav(value)
    }
    return (
        <>
            <div className={`flex w-[15%] h-screen items-center pt-[100px] flex-col absolute left-0 bg-white max-[1200px]:w-[18%] max-[1080px]:w-[25%] 
              z-10 max-[768px]: max-[768px]:w-[70%] max-[768px]:shadow-2xl max-[768px]:pl-[20px] ${urban.className} font-thin
              ${isActive ? 'max-[768px]:hidden' : 'max-[768px]:flex'}
              `} >

                <span className='flex gap-3   pl-2 rounded-md  w-[180px] mb-8 cursor-pointer max-[370px]:w-[150px]'>
                    <ImageContainer imageSRC={dashboard} width={'24px'} height={'24px'} />
                    Dashboard
                </span>

                {
                    sidebarArr.map(el => (
                        <span className={`flex gap-3 mb-3  pl-2 rounded-md  w-[180px] py-3 cursor-pointer  select-none items-center max-[370px]:w-[150px] ${isActiveNav === el.name ? 'bg-activeLink text-white' : ''}`} key={el.name} onClick={() => navigationHandler(el.name)}>
                            <ImageContainer imageSRC={el.icon} width={'24px'} height={'24px'} />
                            {el.name}
                        </span>
                    ))
                }


                <span className='flex gap-3   pl-2 rounded-md  pr-2 mb-8 cursor-pointer bg-supportBTN px-2 py-3 '>
                    <ImageContainer imageSRC={support} width={'24px'} height={'24px'} />
                    Contact&nbsp;Support
                </span>

            </div>
        </>
    )
}

export default Sidebar