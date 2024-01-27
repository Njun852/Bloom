import React from 'react'
import DropDown from '../../components/drop-down/DropDown'
import Label from './label/Label'
import './style.css'

export default function LabelPage(props){
    return (
        <div className='label-page flex'>
            <div className='flex'>
                <h1>Labels</h1>
                <DropDown/>
            </div>
            <div className='flex'>
                <div className='labels flex'>
                    <Label name='Today' tasks={15} completedTasks={5} priority={2}/>
                    <Label name='Important' tasks={3} completedTasks={0} priority={1}/>
                    <Label name='School' tasks={5} completedTasks={2} priority={3}/>
                </div>
                <div className='flex'>
                    <button onClick={props.moveToTaskPage}>Go Back</button>
                    <button className='flex'>
                        Add Label
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 
                        32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 
                        32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
                    </button>
                </div>
            </div>
        </div>
    )
}