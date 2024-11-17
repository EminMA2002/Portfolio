import "./InsightsPost.css"
import React from 'react'
import { FaRegClock } from "react-icons/fa";



function InsightsPost({photo}) {
  return (
    <div className="ininsight">
        <div className='insightpost'>
        <img src={photo}/>
        </div>
        <div className="insightdate"><FaRegClock />August 20, 2024</div>
        <div className="insighttitle">The Future of Digital Design - Trends to Watch</div>
        <div className="insighttags">
            <button className="insighttag">Branding</button>
            <button className="insighttag">Design</button>
            <button className="insighttag">Trends</button>
        </div>
    </div>
  )
}

export default InsightsPost;