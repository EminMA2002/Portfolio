import React from 'react'
import "./ContactPageSchedule.css"
import { useState, useRef } from "react";
import { HiOutlinePhone } from "react-icons/hi2";
import { IoMailOutline } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";
import { HiArrowSmallRight } from "react-icons/hi2";


function ContactPageSchedule() {

    const [currentDist, setCurrentDist] = useState();
    const upBG = useRef(null);

    window.addEventListener("scroll", calcDist);
    window.addEventListener("scroll", handleDist);

    function calcDist() {
        const rect = upBG.current.getBoundingClientRect();
        return rect.top;
    }

    function handleDist() {
        const rectTop = calcDist();
        if (rectTop > 700) {
            setCurrentDist(140);
        } else if (rectTop < 0) {
            setCurrentDist(0);
        } else {
            setCurrentDist(rectTop / 5);
        }
    }


    return (
        <div className='cpSchedule'>
            <div className='cpScheduleupbg' style={{
                height: `${currentDist}px`,
            }}></div>
            <div className='cpScheduledown' ref={upBG}>
                <div className='cpScheduleChild'>
                    <div className='cpScheduleLeft'>
                        <div className='cpScheduleLeftTitle'>Schedule a call with me to see if I can help</div>
                        <div className='cpScheduleLeftText'>Whether you’re looking to start a new project or simply want to chat, feel free to reach out to me!</div>
                        <div className='cpScheduleLeftContainer'>
                            <div className='cpSchedulePhone'><HiOutlinePhone className='cpScheduleLeftContainerA' />+994 55 768 33 80</div>
                            <div className='cpScheduleMail'><IoMailOutline className='cpScheduleLeftContainerA'/>e.mmmdv02@gmail.com</div>
                            <div className='cpScheduleAddress'><SlLocationPin className='cpScheduleLeftContainerA'/>Baku, Sh.Mehtiyev 136</div>
                        </div>
                    </div>
                    <div className='cpScheduleRight'>
                        <input placeholder='Name' type="text" />
                        <input placeholder='Email address' type="text" />
                        <input placeholder='Phone' type="text" />
                        <input placeholder='Company Name' type="text" />
                        <input placeholder='Company Website' type="text" />
                        <div className='interestedin'>
                            <div className='interestedinTitle'>I'm interested in:</div>
                            <div className='interestedinButtons'>
                                <button>Branding</button>
                                <button>Web Design</button>
                                <button>App Design</button>
                                <button>Other</button></div>
                        </div>
                        <div className='mybudget'>
                            <div className='mybudgetTitle'>My budget is:</div>
                            <div className='mybudgetButtons'>
                                <button>2k</button>
                                <button>2-5k</button>
                                <button>5-10k</button>
                                <button>20k</button>
                            </div>
                        </div>
                        <input placeholder='Do you have an exact budget?' type="text" />
                        <input placeholder='What is your timeline?' type="text" />
                        <input id='messageinput' placeholder='Message' type="text" />
                        <button className='submitmessage'>Submit Message<HiArrowSmallRight className='submitmessagearrow'/></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactPageSchedule;