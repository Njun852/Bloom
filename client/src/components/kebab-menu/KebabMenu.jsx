import React from 'react'
import './style.css'

export default function KebabMenu(props){
    const [btn, setBtn] = React.useState() 
    
    function toggle(e) {
        e.stopPropagation()
        const button = btn || e.currentTarget
        if(!btn){
            setBtn(button)
        }else{
            setBtn()
        }
        button.children[3].style.transform = !btn ? 'scaleY(1)' : 'scaleY(0)'
    }

    React.useEffect(()=> {
        if(!btn) return
        window.addEventListener('click', toggle)
        return () => {
            window.removeEventListener('click', toggle)
        }
    }, [btn])

    return (
        <div className='kebab-menu flex' onClick={toggle}>
            <div></div>
            <div></div>
            <div></div>
            <div className='options flex'>
                {props.children}
            </div>
        </div>
    )
}