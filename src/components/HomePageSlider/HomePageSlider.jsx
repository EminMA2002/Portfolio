import React from 'react'
import "./HomePageSlider.css"
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { SiAdobeindesign } from "react-icons/si";
import { SiAdobeaftereffects } from "react-icons/si";
import { SiAdobepremierepro } from "react-icons/si";
import { IoLogoFigma } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaSquareJs } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BsFiletypeScss } from "react-icons/bs";
import { FaBootstrap } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
function HomePageSlider() {
    return (
        <div className='HomeSliderDivFather'>
            <div className='HomeSliderDiv'>
                <div className='item1'><SiAdobephotoshop className='adobe' /></div>
                <div className='item2'><SiAdobeillustrator className='adobe' /></div>
                <div className='item1'><SiAdobeindesign className='adobe' /></div>
                <div className='item2'><SiAdobeaftereffects className='adobe'/></div>
                <div className='item1'> <SiAdobepremierepro className='adobe' /></div>
                <div className='item2'><IoLogoFigma className='adobe' /></div>
                <div className='item1'><FaHtml5 className='adobe' /></div>
                <div className='item2'><FaCss3 className='adobe' /></div>
                <div className='item1'><FaSquareJs className='adobe'/></div>
                <div className='item2'><FaReact className='adobe'/></div>
                <div className='item1'><FaGithub className='adobe'/></div>
                <div className='item2'><BsFiletypeScss className='adobe'/></div>
                <div className='item1'><FaBootstrap className='adobe'/></div>
                <div className='item2'><SiRedux className='adobe'/></div>

            </div>
        </div>
    )
}

export default HomePageSlider;