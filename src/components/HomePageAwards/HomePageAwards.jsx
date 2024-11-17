import React from 'react'
import "./HomePageAwards.css"
import { useState, useRef } from "react";
import { HiArrowUpRight } from "react-icons/hi2";
import { Link } from 'react-router-dom';

function HomePageAwards() {
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
        <div className='homepgawards'>
            <div className='homepgawardsupbg' style={{
                height: `${currentDist}px`,
            }}></div>
            <div className='homepgawardsdown' ref={upBG}>
                <div className='homepgawardsdownchild'>
                    <div className='homepgawardstitle'>Awards & Recognition</div>
                    <div className='homepgawardscontents'>
                        <div className='homepgawardscontent'>
                            <div className='homepgawardscontentleft'>
                                <div className='homepgawardscontenttitle'>Best User Experience</div>
                                <div className='homepgawardscontenttext'>2021 - Webby Awards</div>
                            </div>
                            <Link to="/about" className='homepgawardscontentright'><HiArrowUpRight className='icontoabout' /></Link>

                        </div>
                        <div className='homepgawardscontent'>
                            <div className='homepgawardscontentleft'>
                                <div className='homepgawardscontenttitle'>Honorable Mention</div>
                                <div className='homepgawardscontenttext'>2022 - Awwwards</div>
                            </div>
                            <Link to="/about" className='homepgawardscontentright'><HiArrowUpRight className='icontoabout' /></Link>

                        </div>
                        <div className='homepgawardscontent'>
                            <div className='homepgawardscontentleft'>
                                <div className='homepgawardscontenttitle'>Best UI Design</div>
                                <div className='homepgawardscontenttext'>2023 - CSS Design Awards</div>
                            </div>
                            <Link to="/about" className='homepgawardscontentright'><HiArrowUpRight className='icontoabout' /></Link>

                        </div>
                        <div className='homepgawardscontent'>
                            <div className='homepgawardscontentleft'>
                                <div className='homepgawardscontenttitle'>Awards of The Year</div>
                                <div className='homepgawardscontenttext'>2024 - Honor of Awards</div>
                            </div>
                            <Link to="/about" className='homepgawardscontentright'><HiArrowUpRight className='icontoabout' /></Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePageAwards;


























// import React from 'react'
// import "./HomePageAwards.css"
// import { useState, useRef } from "react";

// function HomePageAwards() {
//     const [borderRadius, setBorderRadius] = useState();
//     const upBG = useRef(null);
//     const [yCoordinate, setYCoordinate] = useState(0);

//     const updateYCoordinate = () => {
//         if (upBG.current) {
//           const rect = upBG.current.getBoundingClientRect();
//           setYCoordinate(rect.top);
//         }
//       };

//     window.addEventListener("scroll", updateYCoordinate);


//     const handleScroll = () => {

//         const scrollY = window.scrollY;
//         console.log(yCoordinate);
//         setBorderRadius(`${Math.floor((scrollY / yCoordinate) * -1)}%`)
//         console.log(borderRadius);

//         // const newRadius = Math.max(50 - scrollY / 6, 0);
//         // setBorderRadius(newRadius);
//     };

//     window.addEventListener("scroll", handleScroll);


//     return (
//         <div className='homepgawards'>
//             <div className='homepgawardsupbg' ref={upBG} style={{
//                 borderBottomLeftRadius: `${borderRadius}`,
//                 borderBottomRightRadius: `${borderRadius}`,
//             }}></div>
//             <div className='homepgawardsdown'></div>
//         </div>
//     )
// }

// export default HomePageAwards;