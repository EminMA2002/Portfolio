import React, { useState, useEffect } from 'react'
import "./ProductPage.css"
import { HiArrowSmallRight } from "react-icons/hi2";
import { Link, useParams } from 'react-router-dom';
import AnimationPhoto from '../../components/AnimationPhoto/AnimationPhoto';
import useData from '../../hooks/useData';


function ProductPage() {
    const [scroll, setScroll] = useState(window.scrollY)
    
    const {id} = useParams()
    const data = useData(id)
    

    useEffect(() => { window.addEventListener("scroll", () => setScroll(window.scrollY)) }, [])


    return (<div className="productpage">
        <div className="productPG">
            <div className="product">App Design UI/UX • August 20, 2024</div>
            <div className='productHeadInfos'>
                <div className='productHeadInfosLeft'>
                    <div className='productHeadInfosLeftTitle'>Branding and Website Redesign for Aurora Tech</div>
                    <div className='productHeadInfosLeftText'>Aurora Tech, a rapidly growing tech company, approached me to redefine their brand identity and completely redesign their website. The goal was to modernize their digital presence to better reflect their innovative solutions while creating a seamless and engaging user experience.</div>
                </div>
                <div className='productHeadInfosRight'>
                    <div className='productHeadInfosRightTask'>Task</div>
                    <div className='productHeadInfosRightTaskText'>Transform brands identity with a cohesive brand refresh and a cutting-edge website redesign to drive innovation and engagement.</div>
                    <div className='productHeadInfosRightTaskInfo'>
                        <div className='productHeadInfosRightRole'>
                            <div className='productHeadInfosRightRoleTitle'>Role/Services</div>
                            <div className='productHeadInfosRightRoleText'>App Design UI/UX</div>
                        </div>
                        <div className='productHeadInfosRightClient'>
                            <div className='productHeadInfosRightRoleTitle'>Client</div>
                            <div className='productHeadInfosRightRoleText'>Aurora Tech</div>
                        </div>
                        <div className='productHeadInfosRightCategory'>
                            <div className='productHeadInfosRightRoleTitle'>Category & Year</div>
                            <div className='productHeadInfosRightRoleText'>Brand Identity ©2024</div>
                        </div>
                    </div>
                    <div className='productHeadInfosRightTools'></div>
                </div>
            </div>
            {
                data.image.map((img) => {
                    return <AnimationPhoto img={img} clientScrollY={scroll} />
                })
            }
        </div>
    </div>
    )
}

export default ProductPage