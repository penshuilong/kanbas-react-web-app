import { React, useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineEllipsisVertical } from "react-icons/hi2";
import { TfiWrite } from "react-icons/tfi";
import db from "../Database";
import "./index.css"
import "../index.css"

function Dashboard({ courses, course, setCourse, addNewCourse, deleteCourse, updateCourse }) {
  const colorMap = {
    19753: "color-turquoise", 
    16840: "color-indigo", 
    12075: "color-green",
  };
  return (
    <div className="dashboard">
      <h1 className="mt-3 ms-4 mb-0 font-slim">Dashboard</h1>
      <hr className="mt-2 ms-4"/>
      <h2 className="ms-5 font-slim">Published Courses (3)</h2>
      <hr className="ms-5"/>
      <div className="edit-dashboard ms-5">
        <h5>Edit Dashboard</h5>
        <input value={course.name} className="form-control" placeholder="Course Name"
              onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
        <input value={course.number} className="form-control" placeholder="Course Number"
              onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
        <input value={course.startDate} className="form-control" type="date"
              onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
        <input value={course.endDate} className="form-control" type="date"
              onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />
        <button onClick={addNewCourse} className="btn btn-success mt-2">Add</button>
        <button onClick={updateCourse} className="btn btn-primary mt-2 ms-2">Update</button>
      </div>
      {/* TODO: fix card alignment */}
      <div className="list-group ms-5">
        {courses.map((course) => (
          <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="list-group-item p-0 mt-3 me-4">
            <div className="card-group">
              <div className="card">
                <div className={`card-top bg-${colorMap[`${course._id}`]}`}>
                  <HiOutlineEllipsisVertical className="text mt-3 me-2 color-white float-right" size="35"/>
                </div>
                <div className="card-body">
                    <p className={`primary-text mb-1 ${colorMap[`${course._id}`]}`}>{course.name}</p>
                    <p class="secondary-text mt-0">
                      {course.number}.{course._id}
                    </p>
                    <button onClick={(event) => {
                        event.preventDefault();
                        setCourse(course);
                      }}
                        className="btn btn-light">
                      <TfiWrite className="text mb-1 me-2" size="20"/>
                      Edit
                    </button>
                    <button onClick={(event) => {
                        event.preventDefault();
                        deleteCourse(course._id);
                      }} 
                        className="btn btn-danger float-end">
                      Delete
                    </button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Dashboard;