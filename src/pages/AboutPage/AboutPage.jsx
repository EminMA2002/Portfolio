import React from 'react'
import "./AboutPage.css"
import apFirstPhoto from "../../assets/images/apphoto.png"
import AboutPageExperiences from '../../components/AboutPageExperiences/AboutPageExperiences';
import BigPhoto from "../../assets/images/card1.png"
import AboutPageCraftingAndAwards from '../../components/AboutPageCraftingAndAwards/AboutPageCraftingAndAwards';
import AboutPageFAQ from '../../components/AboutPageFAQ/AboutPageFAQ';

function AboutPage() {
  return    <div>
      <div className="aptitle">
        <div className='aptitle1_Container'>
            <div className="aptitle1">Crafting</div>
            <div className='apPhoto'>
              <img className='apImg' src={apFirstPhoto} alt="" />
            </div>
        </div>
            <div className="aptitle2container">
                <div className="aptitleline"></div>
                <div className="aptitle2">timeless stories.</div>
            </div>
            <div className='aptext_Container'>
            <div className="aptext"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; I transform ideas into impactful digital experiences, delivering innovative solutions that elevate brands and captivate audiences around the world.</div>
            </div>
        </div>
        <AboutPageExperiences/>
        <div className='apBigPhoto'>
          <img className='apBigImg' src={BigPhoto} alt="" />
        </div>
        <AboutPageCraftingAndAwards/>
        <AboutPageFAQ/>
  </div>
}

export default AboutPage;