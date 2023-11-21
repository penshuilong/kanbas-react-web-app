import React from 'react';
import JavaScript from "./JavaScript";
import PathParameters from "./PathParameters";
import DynamicStyling from "./DynamicStyling";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoItem from "./todo/TodoItem";
import {useSelector} from "react-redux";

function Assignment3() {
    const {todos} = useSelector((state)=>state.todosReducer);
    return (
        <div>
            <h1>Assignment 3</h1>
            <ConditionalOutput/>
            <Classes/>
            <Styles/>
            <JavaScript/>
            <PathParameters/>
            <DynamicStyling/>
            <TodoItem/>
            <ul className="list-group">
                {todos.map((todo) => (
                    <li className="list-group-item" key={todo.id}>
                        {todo.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default Assignment3;