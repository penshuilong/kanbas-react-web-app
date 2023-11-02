import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import "./index.css";
import {useDispatch, useSelector} from "react-redux";
import {
    addAssignment,
    emptyNewAssignment,
    setNewAssignment,
    updateAssignment
} from "../assignmentsReducer";


function AssignmentEditor() {
    const assignments = useSelector((state)=>state.assignmentsReducer.assignments);
    const newAssignment = useSelector((state)=>state.assignmentsReducer.newAssignment);
    const dispatch = useDispatch();

    const { courseId, assignmentId } = useParams();
    console.log(assignmentId);
    const existingAssignment = assignments.find((assignment)=>(assignment._id === assignmentId));
    console.log(existingAssignment);
    const assignment = (assignmentId  !== "new") ? existingAssignment: newAssignment;



    const navigate = useNavigate();
    console.log("New Assignment:" + JSON.stringify(newAssignment));
    console.log("Assignment:" + JSON.stringify(assignment));

    return (
        <div className="col-11 wd-wrapper">
            <div>
                <h2>Assignment Name</h2>
                <input value={assignment.title}
                       className="form-control mb-2" onChange={(e)=>{
                           dispatch(setNewAssignment({...assignment, title:e.target.value}))
                            if(assignmentId !== "new"){
                                dispatch(updateAssignment(newAssignment));
                            }
                       }
                    }
                />

                <input value={assignment.description} className="form-control wd-description-input"
                       onChange={(e)=>{
                           dispatch(setNewAssignment({...assignment, description:e.target.value}))
                           if(assignmentId !== "new"){
                               dispatch(updateAssignment(newAssignment));
                           }
                       }}
                />
            </div>

            <div className="justify-content-end d-flex">
                <div className="col-8 wd-points-assign">
                    <label className="d-flex align-items-center">Points
                        <input className="form-control wd-points-input" value={assignment.points}
                        onChange={(e)=>{
                            const enteredPoints = parseInt(e.target.value, 10);
                            const maxPoints = 100; // Maximum points allowed
                            const minPoints = 0;

                            // Check if enteredPoints exceeds the maximum
                            if (enteredPoints > maxPoints) {
                                // If it exceeds the maximum, set it to the maximum value
                                dispatch(setNewAssignment({
                                                              ...assignment,
                                                              points: maxPoints
                                                          }));
                            } else if(isNaN(enteredPoints)){
                                dispatch(setNewAssignment({
                                                              ...assignment,
                                                              points: minPoints
                                                          }));
                            }
                                else {
                                // If within the limit, update the points normally
                                dispatch(setNewAssignment({
                                                              ...assignment,
                                                              points: enteredPoints
                                                          }));
                            }
                            if(assignmentId !== "new"){
                                dispatch(updateAssignment(newAssignment));
                            }

                        }}/>
                    </label>
                    <label className="d-flex mt-3 ">
                        Assign
                        <div className="form-control wd-assign-box">
                            <div className="mb-3">
                                <strong>Due</strong>
                                <input type="date" className="form-control"
                                value={assignment.dueDate}
                                onChange={(e)=>{
                                    dispatch(setNewAssignment(
                                        {...assignment, dueDate:new Date(e.target.value)
                                                .toISOString().split('T')[0]}
                                    ))
                                    if(assignmentId !== "new"){
                                        dispatch(updateAssignment(newAssignment));
                                    }
                                    }
                                }/>
                            </div>
                            <div className="justify-content-between d-flex">
                                <div className="wd-available-from">
                                    <strong>Available from</strong>
                                    <input type="date" className="form-control"
                                           value={assignment.availableFromDate}
                                           onChange={(e)=>{
                                               dispatch(setNewAssignment(
                                                   {...assignment,
                                                       availableFromDate:new Date(e.target.value)
                                                           .toISOString().split('T')[0]}
                                               ))
                                               if(assignmentId !== "new"){
                                                   dispatch(updateAssignment(newAssignment));
                                               }
                                           }
                                           }/>
                                </div>
                                <div className="wd-available-from">
                                    <strong>Until</strong>
                                    <input type="date" className="form-control"
                                    value={assignment.availableUntilDate}
                                           onChange={(e)=>{
                                               dispatch(setNewAssignment(
                                                   {...assignment,
                                                       availableUntilDate:new Date(e.target.value)
                                                           .toISOString().split('T')[0]}
                                               ))
                                               if(assignmentId !== "new"){
                                                   dispatch(updateAssignment(newAssignment));
                                               }
                                           }
                                           }/>
                                </div>
                            </div>
                        </div>
                    </label>

                </div>

            </div>
            <hr/>
            <div className="d-block float-end">
                <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                      className="btn btn-outline-dark wdKanbasBgGray wdKanbasBorderGray"
                onClick={()=>dispatch(emptyNewAssignment())}>
                    Cancel
                </Link>
                <button onClick={
                    ()=>{
                        if(assignmentId === "new"){
                            dispatch(setNewAssignment(
                                {...assignment, course:courseId}
                            ));
                            dispatch(addAssignment());
                        }
                        else {
                            dispatch(updateAssignment(assignment));
                            dispatch(emptyNewAssignment());
                        }
                        navigate(`/Kanbas/Courses/${courseId}/Assignments`);

                    }
                } className="btn btn-danger me-2">
                    Save
                </button>
            </div>
        </div>
    );
}


export default AssignmentEditor;