import React from 'react'
import "./WorksPageLWork.css"
import card1 from "../../assets/images/card1.png"
import card2 from "../../assets/images/card2.png"
import card3 from "../../assets/images/card3.png"
import card4 from "../../assets/images/card4.png"

function WorksPageLWork({ data }) {
  return (
    <div className='wpLW' style={{ gridColumn: `span ${data.col}` }}>
      <div className='wpLWPhoto'>
        <img className='wpLWImg' src={card1} />
      </div>
      <div className='wpLWTitle'>{data.name}</div>
      <div className='wpLWTags'>
        {
          data.tools.map((dat, index) => (
            <button className="wpLWTag">{dat}</button>
          ))
        }
      </div>
    </div>
  )
}

export default WorksPageLWork;