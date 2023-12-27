import React from 'react'
import MoodStatus from './components/moodstatus/MoodStatus'
import MoodHistory from './components/mood-history/MoodHistory'
import GuyLayin from './assets/guy-laying.png'
import GuyMaditating from './assets/guy-meditating.png'
import './assets/style.css'
export default function WellBeingPage() {

    return (
        <main className='well-being-page flex'>
            <MoodStatus/>
            <div className='bottom-part flex'>
                <MoodHistory/>
                <div className='activities flex'>
                    <div className='listen-music flex'>
                        <img src={GuyLayin} alt='guy laying on sofa' />
                        <h2>Listen to calming music</h2>
                    </div>
                    <div className='meditate flex'>
                        <h2>Meditate</h2>
                        <img src={GuyMaditating} alt='Guy Meditating'/>
                    </div>
                </div>
            </div>            
        </main>
    )
}