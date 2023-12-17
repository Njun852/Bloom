import React from "react"

export default function Header(props){
    return (
        <header className="flex">
            <h1 className="header-app-name">Bloom</h1>
            <h1 className="greetings">Hello, User123!</h1>
            <nav>
                <ul className={"flex"}>
                    <li onClick={()=>props.change('home')}
                        className={props.selected === 'home' ? 'selected' : ''}
                    >
                        <i className="fa-solid fa-house"></i>Home
                    </li>
                    <li onClick={()=>props.change('todo')}
                        className={props.selected === 'todo' ? 'selected' : ''}
                    >
                        <i className="fa-solid fa-calendar-check"></i>To-Do
                    </li>
                    <li onClick={()=>props.change('study')}
                        className={props.selected === 'study' ? 'selected' : ''}
                    >
                        <i className="fa-solid fa-book-open"></i>Study
                    </li>
                    <li onClick={()=>props.change('profile')}
                        className={props.selected === 'profile' ? 'selected' : ''}
                    >
                        <i className="fa-solid fa-user"></i>User123
                    </li>
                </ul>
            </nav>
        </header>
    )
}