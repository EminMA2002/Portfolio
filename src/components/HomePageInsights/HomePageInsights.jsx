import InsightsPost from "../InsightsPost/InsightsPost";
import "./HomePageInsights.css"
import React from 'react'
import insightcard1 from "../../assets/images/insightcard1.png"
import insightcard2 from "../../assets/images/insightcard2.png"
import insightcard3 from "../../assets/images/insightcard3.png"

function HomePageInsights() {
  return (
    <div className="insight">
        <div className="insightstitle">Insights</div>
        <div className="insightscontent">
            <InsightsPost photo={insightcard1}/>
            <InsightsPost photo={insightcard2}/>
            <InsightsPost photo={insightcard3}/>
        </div>
    </div>
  )
}

export default HomePageInsights;