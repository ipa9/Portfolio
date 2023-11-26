import React from 'react'
import './article.css'

const Article = ({imgUrl, date, title}) => {
  return (
    <div className='about__blog-container_article'>
      <div className='about__blog-container_article-image'>
        <img src={imgUrl} alt='blog_image'/>
      </div>
      <div className='about__blog-container_article-content'>
        <div>
          <p>{date}</p>
          <h2>{title}</h2>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  )
}

export default Article