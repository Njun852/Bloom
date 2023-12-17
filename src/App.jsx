import React from "react"
import Header from "./components/Header"
import Home from "./pages/Home"
import ToDo from "./pages/ToDo"
import Study from "./pages/Study"
import Profile from "./pages/Profile"
export default function App(){
    const [page, setPage] = React.useState('home')

    function navigate(page){
        setPage(page)
    }
    return (
        <div className="app">
            <Header 
                change={(page)=> navigate(page)}
                selected={page}/>
            <main className="app-main">
            {page === 'home' && <Home/>}
            {page === 'todo' && <ToDo/>}
            {page === 'study' && <Study/>}
            {page === 'profile' && <Profile/>}
            </main>
        </div>
    )
}