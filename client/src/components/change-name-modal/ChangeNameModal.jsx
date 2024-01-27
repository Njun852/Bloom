import React from 'react'
import './style.css'
export default function ChangeNameModal(props){
    const [name, setName] = React.useState('')
    function handleChange(e){
        setName(e.currentTarget.value)
    }
    function rename(){
        props.rename(name)
        props.hideModal()   
    }
    return (
        <div className='change-name-modal modal flex'>
            <h2>Rename Task</h2>
            <div className='flex'>
                <input type="text" placeholder='New Name' value={name} onChange={handleChange}/>
                <div className='flex'>
                    <button onClick={props.hideModal} className='cancel-btn'>Cancel</button>
                    <button onClick={rename} className='okay-btn'>Okay</button>
                </div>
            </div>
        </div>
    )
}