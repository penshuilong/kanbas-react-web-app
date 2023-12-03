import React, {useState} from "react";
import {Link} from "react-router-dom";
import db from "../Database";
import {faDeleteLeft, faEllipsisV, faPenToSquare, faTrash} from "@fortawesome/free-solid-svg-icons";
import "./index.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Dashboard({
                       courses, course, setCourse, addNewCourse,
                       deleteCourse, updateCourse
                   }) {

    return (
        <div>
            <div className="title-content">
                <h3 className="d-none d-sm-block mt-2 mb-0">Dashboard</h3>
                <div className="d-flex flex-row align-items-center justify-content-end">
                    <FontAwesomeIcon className="mt-3 d-block d-sm-none" icon={faEllipsisV}/>
                </div>
                <hr/>
            </div>

            <div className="courses-content">
                <h5>Course</h5>
                <input value={course.name} className="form-control"
                       onChange={(e) => setCourse({...course, name: e.target.value})}/>
                <input value={course.number} className="form-control"
                       onChange={(e) => setCourse({...course, number: e.target.value})}/>
                <input value={course.startDate} className="form-control" type="date"
                       onChange={(e) => setCourse({...course, startDate: e.target.value})}/>
                <input value={course.endDate} className="form-control" type="date"
                       onChange={(e) => setCourse({...course, endDate: e.target.value})}/>
                <button className="btn btn-success me-1"
                        onClick={addNewCourse}>
                    Add
                </button>
                <button className="btn btn-primary"
                        onClick={updateCourse}>
                    Update
                </button>


                <h4>Published Courses ({courses.length})</h4>
                <hr/>
                <div className="list-group d-flex flex-row flex-wrap">
                    {courses.map((course) => (
                        <div className="card my-3 mx-3">
                            <div className="card-img-top"></div>
                            <div className="vertical-dots">
                                <FontAwesomeIcon className="text-white" icon={faEllipsisV}/>
                            </div>
                            <Link
                                key={course._id}
                                to={`/Kanbas/Courses/${course._id}`}
                                className="text-decoration-none text-reset"
                            >
                                <div className="card-body m-0">
                                    <h6 className="card-title">{course.name}</h6>
                                    <p className="card-text text-muted">
                                        {course.number}.{course._id}
                                    </p>
                                    <p className="card-text text-muted">
                                        {course.startDate}
                                    </p>

                                    <Link
                                        className="text-danger me-2"
                                        onClick={(event) => {
                                            event.preventDefault();
                                            deleteCourse(course._id);
                                        }}>
                                        <FontAwesomeIcon icon={faTrash}/>
                                    </Link>
                                    <Link
                                        className="text-muted me-2"
                                        onClick={(event) => {
                                            event.preventDefault();
                                            setCourse(course);
                                        }}>
                                        <FontAwesomeIcon icon={faPenToSquare}/>
                                    </Link>

                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
