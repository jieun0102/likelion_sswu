import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import addtodo from '../img/plus.png'
import deleteIcon from '../img/del.png'

const Todo = () => {

    const [input, setInput] = useState('');
    const [todo, setTodo] = useState([]);

    const addTodo = () => {
        const text = input.trim();
        if (!text) {
            alert('내용을 입력해 주세요!');
            return;
        }
        setTodo([...todo, { id: Date.now(), text, checked: false }]);
        setInput('');

    };

    const toggleTodo = (id) => {
        setTodo(
            todo.map(todo => todo.id === id ? { ...todo, checked: !todo.checked } : todo)
        );
    };

    const removeTodo = (id) => {
        setTodo(todo.filter(todo => todo.id !== id));
    };

    return (
        <div>
            <header>
                <h1 className='title'>TO-DO LIST</h1>
                <div className='addTodo'>
                    <input className='textTodo' onChange={e => setInput(e.target.value)} type="text" value={input} placeholder='오늘 할 일을 입력해주세요!' />
                    <button id='addbtn' onClick={addTodo}>
                        <img src={addtodo} alt="addbtn" />
                    </button>
                </div>
            </header>
            <main>
                <div className='mainwrap'>
                    {todo.map(todo => (
                        <div key={todo.id} className={`list ${todo.checked ? 'checked' : ''}`}>
                            <div className='todo_item'>
                                <input className='checkboxIcon' type='checkbox' id={`chk-${todo.id}`} checked={todo.checked} onChange={() => toggleTodo(todo.id)}></input>
                                <label htmlFor={`chk-${todo.id}`}></label>
                                <p>{todo.text}</p>
                                <button className='delbtn' onClick={() => removeTodo(todo.id)}>
                                <img src={deleteIcon} alt="delete" />
                            </button>
                            </div>
                        </div>

                    ))}
                </div>

            </main>
        </div>

    );
};

export default Todo;