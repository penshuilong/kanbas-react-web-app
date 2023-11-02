import React from "react";
import {useSelector} from "react-redux";
import CounterRedux from "./CounterRedux";
import HelloRedux from "./HelloRedux";
import AddRedux from "./AddRedux";
import TodoList from "./todos/TodoList";
const ReduxExamples = () => {
    const {message} = useSelector((state)=>state.helloReducer);
    return(
        <div>
            <h2>Redux Examples</h2>
            <h2>{message}</h2>
            <HelloRedux/>
            <CounterRedux/>
            <AddRedux/>
            <TodoList/>
        </div>
    );
};

export default ReduxExamples;