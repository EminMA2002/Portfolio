import React from 'react'
import "./HomePageFooter.css"
import { HiArrowSmallRight } from "react-icons/hi2";
import { HiArrowUpRight } from "react-icons/hi2";
import { Link } from 'react-router-dom';

function HomePageFooter() {
  return (
    <div className='HPFooter'>
        <div className='HPFooterTitleAndBTN'>
            <div className='HPFTitle'>Let's Create Something</div>
            <div className='HPFTitleSecBTN'>
                <div className='HPFTitleSec'>Together</div>
                <div className='HPFLine'></div>
                <button className='HPFBTn'>Get In Toucn! <HiArrowSmallRight /></button>
            </div>
        </div>
        <div className='HPFSocials'>
            <Link to={"https://www.instagram.com/e_mmmdv/"} className='HPFSocial'>Instagram <HiArrowUpRight /> </Link>
            <Link to={"https://www.behance.net/emmmdv"} className='HPFSocial'>Behance <HiArrowUpRight /></Link>
            <Link to={"https://www.linkedin.com/home?originalSubdomain=tr"} className='HPFSocial'>Linkedin <HiArrowUpRight /></Link>
        </div>
    </div>
  )
}

export default HomePageFooter;