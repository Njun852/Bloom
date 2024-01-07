import React from 'react'
import './assets/style.css'
export default function Clock(props) {
    const seconds = props.time/1000

    React.useEffect(()=>{
        const desiredTime = 10
        let prevTime = Date.now()
    
        const progressCircle = document.querySelector('.clock > .time > svg > .progress-circle')
        const maxOffset = 1036.306640625
        const incrementAmount = maxOffset/(props.defaultTime/10)
        if(props.state === 'stop'){
            progressCircle.style.strokeDashoffset = '0px'
        }
        let animation
        function animate(){
            const timeNow = Date.now()
            const currentProgress = (props.defaultTime-props.time)*incrementAmount/10
            progressCircle.style.strokeDashoffset = `${currentProgress}px`
            if(timeNow-prevTime >= desiredTime && props.time > 0 && props.state === 'start'){
                props.changeTime()
                progressCircle.style.strokeDashoffset += `${incrementAmount}px`
                prevTime = timeNow
            }
            animation = requestAnimationFrame(animate)
        }
        animation = requestAnimationFrame(animate)
        return ()=>{    
            cancelAnimationFrame(animation)
        }
    }, [props.time, props.state])
    return (
        <div className='clock flex'>
            <div className='time flex'>
                <svg width='100%' height='100%'>
                    <circle cx="50%" cy="50%" r="165" stroke="#9EAFA2" filter='url(#filter0_i_102_72)' 
                    strokeWidth="40" fill='transparent'/>
                    <circle cx="50%" cy="50%" r="165" strokeWidth="40"
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
                <div>
                <h2>{props.session.replace(props.session[0], props.session[0].toUpperCase())}</h2>
                <h1>
                    {/* {seconds} */}
                    {Math.floor(Math.ceil(seconds)/60/10)%10}
                    {Math.floor(Math.ceil(seconds)/60)%10}:
                    {Math.floor(Math.ceil(seconds)%60/10)}
                    {Math.ceil(seconds%10)%10}
                </h1>
                </div>
            </div>
            {props.state == 'stop' && <button onClick={()=> props.updateState('start')}>Start</button>}
            {props.time <= 0 ? <button onClick={props.stopTimer}>Done</button> :
            props.state != 'stop' &&
            <div className='when-start flex'>
                {props.state != 'pause' && <button onClick={()=> props.updateState('pause')}>Pause</button>}
                {props.state == 'pause' && <button onClick={()=> props.updateState('start')}>Continue</button>}
                <button onClick={props.stopTimer}>Stop</button>
            </div>}
        </div>
    )
}