import React, { useEffect, useRef, useState } from 'react'
import "./AnimationPhoto.css"



function AnimationPhoto({img, clientScrollY}) {
    const animatedPhoto = useRef()
    const [close, setClose] = useState(false)
    
    
    useEffect(()=>{
        if(animatedPhoto){
            if(clientScrollY >= animatedPhoto.current.getBoundingClientRect().y+clientScrollY - animatedPhoto.current.getBoundingClientRect().height + 100){
                setClose(true)
            }else{
                setClose(false)
            }
        }

    },[clientScrollY])
    
  return (
    <div ref={animatedPhoto} className={`animationimg ${close ? "test" : ""}`} >
        <img src={img} alt="" style={close ? {transform: "scale(1) translateX(0px) translateY(0px)"} : {transform: "scale(1.3)  translateX(100px) translateY(100px)"}} />
    </div>
  )
}

export default AnimationPhoto