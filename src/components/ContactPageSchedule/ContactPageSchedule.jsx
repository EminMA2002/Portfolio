import React from 'react'
import "./ContactPageSchedule.css"
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { HiOutlinePhone } from "react-icons/hi2";
import { IoMailOutline } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";
import { HiArrowSmallRight } from "react-icons/hi2";


function ContactPageSchedule() {
    const [currentDist, setCurrentDist] = useState();
    const [emptyInput, setEmptyInput] = useState();
    const [mailData, setMailData] = useState({
            name: "",
            email:"",
            phone:"",
            cname:"",
            cweb:"",
            interest:"",
            budget:"",
            exactBudget:"",
            timeline:"",
            message:"",

        });

    function handleInput(key, value){
        setMailData({...mailData, [key]:value})
    }

    const upBG = useRef(null);

    function doEmpty() {
        setEmptyInput("")
    }

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

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault(); // Prevent default form submission
    
        // Prepare the email data based on the schema you provided
        const emailData = {
            name: mailData.name,
            email: mailData.email,
            phone: mailData.phone,
            cname: mailData.cname,
            cweb: mailData.cweb,
            interest: mailData.interest,
            budget: mailData.budget,
            exactBudget: mailData.exactBudget,
            timeline: mailData.timeline,
            message: mailData.message
        };
    
        // Send the email directly using emailjs.send
        emailjs.send('service_i24ccly', 'template_hpvam6s', emailData, {
            publicKey: 'lajOVz6LYJcRdKPGm',
        })
        .then(
            () => {
                console.log('SUCCESS!');
            },
            (error) => {
                console.log('FAILED...', error.text);
            }
        );
    };
    

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
                            <div className='cpScheduleMail'><IoMailOutline className='cpScheduleLeftContainerA' />e.mmmdv02@gmail.com</div>
                            <div className='cpScheduleAddress'><SlLocationPin className='cpScheduleLeftContainerA' />Baku, Sh.Mehtiyev 136</div>
                        </div>
                    </div>
                    <form ref={form} onSubmit={sendEmail} className='cpScheduleRight'>
                        <input onChange={(e)=>handleInput("name", e.target.value)} name="user_name" placeholder='Name' type="text" />
                        <input onChange={(e)=>handleInput("email", e.target.value)} name="user_email" placeholder='Email address' type="email" />
                        <input onChange={(e)=>handleInput("phone", e.target.value)} name="phone" placeholder='Phone' type="text" />
                        <input onChange={(e)=>handleInput("cname", e.target.value)} name="company_name" placeholder='Company Name' type="text" />
                        <input onChange={(e)=>handleInput("cweb", e.target.value)} name="company_site" placeholder='Company Website' type="text" />
                        <div className='interestedin'>
                            <div className='interestedinTitle'>I'm interested in:</div>
                            <div className='interestedinButtons'>
                                <button type="button" onClick={(e)=>handleInput("interest", "Branding")} style={mailData.interest == "Branding" ? {backgroundColor: "black", color: "white"} : {backgroundColor: "white", color: "black"}}>Branding</button>
                                <button type="button" onClick={(e)=>handleInput("interest", "Web Design")} style={mailData.interest == "Web Design" ? {backgroundColor: "black", color: "white"} : {backgroundColor: "white", color: "black"}}>Web Design</button>
                                <button type="button" onClick={(e)=>handleInput("interest", "App Design")} style={mailData.interest == "App Design" ? {backgroundColor: "black", color: "white"} : {backgroundColor: "white", color: "black"}}>App Design</button>
                                <button type="button" onClick={(e)=>handleInput("interest", "Other")} style={mailData.interest == "Other" ? {backgroundColor: "black", color: "white"} : {backgroundColor: "white", color: "black"}}>Other</button></div>
                        </div>
                        <div className='mybudget'>
                            <div className='mybudgetTitle'>My budget is:</div>
                            <div className='mybudgetButtons'>
                                <button type="button" onClick={(e)=>handleInput("budget", "2K")} style={mailData.budget == "2K" ? {backgroundColor: "black", color: "white"} : {backgroundColor: "white", color: "black"}}>2k</button>
                                <button type="button" onClick={(e)=>handleInput("budget", "2-5K")} style={mailData.budget == "2-5K" ? {backgroundColor: "black", color: "white"} : {backgroundColor: "white", color: "black"}}>2-5k</button>
                                <button type="button" onClick={(e)=>handleInput("budget", "5-10K")} style={mailData.budget == "5-10K" ? {backgroundColor: "black", color: "white"} : {backgroundColor: "white", color: "black"}}>5-10k</button>
                                <button type="button" onClick={(e)=>handleInput("budget", "20K")} style={mailData.budget == "20K" ? {backgroundColor: "black", color: "white"} : {backgroundColor: "white", color: "black"}}>20k</button>
                            </div>
                        </div>
                        <input onChange={(e)=>handleInput("exactBudget", e.target.value)} name="exact_budget" placeholder='Do you have an exact budget?' type="text" />
                        <input onChange={(e)=>handleInput("timeline", e.target.value)} name="timeline" placeholder='What is your timeline?' type="text" />
                        <input onChange={(e)=>handleInput("message", e.target.value)} name="message" id='messageinput' placeholder='Message' type="text" />
                        <button onClick={doEmpty} type='submit' value="send" className='submitmessage'>Submit Message<HiArrowSmallRight className='submitmessagearrow' /></button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactPageSchedule;