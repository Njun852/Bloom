import React from 'react'
import './style.css'

export default function ConfirmDeleteModal(props){
    return (
        <div className='confirm-delete-modal modal flex'>
            <h2>Confirm Delete?</h2>
            <div className='flex'>
                <button className='cancel-btn' onClick={props.hideModal}>Cancel</button>
                <button className='okay-btn' onClick={
                    () => {props.delete()
                    props.hideModal()}}>Confirm</button>
            </div>
        </div>
    )
}