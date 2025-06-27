
import React, { useEffect, useState } from 'react'
import Up from "../images2/Asset 5.svg"

const ScrollTop = () => {

    const[isscroll,setIsScroll]= useState(false)

    const scrolltotop=()=>{
        window.scrollTo({
            top:0,
            behavior: "smooth",
        });
    }
    
    useEffect(()=>{
        const toggle = ()=>{
            if(window.scrollY >1500){
                setIsScroll(true);
            } else{
                setIsScroll(false)
            }
        }
        window.addEventListener("scroll", toggle)
        return ()=>{
            window.removeEventListener("scroll", toggle)
        }
    },[]);
  return (
    <div>
        {isscroll && (
            <img src={Up} alt=''  onClick={scrolltotop}
            className={`scroll-to-top ${isscroll ? 'show' : 'hide'}`}>
           

            </img>

        )}
    </div>
  )
}

export default ScrollTop