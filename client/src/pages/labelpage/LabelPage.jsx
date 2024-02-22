import React from 'react'
import DropDown from '../../components/drop-down/DropDown'
import Label from './label/Label'
import CreateLabelModal from './create-label-modal/CreateLabelModal'
import './style.css'

export default function LabelPage(props){
    function updateLabel(id, property, value){
        props.setLabels(current => {
            const updated =  current.map(label => {
                return label.id === id ?
                {...label, [property]: value} : label
            })
            updateToServer(updated)
            return updated
        })
    }
    function deleteLabel(id) {
        props.setLabels(current => {
            const updated = current.filter(task => task.id != id)
            updateToServer(updated)
            return updated
        })}
    function addLabel(label) {
        props.setLabels(current => {
            const added = [...current, label]
            updateToServer(added)
            return added
    })}
    const labelElements = props.labels.map(label => {
        const tasks = props.tasks.filter(task => task.label.id == label.id)
        const completedTasks = tasks.filter(task => task.finished)
        return <Label name={label.name} tasks={tasks.length} 
        delete={() => deleteLabel(label.id)}
        completedTasks={completedTasks.length} priority={label.priority}
        id={label.id} key={label.id} setModal={props.setModal} updateLabel={updateLabel}
        addLabel={(label)=>{ props.setLabels(current => current.map(l => l.id === label.id ? {...label} : {...l}))}}/>
    })
    function updateToServer(labels) {
        fetch('http://localhost:5000/labels', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify([...labels])
        })
    }

    return (
        <div className='label-page flex'>
            <div className='flex'>
                <h1>Labels</h1>
                <DropDown filter={props.setLabels}/>
            </div>
            <div className='flex'>
                <div className='labels flex'>
                    {labelElements}
                </div>
                <div className='flex'>
                    <button onClick={props.moveToTaskPage}>Go Back</button>
                    <button className='flex' onClick={() => props.setModal(<CreateLabelModal title={'Create'} addLabel={addLabel} hideModal={() => props.setModal()}/>)}>
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