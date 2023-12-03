import React from "react";
import {Link, useParams} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faCaretDown,
    faCheck,
    faCircleCheck,
    faEllipsisV,
    faGripVertical,
    faPenToSquare,
    faPlus,
} from "@fortawesome/free-solid-svg-icons";
import './index.css';
import {useDispatch, useSelector} from "react-redux";
import {
    addAssignment,
    deleteAssignment,
    updateAssignment,
    setAssignment
} from "./assignmentsReducer";
import {useEffect} from "react";
import * as client from "../Assignments/client";

function Assignments() {
    const {courseId} = useParams();
    const assignments = useSelector((state) => state.assignmentsReducer.assignments);
    const assignment = useSelector((state) => state.assignmentsReducer.assignment);
    const courseAssignments = assignments.filter(
        (assignment) => assignment.course === courseId
    );
    const dispatch = useDispatch();

    useEffect(() => {
        client.findAssignmentsForCourse(courseId)
            .then((assignments) =>
                      dispatch(setAssignment(assignments))
            );
    }, [courseId]);

    const handleDeleteAssignment = (e, assignmentId) => {
        e.preventDefault();
        const confirmation = window.confirm("Are you sure you want to delete this assignment?");
        if (confirmation) {
            client.deleteAssignment(assignmentId).then((status) => {
                dispatch(deleteAssignment(assignmentId));
            });
        }
    };

    return (
        <div>
            <div className="title-content">
                <div className="d-flex align-items-center">
                    <input
                        type="search"
                        className="search-bar form-control me-2"
                        id="search"
                        placeholder="Search for Assignment"
                    ></input>
                    <Link to={`/Kanbas/Courses/${courseId}/Assignments/NewAssignment`}
                          className="btn btn-danger d-flex align-items-center me-2" role="button">
                        <FontAwesomeIcon className="me-1" icon={faPlus}/>
                        <span>Assignment</span>
                    </Link>
                    <a className="btn btn-secondary d-flex align-items-center me-2" role="button">
                        <FontAwesomeIcon className="me-1" icon={faPlus}/>
                        <span>Group</span>
                    </a>
                    <a className="btn btn-secondary" role="button">
                        <FontAwesomeIcon icon={faEllipsisV}/>
                    </a>
                </div>
                <hr className="modules-hr"/>
            </div>
            <div className="list-group">
                <Link
                    className="list-group-item list-group-item-secondary d-flex justify-content-between align-items-center"
                >
                    <div className="d-flex align-items-center">
                        <FontAwesomeIcon
                            className="me-2"
                            icon={faGripVertical}
                        ></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
                        <h6 className="ms-2 mt-3">ASSIGNMENTS</h6>
                    </div>
                    <div className="d-flex align-items-center">
                        <p className="percent-total float-end me-2 mt-3 rounded-pill">
                            40% of Total
                        </p>
                        <Link to={`/Kanbas/Courses/${courseId}/Assignments/NewAssignment`}
                              className="me-2 float-end text-secondary">
                            <FontAwesomeIcon icon={faPlus}/>
                        </Link>
                        <FontAwesomeIcon
                            className="text-secondary"
                            icon={faEllipsisV}
                        ></FontAwesomeIcon>
                    </div>
                </Link>
                {courseAssignments.map((assignment) => (
                    <div>
                        <Link
                            key={assignment._id}
                            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                            className="list-group-item"
                        >
                            <div className="row mt-2">
                                <div className="col-2">
                                    <FontAwesomeIcon
                                        className="me-2"
                                        icon={faGripVertical}
                                    ></FontAwesomeIcon>
                                    <FontAwesomeIcon
                                        className="text-success"
                                        icon={faPenToSquare}
                                    ></FontAwesomeIcon>
                                </div>
                                <div className="col-8">
                                    <h6> {assignment.title}</h6>
                                    <div className="d-flex align-items-center">
                                        <p className="text-danger">Multiple Modules</p>
                                        <p className="mx-2">|</p>
                                        <p className="fw-bold me-2">Due</p>
                                        <p>{assignment.due} | {assignment.points}pts</p>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <FontAwesomeIcon
                                        className="text-secondary float-end"
                                        icon={faEllipsisV}
                                    ></FontAwesomeIcon>
                                    <FontAwesomeIcon
                                        className="text-success me-2 float-end"
                                        icon={faCircleCheck}
                                    ></FontAwesomeIcon>
                                </div>
                            </div>
                            <button className="btn btn-danger"
                                    onClick={(e) => handleDeleteAssignment(e, assignment._id)}>
                                Delete
                            </button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Assignments;
