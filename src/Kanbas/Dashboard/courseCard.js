import React from "react";
import {Link} from "react-router-dom";
import "./dashboard.css";
import "../kanbas-styles.css";
export const CourseCard = ({course, deleteCourse, setCourse, updateCourse}) => {
    const cardWidth = {
        width:"250px",
    };

    const wdColorImage = {
        "background-color": "rgb(0, 118, 184)",
        height:"146px",
    };

    return (
        <div className="course-card">
            <Link key={course._id} to={`/Kanbas/Courses/${course._id}/Home`} >
                <div className="card">
                    {/*<img className="card-img-top" src="..." alt="Card image cap"/>*/}
                    <div style={wdColorImage}></div>
                    <div className="card-body">
                        <h5 className="card-title mb-0">{course.name}</h5>
                        <div className="">
                            <button
                                className="wd-course-btn wdKanbasBgGray wdKanbasBorderGray"
                                onClick={(event) => {
                                    event.preventDefault();
                                    setCourse(course);
                                }}>
                                Edit
                            </button>
                            <button className=" wd-course-btn wdKanbasBorderGray wdKanbasBgGray"
                                    onClick={(event)=> {
                                        event.preventDefault();
                                        updateCourse();
                                    }}>
                                Update
                            </button>
                            <div className="float-end d-block">
                                <button
                                    type="button"
                                    className="wd-course-btn wd-delete-btn"
                                    onClick={(event) => {
                                        event.preventDefault();
                                        deleteCourse(course._id);
                                    }}>
                                    Delete
                                </button>
                            </div>

                        </div>






                        <p className="card-text">The class starts on: {course.startDate}
                            <br/> ends on: {course.endDate}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
}