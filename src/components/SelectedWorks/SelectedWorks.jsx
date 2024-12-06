import "./SelectedWorks.css"
import { HiArrowSmallRight } from "react-icons/hi2";
import card1 from "../../assets/images/card1.png"
import card2 from "../../assets/images/card2.png"
import card3 from "../../assets/images/card3.png"
import card4 from "../../assets/images/card4.png"
import { Link } from 'react-router-dom';


function SelectedWorks() {
    return (
        <div className='Selected'>
            <div className="Selectedworkshead">
                <div className='Selectedworktile'>Selected Works</div>
                <button className='Selectedworkbtn'><Link to="/works">View All <HiArrowSmallRight /></Link></button>
            </div>
            <div className='Selectedworkscards'>
                <div className="selected-works-card-1">
                <div className="selected_card_title">
                        <div className="selected_card_text">App Redesign</div>
                        <div className="selected_card_tags">
                            <div className="selected_card_tag">Photoshop</div>
                            <div className="selected_card_tag">Illustrator</div>
                        </div>
                    </div>
                    <img className='cardphoto' src={card1} alt="" />
                </div>
                <div className="selected-works-card-2">
                <div className="selected_card_title">
                        <div className="selected_card_text">App Redesign</div>
                        <div className="selected_card_tags">
                            <div className="selected_card_tag">Photoshop</div>
                            <div className="selected_card_tag">Illustrator</div>
                        </div>
                    </div>
                    <img className='cardphoto' src={card2} alt="" />
                </div>
                <div className="selected-works-card-3">
                <div className="selected_card_title">
                        <div className="selected_card_text">App Redesign</div>
                        <div className="selected_card_tags">
                            <div className="selected_card_tag">Photoshop</div>
                            <div className="selected_card_tag">Illustrator</div>
                        </div>
                    </div>
                    <img className='cardphoto' src={card3} alt="" />
                </div>
                <div className="selected-works-card-4">
                    <div className="selected_card_title">
                        <div className="selected_card_text">App Redesign</div>
                        <div className="selected_card_tags">
                            <div className="selected_card_tag">Photoshop</div>
                            <div className="selected_card_tag">Illustrator</div>
                        </div>
                    </div>
                    <img className='cardphoto' src={card4} alt="" />
                </div>
            </div>
        </div>
    )
}

export default SelectedWorks;