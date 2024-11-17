import React from 'react'
import "./SelectedWorks.css"
import { HiArrowSmallRight } from "react-icons/hi2";
import card1 from "../../assets/images/card1.png"
import card2 from "../../assets/images/card2.png"
import card3 from "../../assets/images/card3.png"
import card4 from "../../assets/images/card4.png"

function SelectedWorks() {
    return (
        <div className='Selected'>
            <div className="Selectedworkshead">
                <div className='Selectedworktile'>Selected Works</div>
                <button className='Selectedworkbtn'>View All <HiArrowSmallRight/></button>
            </div>
            <div className='Selectedworkscards'>
                <div className="selected-works-card-1">
                    <img className='cardphoto' src={card1} alt="" />
                </div>
                <div className="selected-works-card-2">
                    <img className='cardphoto' src={card2} alt="" />
                </div>
                <div className="selected-works-card-3">
                    <img className='cardphoto' src={card3} alt="" />
                </div>
                <div className="selected-works-card-4">
                    <img className='cardphoto' src={card4} alt="" />
                </div>
            </div>
        </div>
    )
}

export default SelectedWorks;