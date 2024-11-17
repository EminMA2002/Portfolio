import React from 'react'
import "./HomePageCategory.css"

function HomePageCategory({title, text, number}) {
  return (
    <div className='categoryfather'>
        <div className='categorynumber'>{number}</div>
        <div className='categorycontent'>
            <div className='categorytitle'>{title}</div>
            <div className='categorytext'>{text}</div>
        </div>
    </div>
  )
}

export default HomePageCategory;