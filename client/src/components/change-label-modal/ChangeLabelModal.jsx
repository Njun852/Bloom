import React from 'react'
import DropDown from '../drop-down/DropDown'
import Label from './Label'
import './assets/style.css'

export default function ChangeLabelModal(props){
    const [selected, setSelected] = React.useState(props.labels[0])
    const [searchQuery, setSearchQuery] = React.useState('')
    const [filteredLabels, setFilteredLabels] = React.useState(searchQuery.length > 0 ? props.labels.filter(label => label.name.toLowerCase()
    .includes(searchQuery.toLowerCase())) : props.labels)
    const labelElements = filteredLabels.map(label => (
        <Label selected={label.id==selected.id} 
        label={label} key={label.id} change={() => setSelected(label)}/>
    ))
    
    function handleChange(e) {
        setSearchQuery(e.target.value)
    }
    return (
        <div className='change-label-modal modal flex'>
            <h1>Choose a Label</h1>
            <div className='flex'>
                <div className='options flex'>
                    <input type="text" placeholder='Search for a label' onChange={handleChange} value={searchQuery}/>
                    <DropDown filter={setFilteredLabels}/>
                    {
                    searchQuery.length === 0 ? 
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_198_6)">
                    <path d="M20.3125 10.1563C20.3125 12.3975 19.585 14.4678 18.3594 16.1475L24.541 22.334C25.1514 22.9443 25.1514 23.9355 24.541 24.5459C23.9307 25.1563 22.9395 25.1563 22.3291 24.5459L16.1475 18.3594C14.4678 19.5898 12.3975 20.3125 10.1562 20.3125C4.5459 20.3125 0 15.7666 0 10.1563C0 4.5459 4.5459 0 10.1562 0C15.7666 0 20.3125 4.5459 20.3125 10.1563ZM10.1562 17.1875C11.0796 17.1875 11.9939 17.0056 12.847 16.6523C13.7001 16.2989 14.4752 15.781 15.1281 15.1281C15.781 14.4752 16.2989 13.7001 16.6523 12.847C17.0056 11.9939 17.1875 11.0796 17.1875 10.1563C17.1875 9.23289 17.0056 8.31858 16.6523 7.46551C16.2989 6.61244 15.781 5.83732 15.1281 5.18441C14.4752 4.53149 13.7001 4.01358 12.847 3.66022C11.9939 3.30687 11.0796 3.125 10.1562 3.125C9.23289 3.125 8.31858 3.30687 7.46551 3.66022C6.61244 4.01358 5.83732 4.53149 5.1844 5.18441C4.53149 5.83732 4.01357 6.61244 3.66022 7.46551C3.30687 8.31858 3.125 9.23289 3.125 10.1563C3.125 11.0796 3.30687 11.9939 3.66022 12.847C4.01357 13.7001 4.53149 14.4752 5.1844 15.1281C5.83732 15.781 6.61244 16.2989 7.46551 16.6523C8.31858 17.0056 9.23289 17.1875 10.1562 17.1875Z" fill="#3B4A3F"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_198_6">
                    <rect width="25" height="25" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg> :
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" onClick={() => setSearchQuery('')}>
                        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                    </svg>
                    }
                    
                </div>
                <div className='labels flex'>
                    {labelElements}
                </div>
                <div className='actions flex'>
                    <button className='cancel-btn' onClick={props.hideModal}>Cancel</button>
                    <button onClick={() => {
                        props.change(selected)
                        props.hideModal()
                    }}>Confirm</button>
                </div>
            </div>
        </div>
    )
}