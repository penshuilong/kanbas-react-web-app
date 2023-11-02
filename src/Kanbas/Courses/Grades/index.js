import React from "react";
import db from "../../Database";
import { useParams } from "react-router-dom";
import "./index.css";
import {FaFileExport, FaFileImport, FaFilter} from "react-icons/fa";
import "../../kanbas-styles.css";
import {FaGear} from "react-icons/fa6";
function Grades() {
    const { courseId } = useParams();
    const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
    const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);
    return (
        <div className="mt-2">
            <div>
                <div className="wd-top-buttons justify-content-end d-flex">
                    <button type="button" className="btn wd-switch-buttons">
                        <FaFileImport/>Import
                    </button>
                    <button type="button" className="btn wd-switch-buttons">
                        <FaFileExport/>Export
                    </button>
                    <button type="button" className="btn wd-switch-buttons wd-gear-btn">
                        <FaGear/>
                    </button>
                </div>
                <div className="d-flex justify-content-between mb-2">
                    <div className="col-5 ">
                        <strong>Student Names</strong>
                        <input type="text" className="form-control" placeholder="Search Students"/>

                    </div>
                    <div className="col-5">
                        <strong>Assignment Names</strong>
                        <input type="text" className="form-control" placeholder="Search Assignments"/>
                    </div>
                </div>
                <button type="button" className="btn wd-switch-buttons mb-2">
                    <FaFilter/> Apply Filters
                </button>
            </div>
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                    <th>Student Name</th>
                    {assignments.map((assignment) => (<th>{assignment.title}</th>))}
                    </thead>


                    <tbody>
                    {enrollments.map((enrollment) => {
                        const user = db.users.find((user) => user._id === enrollment.user);
                        return (
                            <tr>
                                <td>{user.firstName} {user.lastName}</td>
                                {assignments.map((assignment) => {
                                    const grade = db.grades.find(
                                        (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                                    return (<td>{grade?.grade ||
                                    <input type="text"
                                           placeholder="Input Grade"
                                           className="form-control "/> }</td>);})}
                            </tr>);
                    })}
                    </tbody></table>
            </div>
        </div>);
}
export default Grades;

