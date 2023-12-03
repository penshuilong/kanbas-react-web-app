import { React, useState } from "react";
import { Link } from "react-router-dom";
import db from "../Database";
import { addTodo, setTodo } from "../../Labs/a4/ReduxExamples/todos/todosReducer";
import { add } from "../../Labs/a4/ReduxExamples/AddRedux/addReducer";
function Dashboard({ courses, newCourse, setNewCourse, addCourse,
    deleteCourse, updateCourse }
) {


    return (
        <div>
            <h1>Dashboard</h1>
            <div className="list-group">

                <li className="list-group-item">
                    <button onClick={() => addCourse(newCourse)} className="btn btn-success float-end">Add</button>
                    <button onClick={() => updateCourse(newCourse)} className="btn btn-warning float-end" style={{ marginRight: "10px" }}>
                        Update </button>
                    <input
                        value={newCourse.name}
                        onChange={(e) =>
                            setNewCourse({
                                ...newCourse,
                                name: e.target.value
                            }
                            )

                        }
                    />
                </li>

                {courses.map((course) => (
                    <div key={course._id} className="list-group-item" style={{ width: "500px" }}>
                        <Link to={`/Kanbas/Courses/${course._id}`}>
                            <span style={{ textDecorationLine: 'none', color: 'black' }}>{course.name}</span>
                        </Link>
                        <button onClick={() => deleteCourse(course._id)} className="btn btn-danger float-end me-2">Delete</button>
                        <button onClick={() => setNewCourse(course)} className="btn btn-primary float-end" style={{ marginRight: "10px" }}>Edit</button>
                    </div>
                ))}

            </div>
        </div>
    );
}


export default Dashboard;



