import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import { IoEllipsisVerticalOutline } from "react-icons/io5";
import { BsGripVertical } from "react-icons/bs";
import { RiBook3Line } from "react-icons/ri";
import { IoEllipsisVerticalSharp } from "react-icons/io5";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, deleteAssignment, updateAssignment, selectAssignment } from "./assignmentsReducer";
function Assignments() {
  const { courseId } = useParams();
  // const assignments = db.assignments;

  // const courseAssignments = useSelector((state) => state.assignmentsReducer.assignments.filter((assignment) => assignment.course === courseId));
  const assignment = useSelector((state) => state.assignmentsReducer.assignment);
  const assignments = useSelector((state) => state.assignmentsReducer.assignments);
  const dispatch = useDispatch();
  return (
    <div>
      <div class="row">
        <div class="col-9">
          <input class="form-control w-25" placeholder="Search for Assignments" />
        </div>
        <div class="col-3">
          <button type="button" class="btn btn-outline-secondary">+ Group</button>
          <Link key={assignment._id} to={`/Kanbas/Courses/${courseId}/Assignments/createNewAssignment`}><button type="button" class="btn btn-danger">+ Assginment</button></Link>
          <button type="dropdown" class="btn btn-light">
            <IoEllipsisVerticalSharp />
          </button>
        </div>
      </div>
      <hr />
      <h2>Assignments for course {courseId}</h2>
      <div className="list-group">
  {assignments
    .filter((module) => module.course === courseId)
    .map((assignment) => (
      <Link
        key={assignment._id}
        to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
        className="list-group-item"
        onClick={() => dispatch(selectAssignment(assignment))}
      >
        <div className="row">
          <div className="col-1 text-center mt-2" style={{ fontSize: "25px" }}>
            <BsGripVertical />
            <RiBook3Line style={{ color: "green", marginRight: "5px" }} />
          </div>
          <div className="col-7">
            <strong className="fs-5 text">{assignment.title}</strong>
            <br />
            {assignment.due}
          </div>
          <div className="col-4">
            <button
              className="btn btn-danger w-25 float-end"
              onClick={(e) => {
                const confirmed = window.confirm("Are you sure you want to remove this assignment?");
                if (confirmed) {
                
                dispatch(deleteAssignment(assignment._id));
                }
                e.preventDefault();
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </Link>
    ))}
</div>

    </div>
  );
}
export default Assignments;