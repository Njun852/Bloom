import React from "react"

export default function TodoCard(){
    return (
        <div className="todo-card">
            <div className="dates flex">
                <h2>Due today</h2>
                <h2>Jan 05 friday</h2>
            </div>
            <div className="todo-today-snippets">
                <ul>
                    <li>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, omnis?
                    </li>
                    <li>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Incidunt nihil omnis deserunt minus quos ipsam.
                    </li>
                    <li>
                        Lorem ipsum dolor sit amet.
                    </li>
                </ul>
            </div>
        </div>
    )
}