import React from "react"
import TodoCard from "../components/TodoCard"
import Slides from "../components/Slides"
import "../assets/homepage.css"
export default function Home(){
    return (
        <main className="homepage flex">
            <div className="right-content flex column">
                <TodoCard/>
                <Slides/>
            </div>
            <div className="left-content">
                <div className="call-to-action flex">
                    <i className="fa-solid fa-clock"></i>
                    <h2>Timer</h2>
                </div>
                <div className="call-to-action flex">
                    <i className="fa-solid fa-book"></i>
                    <h2>Notes1</h2>
                </div>
            </div>
            
        </main>
    )
}