import React from 'react'
import Music from './music/Music'
import './assets/style.css'
import Song from './assets/The Deli - Breeze.mp3'
import Cover from './assets/cover.webp'

export default function MusicPage(props) {
    const [isPlaying, setIsPlaying] = React.useState(false)
    const [currentTime, setCurrentTime] = React.useState(0)
    function handleChange(e) {
        setCurrentTime(e.target.value)
        const player = document.querySelector('audio')
        player.currentTime = e.target.value
    }
    function secondsToMinutes(_seconds) {
        const seconds = Math.round(_seconds)
        const firstDigit = seconds%10
        const secondDigit = Math.floor(seconds/10)%6
        const thirdDigit = Math.floor(seconds/60)%10
        const fourtDigit = Math.floor((seconds/60)/10)
        return `${fourtDigit}${thirdDigit}:${secondDigit}${firstDigit}`
    }
    function toggle() {
        const player = document.querySelector('audio')
        isPlaying ? player.pause() : player.play()
        setIsPlaying(current => !current)

        const currentTime = document.querySelector('.current-time')        
        const slider = document.querySelector('.slider > input')
        function update() {
            currentTime.textContent = secondsToMinutes(player.currentTime)
            slider.value = player.currentTime
            requestAnimationFrame(update)
        }
        update()
    }
    React.useEffect(() => {
        setTimeout(() => {
            const player = document.querySelector('audio')
            const duration = document.querySelector('.duration')
            const slider = document.querySelector('.slider > input')
            slider.max = Math.round(player.duration)
            slider.value = 0 
            
            duration.textContent = secondsToMinutes(player.duration)
        }, 100)
    }, [])
    return (
        <div className='music-page flex'>
            <div className='sidebar flex'>
                <p>In Queue</p>
                <div className='music-list'>
                    <Music isCurrent={true} name='The Deli - Breeze' cover={Cover}/>
                </div>
                <div className='options flex'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M0 224c0 17.7 14.3 32 32 32s32-14.3 32-32c0-53 43-96 96-96H320v32c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 
                34.9-6.9l64-64c12.5-12.5 12.5-32.8 0-45.3l-64-64c-9.2-9.2-22.9-11.9-34.9-6.9S320 19.1 320 32V64H160C71.6 64 0 135.6 0 
                224zm512 64c0-17.7-14.3-32-32-32s-32 14.3-32 32c0 53-43 96-96 96H192V352c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 
                6.9l-64 64c-12.5 12.5-12.5 32.8 0 45.3l64 64c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V448H352c88.4 0 160-71.6 160-160z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 
                416V96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4l192 160L256 241V96c0-17.7 
                14.3-32 32-32s32 14.3 32 32V416c0 17.7-14.3 32-32 32s-32-14.3-32-32V271l-11.5 9.6-192 160z"/></svg>
                {
                    isPlaying ? 
                    <svg onClick={toggle} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                    <path d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 
                    0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"/>
                    </svg> :
                    <svg onClick={toggle} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 
                    9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>
                }
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 
                416V96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4l192 160L256 241V96c0-17.7 
                14.3-32 32-32s32 14.3 32 32V416c0 17.7-14.3 32-32 32s-32-14.3-32-32V271l-11.5 9.6-192 160z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M403.8 34.4c12-5 25.7-2.2 34.9 6.9l64 64c6 6 9.4 
                14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-64 64c-9.2 
                9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6V160H352c-10.1 0-19.6 4.7-25.6 12.8L284 229.3 
                244 176l31.2-41.6C293.3 110.2 321.8 96 352 96h32V64c0-12.9 7.8-24.6 19.8-29.6zM164 282.7L204 336l-31.2 41.6C154.7 
                401.8 126.2 416 96 416H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H96c10.1 0 19.6-4.7 25.6-12.8L164 282.7zm274.6 188c-9.2 
                9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6V416H352c-30.2 0-58.7-14.2-76.8-38.4L121.6 
                172.8c-6-8.1-15.5-12.8-25.6-12.8H32c-17.7 
                0-32-14.3-32-32s14.3-32 32-32H96c30.2 0 58.7 14.2 76.8 38.4L326.4 339.2c6 8.1 15.5 12.8 25.6 12.8h32V320c0-12.9 
                7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l64 64c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-64 64z"/></svg>
                </div>
            </div>
            <main className='flex'>
                <div className='cover'>
                    <div className='filter'></div>
                    <img src={Cover} alt='cover'/>
                </div>
                <div className='details'>
                    <img src={Cover} alt='cover'/>
                    <h1>Breeze</h1>
                    <p>The Deli</p>
                </div>
                <div className='slider flex'>
                    <p className='current-time'>00:00</p>
                    <input type="range" onInput={handleChange}/>
                    <p className='duration'>00:00</p>
                </div>
            </main>
            <audio>
                <source src={Song} type='audio/mp3' />
            </audio>
        </div>
    )
}