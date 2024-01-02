React.useEffect(()=>{
    // const diff = props.defaultTime - (props.defaultTime - props.time)
    // const i = (props.defaultTime - props.time) * (maxOffset/props.defaultTime)
    // const animate = progressCircle.animate({strokeDashoffset: [i, i+(maxOffset/props.defaultTime)]},
    //     {duration: maxOffset/props.defaultTime, fill:'forwards'})
    
    // setTimeout(()=> {
    //     if(props.state == 'start'){
    //         if(props.time > 0)
    //         props.changeTime()       
    //     }
    // }, 10)
    
    // if(props.state == 'pause'){
        //     animate.pause()
        // }else if(props.state == 'stop'){
            //     animate.cancel()
            // }
    const desiredTime = 100
    let prevTime = Date.now()

    const progressCircle = document.querySelector('.clock > svg > .progress-circle')
    const maxOffset = 1258
    let time = props.time
    const incrementAmount = maxOffset/(props.defaultTime)
    function animate(){
        const timeNow = Date.now()
        if(timeNow-prevTime >= desiredTime && time > 0 && props.state === 'start'){
            time -= 100
            console.log(time);
            const currentProgress = Number(getComputedStyle(progressCircle)
            .getPropertyValue('stroke-dashoffset').replace('px', ''))
            progressCircle.style.strokeDashoffset = `${currentProgress+incrementAmount}px`
            prevTime = timeNow
        }
        requestAnimationFrame(animate)
    }
    animate()
    console.log(Math.floor(Math.ceil(seconds)/60/10)%10)
}, [props.state])