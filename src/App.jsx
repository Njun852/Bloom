import React from 'react'
import Header from './components/header/Header'
import Homepage from './pages/homepage/Homepage'

export default function App(){

    return (
        <div className='app flex'>
            <Header/>
            <div className='page flex'>
                <Homepage/>
            </div>
        </div>
    )
}