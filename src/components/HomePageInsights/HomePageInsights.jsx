import InsightsPost from "../InsightsPost/InsightsPost";
import "./HomePageInsights.css"
import React from 'react'
import insightcard1 from "../../assets/images/insightcard1.png"
import insightcard2 from "../../assets/images/insightcard2.png"
import insightcard3 from "../../assets/images/insightcard3.png"
import { HiArrowSmallRight } from "react-icons/hi2";

function HomePageInsights() {
  return (
    <div className="insight">
      <div className="insighthead">
        <div className="insightsheadtitle">Insights</div>
        <button className='insightbtn'>View All <HiArrowSmallRight/></button>
      </div>
        <div className="insightscontent">
            <InsightsPost photo={insightcard1}/>
            <InsightsPost photo={insightcard2}/>
            <InsightsPost photo={insightcard3}/>
        </div>
    </div>
  )
}

export default HomePageInsights;