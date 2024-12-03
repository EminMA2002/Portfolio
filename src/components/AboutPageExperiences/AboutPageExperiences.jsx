import React from 'react'
import "./AboutPageExperiences.css"
import { useState, useRef } from "react";
import { HiArrowUpRight } from "react-icons/hi2";
import { Link } from 'react-router-dom';
import AboutPageExperiencesItem from '../AboutPageExperiencesItem/AboutPageExperiencesItem';


function calcDist(upBG) {
    const rect = upBG.current.getBoundingClientRect();
    return rect.top;
}



function AboutPageExperiences() {
    const [experiences, setExperiences] = useState([
        {
            id: "1",
            title: "Creative Labs",
            job: "Sr. Web Developer & Designer",
            date: "Jan 2024 – Present",
            desc: "At Creative Labs, I lead a team of designers and developers to deliver high-quality digital products. My role involves overseeing the entire development process."
        },
        {
            id: "2",
            title: "Tech Innovations Inc.",
            job: "Full-Stack Developer",
            date: "Jun 2021 – Dec 2023",
            desc: "As a Full-Stack Developer at Tech Innovations Inc., I worked on a variety of projects that required both front-end and back-end expertise for developing web applications."
        },
        {
            id: "3",
            title: "StartUp Solutions",
            job: "Web Developer",
            date: "Aug 2019 – May 2021",
            desc: "At StartUp Solutions, I began my career as a Web Developer, where I focused on building and maintaining websites for small businesses. I honed my skills in HTML, CSS, JavaScript, and WordPress."
        },
        {
            id: "4",
            title: "WebWorks Agency",
            job: "Junior Web Developer (Internship)",
            date: "Jun 2017 – Jul 2019",
            desc: "During my internship at WebWorks Agency, I had the opportunity to work alongside experienced developers on various web design and development projects."
        }
    ])

    const [currentDist, setCurrentDist] = useState();
    const upBG = useRef(null);

    window.addEventListener("scroll", calcDist);
    window.addEventListener("scroll", handleDist);



    function handleDist() {
        const rectTop = calcDist(upBG);
        if (rectTop > 700) {
            setCurrentDist(140);
        } else if (rectTop < 0) {
            setCurrentDist(0);
        } else {
            setCurrentDist(rectTop / 5);
        }
    }


    return (
        <div className='apExperiences'>
            <div className='apExperiencesupbg' style={{
                height: `${currentDist}px`,
            }}></div>
            <div className='apExperiencesdown' ref={upBG}>
                <div className='apExperiencesdownChild'>
                    <div className='apExperiencesdownLeft'>Experiences</div>
                    <div className='apExperiencesdownRight'>
                        <AboutPageExperiencesItem experiences={experiences} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPageExperiences;