import React from 'react'
import './assets/style.css'
export default function Clock(props) {
    const seconds = props.time/1000

    React.useEffect(()=>{
        const progressCircle = document.querySelector('.clock > svg > .progress-circle')
        const maxOffset = 1258
        const diff = props.defaultTime - (props.defaultTime - props.time)
        const i = (props.defaultTime - props.time) * (maxOffset/props.defaultTime)
        const animate = progressCircle.animate({strokeDashoffset: [i, i+(maxOffset/props.defaultTime)]},
            {duration: maxOffset/props.defaultTime, fill:'forwards'})
        
        setTimeout(()=> {
            if(props.state == 'start'){
                if(props.time > 0)
                props.changeTime()       
            }
        }, 10)
        
        if(props.state == 'pause'){
            animate.pause()
        }else if(props.state == 'stop'){
            animate.cancel()
        }
        console.log(Math.floor(Math.ceil(seconds)/60/10)%10)
        return function() {
            animate.cancel()
        }
    }, [props.time, props.state])
    return (
        <div className='clock flex'>
            <svg width='100%' height='100%'>
                <circle cx="50%" cy="50%" r="165" stroke="#9EAFA2" filter='url(#filter0_i_102_72)' 
                strokeWidth="30" fill='transparent'/>
                <circle cx="50%" cy="50%" r="165" strokeWidth="30"
                stroke='url(#paint0_linear_102_73)' fill='transparent' className='progress-circle'/>
                
                <filter id="filter0_i_102_72" x="0" y="0" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_102_72"/>
                </filter>
                <linearGradient id="paint0_linear_102_73" x1="206.5" y1="22.5" x2="321.5" y2="415" 
                gradientUnits="userSpaceOnUse">
                <stop stopColor="#3DB0F6"/>
                <stop offset="0.519791" stopColor="#008EE4"/>
                <stop offset="1" stopColor="#007BC5"/>
                </linearGradient>
            </svg>
            <h1>
                {Math.floor(Math.ceil(seconds)/60/10)%10}
                {Math.floor(Math.ceil(seconds)/60)%10}:
                {Math.floor(Math.ceil(seconds)%60/10)}
                {Math.ceil(seconds%10)%10}
            </h1>
        </div>
    )
}