import React from 'react'
import './TodoListTemplate.css'

// 함수형 컴포넌트: 파라미터는 props를 비구조화 할당하였다.
const TodoListTemplate = ({form, children, palette})=> {
    return (
        <main className = "todo-list-template">
            <div className="title">
                오늘 할 일
            </div>
            <section className="form-wrapper">
                {palette}
                {form}
            </section>
            <section className="todos-wrapper">
               {children}
            </section>
        </main>
    )
}
export default TodoListTemplate