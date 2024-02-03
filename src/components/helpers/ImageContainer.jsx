import React from 'react'
import Image from 'next/image'
const ImageContainer = ({ imageSRC, width, height, isColor }) => {
    return (
        <div className={`relative ${isColor && 'bg-supportBTN p-4 rounded-full flex justify-center items-center'}`} >
            <Image src={imageSRC} alt='icons' width={width} height={height} priority />

        </div>
    )
}

export default ImageContainer