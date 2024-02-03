import React from 'react'
import Details from './helpers/Details'
import ContentHeading from './helpers/ContentHeading'
import ArticlesList from './ArticlesList'
import StoryList from './StoryList'
import AdList from './AdList'

const Hero = () => {
    return (


        <div className={`absolute top-[100px]
        w-5/6 right-0 bg-heroBG overflow-y-scroll h-screen pl-12 pt-5 pb-[200px] max-[1080px]:w-[75%] max-[768px]:w-full max-[768px]:flex max-[768px]:flex-col max-[768px]:pl-5 `}>

            <div className='mt-12 mb-8'>
                <h1 className='text-4xl'>Hello Admin,</h1>
                <p>This is what we got you for today.</p>
            </div>
            <Details />
            <ContentHeading title={'Top Articles'} />
            <ArticlesList />
            <ContentHeading title={'Top Stories'} />
            <StoryList />
            <ContentHeading title={'Advertisment'} />
            <AdList />
        </div>

    )
}

export default Hero