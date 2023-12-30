import React from 'react'
import './assets/style.css'
export default function Clock(props) {
    const [time, setTime] = React.useState(props.time*1000)
    const [isPause, setIsPause] = React.useState(true)
    function changeState(){
        setIsPause(prev => !prev)
    }

    const seconds = time/1000
    const minute = seconds/60
    React.useEffect(()=>{
        const progressCircle = document.querySelector('.clock > svg > .progress-circle')
        const maxOffset = 1258.1292724609375
        const convertedToMilis = props.time*1000
        const diff = convertedToMilis - (convertedToMilis - time)
        const i = (convertedToMilis - time) * maxOffset/convertedToMilis
        let animation = progressCircle.animate({
            strokeDashoffset: [i, maxOffset]
        }, {duration: diff, fill:'forwards'})
        if(isPause) {
            animation.cancel()
            return
        }
        console.log(time/1000 );
        setTimeout(()=> {
            if(time > 0)
            setTime(prev => prev-100)
        }, 100)
        return function() {
            const offset = getComputedStyle(progressCircle).getPropertyValue('stroke-dashoffset')
            progressCircle.style.strokeDashoffset = offset
            animation.cancel()
        }
    }, [time, isPause])
    return (
        <div className='clock flex' onClick={changeState}>
            <svg width='100%' height='100%'>
                <circle cx="50%" cy="50%" r="200" stroke="#9EAFA2" filter='url(#filter0_i_102_72)' 
                strokeWidth="53" fill='transparent'/>
                <circle cx="50%" cy="50%" r="200" strokeWidth="53"
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
            <h1>{Math.floor((minute-minute%10)/10)}{Math.floor(minute%10)}
            :{Math.floor((seconds%60-seconds%60%10))/10}{Math.floor(seconds%60%10)}</h1>
        </div>
    )
}