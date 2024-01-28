import React from 'react'
import './style.css'

export default function KebabMenu(props){
    function toggle(e) {
        e.stopPropagation()
        for(let btn of document.querySelectorAll('.kebab-menu')){
            btn.children[3].style.transform = 'scaleY(0)'
        }
        if(e.currentTarget == window) return
        e.currentTarget.children[3].style.transform = 'scaleY(1)'    
    }

    React.useEffect(()=> {
        window.addEventListener('click', toggle)
        return () => {
            window.removeEventListener('click', toggle)
        }
    }, [])

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