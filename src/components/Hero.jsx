import React from 'react'
import Details from './helpers/Details'
import ContentHeading from './helpers/ContentHeading'
import ArticlesList from './ArticlesList'
import StoryList from './StoryList'
import AdList from './AdList'

const Hero = () => {
    return (


        <div className={`hero`}>

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