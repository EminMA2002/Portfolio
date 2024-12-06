import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { HiArrowSmallRight } from "react-icons/hi2";
import './HomePageeButton.css';

const sizes = {
    width: 800,
    height: 800,
};

function HomePageeButton() {
    const button = useRef();
    
    const [pos, setPos] = useState({
        x: 0,
        y: 0,
        opened: false,
    });

    // Handles the mouse leave event
    function handleMouseOut(e) {
        setPos({
            x: e.clientX - button.current.getBoundingClientRect().x - sizes.width/2,
            y: e.clientY - button.current.getBoundingClientRect().y - sizes.height/2,
            opened: false
        });
    }

    // Handles the mouse enter event
    function enterMouse(e) {
        console.log({'clientX':e.clientX,"button":button.current.getBoundingClientRect().x});
        console.log();
        
        
        setPos({
            x: e.clientX - button.current.getBoundingClientRect().x- sizes.width/2,
            y: e.clientY - button.current.getBoundingClientRect().y - sizes.height/2,
            opened: true
        });
    }

    return (
        <button 
            ref={button} 
            onMouseEnter={enterMouse} 
            onMouseLeave={handleMouseOut} 
            className="letstalkbtn"
        >
            <div 
                className='btn_round' 
                style={{
                    left: `${pos.x}px`, 
                    top: `${pos.y}px`, 
                    transform: pos.opened ? "scale(1,1)" : "scale(0,0)",
                }}
            ></div>
            <Link to="/contact">
                Let`s Talk! <HiArrowSmallRight />
            </Link>
        </button>
    );
}

export default HomePageeButton;
