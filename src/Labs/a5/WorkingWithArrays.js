import {useEffect, useState} from "react";
import axios from "axios";

function WorkingWithArrays() {
    const API = "http://localhost:4000/a5/todos";
    const [todo, setTodo] = useState({
                                         id: 1,
                                         title: "NodeJS Assignment",
                                         description: "Create a NodeJS server with ExpressJS",
                                         due: "2021-09-09",
                                         completed: false,
                                     });
    const [todos, setTodos] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);
    const postTodo = async () => {
        const response = await axios.post(API, todo);
        setTodos([...todos, response.data]);
    };

    const fetchTodos = async () => {
        const response = await axios.get(API);
        setTodos(response.data);
    };
    const removeTodo = async (todo) => {
        const response = await axios
            .get(`${API}/${todo.id}/delete`);
        setTodos(response.data);
    };
    const deleteTodo = async (todo) => {
        try {
            const response = await axios.delete(
                `${API}/${todo.id}`);
            setTodos(todos.filter((t) => t.id !== todo.id));
        } catch (error) {
            setErrorMessage(`Can't delete todo with id ${todo.id}`);
        }
    };

    const updateTodo = async () => {
        try {
            const response = await axios.put(
                `${API}/${todo.id}`, todo);
            setTodos(todos.map((t) => (
                t.id === todo.id ? todo : t)));
            setTodo({});
        } catch (error) {
            setErrorMessage(`Can't update todo with id ${todo.id}`);
        }
    };

    const createTodo = async () => {
        const response = await axios.post(API, todo);
        setTodos([...todos, response.data]);
    };

    const fetchTodoById = async (id) => {
        const response = await axios.get(`${API}/${id}`);
        setTodo(response.data);
    };

    const updateTitle = async () => {
        const response = await axios.get(
            `${API}/${todo.id}/title/${todo.title}`);
        setTodos(response.data);
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    return (
        <div>
            <h3>Working with Arrays</h3>
            <h3>Updating an Item in an Array</h3>
            <div className="row">
                <div className="col-sm-2">
                    <label htmlFor="idInput">Id:</label>
                </div>
                <div className="col-sm-10">

                    <input
                        id="idInput"
                        value={todo.id}
                        onChange={(e) => setTodo({...todo, id: e.target.value})}
                        className="form-control mb-2"
                        type="number"
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-sm-2">
                    <label htmlFor="titleInput">Title:</label>
                </div>
                <div className="col-sm-10">
                    <input
                        id="titleInput"
                        value={todo.title}
                        onChange={(e) => setTodo({...todo, title: e.target.value})}
                        className="form-control mb-2"
                        type="text"
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-sm-2">
                    <label htmlFor="descriptionInput">Description:</label>
                </div>
                <div className="col-sm-10">
                    <textarea
                        id="descriptionInput"
                        onChange={(e) => setTodo({
                                                     ...todo,
                                                     description: e.target.value
                                                 })}
                        value={todo.description}
                        className="form-control mb-2"
                        type="text"
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-sm-2">
                    <label htmlFor="dateInput">Date:</label>
                </div>
                <div className="col-sm-10">
                    <input
                        id="dateInput"
                        onChange={(e) => setTodo({
                                                     ...todo, due: e.target.value
                                                 })}
                        value={todo.due}
                        className="form-control mb-2"
                        type="date"
                    />
                </div>
            </div>

            <label>
                <input
                    checked={todo.completed}
                    onChange={(e) => setTodo({
                                                 ...todo, completed: e.target.checked
                                             })}
                    className="form-check-input mb-2"
                    type="checkbox"
                />
                Completed
            </label>
            <br/>

            <a
                href={`${API}/${todo.id}/title/${todo.title}`}
                className="btn btn-primary me-2">
                Update Title to {todo.title}
            </a>
            <a
                href={`${API}/${todo.id}/description/${todo.description}`}
                className="btn btn-primary me-2">
                Update Description
            </a>
            <a
                href={`${API}/${todo.id}/completed/${todo.completed}`}
                className="btn btn-primary me-2">
                Update Completed
            </a>

            <h3>To Do List</h3>
            <button onClick={updateTitle}
                    className="btn btn-success mb-2 w-100">
                Update Title
            </button>
            <button onClick={createTodo}
                    className="btn btn-primary mb-2 w-100">
                Create Todo
            </button>
            <button className='btn btn-secondary mb-2 w-100' onClick={postTodo}>
                Post Todo
            </button>
            <button className='btn btn-info mb-2 w-100' onClick={updateTodo}>
                Update Todo
            </button>

            {errorMessage && (
                <div className="alert alert-danger mb-2 mt-2">
                    {errorMessage}
                </div>
            )}
            {console.log("ERROR MESSAGE: ", errorMessage)}
            <ul className="list-group">
                {todos.map((todo) => (
                    <li key={todo.id}
                        className="list-group-item">
                        <button
                            onClick={() => fetchTodoById(todo.id)}
                            className="btn btn-warning me-2 float-end">
                            Edit
                        </button>
                        <button
                            onClick={() => removeTodo(todo)}
                            className="btn btn-danger float-end">
                            Remove
                        </button>
                        <button
                            onClick={() => deleteTodo(todo)}
                            className="btn btn-danger float-end ms-2">
                            Delete
                        </button>
                        <input
                            checked={todo.completed}
                            type="checkbox" readOnly
                        />
                        {todo.title}
                        <p>{todo.description}</p>
                        <p>{todo.due}</p>
                    </li>
                ))}
            </ul>

            <h3>Deleting from an Array</h3>
            <a href={`${API}/${todo.id}/delete`}
               className="btn btn-primary me-2">
                Delete Todo with ID = {todo.id}
            </a>
            <h4>Retrieving Arrays</h4>
            <a href={API} className="btn btn-primary me-2">
                Get Todos
            </a>
            <h4>Retrieving an Item from an Array by ID</h4>
            <a href={`${API}/${todo.id}`}
               className="btn btn-primary me-2">
                Get Todo by ID
            </a>
            <h3>Filtering Array Items</h3>
            <a href={`${API}/${todo.id}?completed=true`}
               className="btn btn-primary me-2">
                Get Completed Todos
            </a>
            <h4>Creating new Items in an Array</h4>
            <a href={`${API}/create`}
               className="btn btn-primary me-2">
                Create Todo
            </a>
        </div>
    );
}

export default WorkingWithArrays;