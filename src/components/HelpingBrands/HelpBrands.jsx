import React from 'react'
import "./HelpBrands.css"
import { HiArrowSmallRight } from "react-icons/hi2";
import HomePageCategory from '../HomePageCategory/HomePageCategory';
import { Link } from 'react-router-dom';


function HelpBrands() {
  return (
    <div>
        <div className='helpbrands'>
            <div className='helpbrandstitle'>Helping brands achieve digital mastery of creative innovation and strategic planning.</div>
            <div className='helpbrandstext'>Transforming ideas into digital realities by blending strategic insights with innovative design, helping brands thrive in a rapidly evolving digital landscape.</div>
            <button className='helpbrandsbtn'><Link to="/contact">About Me <HiArrowSmallRight /></Link></button>
            <div className='helpbrandscategories'>
                <HomePageCategory title="Branding" text="I craft distinctive brand identities that resonate and endure. Through strategic insight and meticulous design, I build a unified visual language that captures your essence and speaks to your audience." number="01" />
                <HomePageCategory title="UI/UX" text="Designing intuitive and engaging user experiences that seamlessly blend form and function. I focus on creating interfaces that are not only visually appealing but also deeply functional and user-centric." number="02"/>
                <HomePageCategory title="App Design" text="Transforming ideas into captivating app experiences. I design with precision and creativity, ensuring every interaction is smooth and every visual element enhances user delight and engagement." number="03"/>
            </div>
        </div>
    </div>
  )
}

export default HelpBrands;