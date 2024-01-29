import React from 'react'
import { nanoid } from 'nanoid'
import './style.css'

export default function CreateLabelModal(props){
    const [label, setLabel] = React.useState(props.current|| {name: '', priority: 2})
    function handleChange(e){
        setLabel(current => ({...label, [e.target.name]: e.target.value}))
    }
    function addLabel(){
        props.addLabel({...label, priority: Number(label.priority), id: label.id || nanoid()})
        props.hideModal()
    }
    return (
        <div className='create-label-modal flex modal'>
            <h2>{props.title} Label</h2>
            <div className='card flex'>
                <div className='fields flex'>
                    <div className='field flex'>
                        <label htmlFor='label-name'>Name:</label>
                        <input type='text' name='name' id='label-name' 
                        placeholder='e.g. work' value={label.name} onChange={handleChange}/>
                    </div>
                    <div className='field flex'>
                        <label htmlFor='label-priority'>Priority:</label>
                        <select id='label-priority' name='priority' value={label.priority} onChange={handleChange}>
                            <option value={2}>Normal</option>
                            <option value={3}>Low</option>
                            <option value={1}>Important</option>
                        </select>
                    </div>
                </div>
                <div className='options flex'>
                    <button className='cancel-btn' onClick={props.hideModal}>Cancel</button>
                    <button className='okay-btn-secondary' onClick={addLabel}>{props.title}</button>
                </div>
            </div>
        </div>
    )
}