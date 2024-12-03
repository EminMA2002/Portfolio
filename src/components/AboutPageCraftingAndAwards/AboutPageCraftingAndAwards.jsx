import React from 'react'
import "./AboutPageCraftingAndAwards.css"
import { useState } from 'react'
import { BsAppIndicator } from "react-icons/bs";
import { BsLayersHalf } from "react-icons/bs";
import { BsIntersect } from "react-icons/bs";

function AboutPageCraftingAndAwards() {
    const [cus, setCus] = useState([
        {
            icon: <BsAppIndicator />,
            title: "years of experience",
            cost: "10+",
            desc: "From startups to established brands, helping them achieve their digital goals."
        },
        {
            icon: <BsLayersHalf />,
            title: "clients worldwide",
            cost: "6",
            desc: "Worked with a variety of clients, from startups to established brands, helping them achieve their digital goals."
        },
        {
            icon: <BsIntersect />,
            title: "awards achieved",
            cost: "12+",
            desc: "Collaborative and client-focused, ensuring that every project reflects the unique vision."
        },

    ]);

    const [awards, setAwards] = useState([
        {
            title: "Certificate of Degree",
            desc: "I graduated from the Faculty of Information Technologies at Azerbaijan State Oil and Industry University",
            date: "2019 - 2022"
        },
        {
            title: "Design Certificate",
            desc: "I finished the Baku Design Center  course with first place and honor certificate",
            date: "2019"
        },
        {
            title: "EVO Coding Center",
            desc: "I graduated from the EVO Coding Center course with an honors diploma. In the first month of training, I already had 2 sites and a portfolio.",
            date: "2024"
        }
    ])

  return (
    <div className='APCAA' >
        <div className='CUS_Container'>
            <div className='CUS_Left'>Crafting Unique Skills</div>
            <div className='CUS_Right'>
                {
                      cus.map((cus, index) => (
                        <div className='CUSItem' key={index}>
                            <div className='CUSItemHead'>    
                            <div className='CUSItemIcon'>{cus.icon}</div>
                            <div className='CUSItemCost'>{cus.cost}</div>
                            </div>
                            <div className='CUSItemTitle'>{cus.title}</div>
                            <div className='CUSItemDesc'>{cus.desc}</div>
                        </div>
                    ))
                }
            </div>
        </div>
        <div className='apLine'></div>
        <div className='AR_Container'>
            <div className='AR_Left'>Awards & Recognition</div>
            <div className='AR_Right'>
                {
                      awards.map((award, index) => (
                        <div className='ARItem' key={index}>
                            <div className='ARItemTitle'>{award.title}</div>
                            <button className='ARItemDate'>{award.date}</button>
                            <div className='ARItemDesc'>{award.desc}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default AboutPageCraftingAndAwards;