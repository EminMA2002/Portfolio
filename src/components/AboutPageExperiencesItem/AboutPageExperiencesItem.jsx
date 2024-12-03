import React from 'react'
import "./AboutPageExperiencesItem.css"

function AboutPageExperiencesItem({ experiences }) {
    return (
            experiences.map((experience, index) => (
                <div className='experiencesItem' key={index}>
                    <div className='experiencesItemId'>0{experience.id}.</div>
                    <div className='experiencesItemTitle'>{experience.title}</div>
                    <div className='experiencesItemJob'>{experience.job}</div>
                    <button className='experiencesItemDate'>{experience.date}</button>
                    <div className='experiencesItemDesc'>{experience.desc}</div>
                </div>
            ))
    )
}

export default AboutPageExperiencesItem;