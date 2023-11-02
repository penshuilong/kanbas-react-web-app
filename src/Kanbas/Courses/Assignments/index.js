import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import "../../kanbas-styles.css";
import "./index.css";
import {FaPlus} from "react-icons/fa";
import {FaEllipsis} from "react-icons/fa6";
import {Navigate} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {deleteAssignment} from "./assignmentsReducer";


function Assignments() {
    const { courseId } = useParams();
    const assignments = useSelector((state)=>state.assignmentsReducer.assignments);
    const courseAssignments = assignments.filter(
        (assignment) => assignment.course === courseId);
    const dispatch = useDispatch();

    return (
        <div className="mt-3 col-10">
            <div className="d-flex justify-content-between wd-top-buttons">
                <input type="text" className="form-control wd-search-field" placeholder="Search for Assignment"/>
                <div>
                    <button type="button" className="btn wdKanbasBgGray">
                        <FaPlus/>Group
                    </button>
                    {/* + Assignment Button*/}
                    <Link to={`/Kanbas/Courses/${courseId}/Assignments/Assignment-editor/new`} className="btn btn-danger">
                        <FaPlus/> Assignment
                    </Link>
                    <button type="button" className="btn wdKanbasBgGray">
                        <FaEllipsis/>
                    </button>
                </div>
            </div>
            <hr/>
            <h2 className="wd-assignment-title wdKanbasBgGray
             wdKanbasBorderGray">Assignments for course {courseId}</h2>
            <div className="list-group">
                {courseAssignments.map((assignment) => (
                    <Link
                        key={assignment._id}
                        to={`/Kanbas/Courses/${courseId}/Assignments/Assignment-editor/${assignment._id}`}
                        className="list-group-item wd-assignment-item">
                        <div className="d-flex justify-content-between">
                            <div>
                                <strong>{assignment.title}</strong>
                                <div>
                                    <small>
                                        <span className="wdKanbasRed">Multiple Modules</span> |
                                        Due {assignment.dueDate} | {assignment.points} pts
                                    </small>
                                </div>
                            </div>
                            <button className="btn btn-danger"
                            onClick={(e)=> {
                                e.preventDefault();
                                dispatch(deleteAssignment(assignment._id));
                            }}>Delete</button>
                        </div>

                    </Link>
                ))}
            </div>
        </div>
    );
}
export default Assignments;