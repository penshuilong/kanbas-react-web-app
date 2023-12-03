import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import db from "../../../Database";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setModule, updateModule} from "../../Modules/modulesReducer";
import {
    addAssignment,
    setAssignment,
    updateAssignment,
    deleteAssignment
} from "../assignmentsReducer";
import * as client from "../client";

function AssignmentEditor() {
    const {assignmentId} = useParams();
    const {courseId} = useParams();
    const dispatch = useDispatch();

    const [isNewAssignment, setIsNewAssignment] = useState(false);

    const assignments = useSelector((state) => state.assignmentsReducer.assignments);
    const assignment_new = useSelector((state) => state.assignmentsReducer.assignment);

    const [assignment, setAssignment] = useState(assignment_new);

    const handleAddAssignment = () => {
        client.createAssignment(courseId, assignment).then((assignment) => {
            dispatch(addAssignment(assignment));
        });
    };

    const handleUpdateAssignment = async () => {
        const status = await client.updateAssignment(assignment);
        dispatch(updateAssignment(assignment));
    };
    useEffect(() => {
        if (assignmentId === "NewAssignment") {
            handleNewAssignment();
        } else {
            setAssignment(assignments.find((a) => a._id === assignmentId));
        }
    }, []);

    function handleNewAssignment() {
        setIsNewAssignment(true);
        setAssignment({...assignment, course: courseId});
    }

    return (
        <div>

            <div className="col-11 col-sm-12">
                <form id="assignment-edit">
                    <label htmlFor="text-fields-assignment-name" className="form-label">
                        Assignment Name
                    </label>
                    <input
                        id="text-fields-assignment-name"
                        value={assignment.title}
                        className="form-control"
                        onChange={(e) =>
                            setAssignment({...assignment, title: e.target.value})
                        }
                    />
                    <textarea name="assignment_description" className="form-control mt-4"
                              cols="20"
                              rows="4"
                              value={assignment.description}
                              onChange={(e) =>
                                  setAssignment({...assignment, description: e.target.value})
                              }
                    ></textarea>

                    <div className="row mt-4">
                        <div className="col-2 col-sm-4">
                            <label htmlFor="points-input" className="form-label float-end">
                                Points
                            </label>
                        </div>
                        <div className="col-4 col-sm-8 right-input">
                            <input id="points-input" className="form-control"
                                   value={assignment.points}
                                   onChange={(e) =>
                                       setAssignment({...assignment, points: e.target.value})
                                   }
                            />
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-auto col-sm-4">
                            <label htmlFor="assign-to" className="form-label float-end">
                                Assign
                            </label>
                        </div>
                        <div className="col-auto col-sm-8">
                            <div className="card right-input-card">
                                <div className="card-body card-assign-body">
                                    <label htmlFor="due-date" className="form-label">Due</label>
                                    <input type="date" value={assignment.due}
                                           name="due-date" id="due-date"
                                           className="form-control mb-2"
                                           onChange={(e) =>
                                               setAssignment({...assignment, due: e.target.value})
                                           }
                                    />

                                    <div className="row">
                                        <div className="col">
                                            <label htmlFor="available-date"
                                                   className="form-label">Available from</label>
                                            <input type="date" value={assignment.availableFromDate}
                                                   name="until-date" id="available-date"
                                                   className="form-control"
                                                   onChange={(e) =>
                                                       setAssignment({
                                                                         ...assignment,
                                                                         availableFromDate: e.target.value
                                                                     })
                                                   }
                                            />
                                        </div>
                                        <div className="col">
                                            <label htmlFor="until-date"
                                                   className="form-label">Until</label>
                                            <input type="date" value={assignment.availableUntilDate}
                                                   name="until-date" id="until-date"
                                                   className="form-control"
                                                   onChange={(e) =>
                                                       setAssignment({
                                                                         ...assignment,
                                                                         availableUntilDate: e.target.value
                                                                     })
                                                   }
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr/>

                    <div id="footer">
                        <div className="float-end mb-2">
                            <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                                  className="btn btn-secondary mt-2">
                                Cancel
                            </Link>

                            <Link to={`/Kanbas/Courses/${courseId}/Assignments`}>
                                <button
                                    onClick={() =>
                                        isNewAssignment
                                        ?
                                            handleAddAssignment()
                                        :
                                        handleUpdateAssignment()
                                    }
                                    className="btn btn-danger ms-2 mt-2"
                                >
                                    Save
                                </button>
                            </Link>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    );
}

export default AssignmentEditor;
