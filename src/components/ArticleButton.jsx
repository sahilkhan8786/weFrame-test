import React from 'react'

const ArticleButton = ({ text }) => {
    return (
        <button className={`p-3 rounded-xl cursor-pointer
         ${text === 'Published' && 'text-greenText bg-greenBG'} 
         ${text === 'Draft' && 'text-articleText bg-heroBG'} 
         bg-articleBG text-activeLink`}>{text}</button>
    )
}

export default ArticleButton