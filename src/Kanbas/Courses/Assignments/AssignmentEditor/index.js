import db from "../../../../Kanbas/Database";
import { Link, useNavigate, useParams } from "react-router-dom";
import { HiOutlineBars3 } from "react-icons/hi2";
import { BiGlassesAlt } from "react-icons/bi";
import { AiFillCheckCircle } from "react-icons/ai";
import { HiOutlineEllipsisVertical } from "react-icons/hi2";
import CourseNavigation from "../../CourseNavigation";
import AssignmentList from "../AssignmentList";
import "../../index.css";
import "../index.css";

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId);
  const { courseId } = useParams();
  const course = db.courses.find((course) => course._id === courseId);
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div className="courses">
      <div className="row mt-3 ms-0">
        <HiOutlineBars3 className="text icon ms-3 col-1" size="35"/>
        <nav aria-label="breadcrumb" className="mb-0 col-9">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="breadcrumb-link">
                {course.number}.{course._id}
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              <Link key={course._id} to={`/Kanbas/Courses/${course._id}/Assignments`} className="breadcrumb-link ">
                Assignments
              </Link>
            </li> 
            <li class="breadcrumb-item active" aria-current="page">{assignment.title}</li> 
          </ol>
        </nav>
        <a class="btn mb-1 student-view">
              <BiGlassesAlt className="text me-1"/>
                Student View</a>
      </div>
      <hr className="mt-2 ms-4"/>
      <div className="row mt-4 ms-1">
        <CourseNavigation className="col-3"/>
        <div className="col">
          <div className="edit-content ms-2">
            <div className="row ms-0">
                <a className="pt-2 publish-status published">
                    <AiFillCheckCircle className="text me-2" size="20"/>
                    Published</a>
                <a className="btn ms-1 vertical-ellipsis ps-1">
                  <HiOutlineEllipsisVertical className="text" size="20"/></a>
            </div>
            <hr/>
            Assignment Name:
            <input value={assignment.title}
             className="form-control mb-2"/>
            <textarea class="form-control mt-4" placeholder="Insert description"></textarea>
            <div class="row mt-4">
              <div class="col-3 pe-0">
                <label for="assignment-points" class="me-2 float-end">Points</label>
              </div>
              <div class="col">
                <input type="text" class="form-control edit-input" id="assignment-points" value="100"/>
              </div>
            </div>
            <div class="row mt-4">
              <div class="col-3 pe-0">
                <label for="assignment-group" class="me-2 float-end">Assignment Group</label>
              </div>
              <div class="col">
                <select id="assignment-group" class="form-select edit-input">
                  <option selected value="ASSIGNMENTS">ASSIGNMENTS</option>
                </select>
              </div>
            </div>
            <div class="row mt-4">
              <div class="col-3 pe-0">
                <label for="display-grade" class="me-2 float-end">Display Grade as</label>
              </div>
              <div class="col">
                <select id="display-grade" class="form-select edit-input">
                  <option selected value="PERCENTAGE">Percentage</option>
                </select>
                <div class="mt-4">
                  <input class="form-check-input" type="checkbox" id="count-grade"/>
                  <label class="form-check-label ms-2" for="count-grade">Do not count this assignment towards the final grade</label>
                </div>
              </div>
            </div>
            {/* <div class="row mt-4">
              <div class="col-3 pe-0">
                <label for="submission-type" class="me-2 float-end">Submission Type</label>
              </div>
              <div class="col">
                <div class="card edit-input" id="submission-type">
                  <div class="card-body">
                    <select class="form-select edit-input">
                      <option selected value="ONLINE">Online</option>
                    </select>
                    <h6 class="mt-4 font-bold">Online Entry Options</h6>
                    <div class="mt-3">
                      <input class="form-check-input" type="checkbox" value="TEXT" id="chkbox-text" checked/>
                      <label class="form-check-label ms-2" for="chkbox-text">Text Entry</label>
                    </div>
                    <div class="mt-3">
                      <input class="form-check-input" type="checkbox" value="URL" id="chkbox-url" checked/>
                      <label class="form-check-label ms-2" for="chkbox-url">Website URL</label>
                    </div>
                    <div class="mt-3">
                      <input class="form-check-input" type="checkbox" value="RECORDING" id="chkbox-recording" checked/>
                      <label class="form-check-label ms-2" for="chkbox-recording">Media Recordings</label>
                    </div>
                    <div class="mt-3">
                      <input class="form-check-input" type="checkbox" value="ANNOTATION" id="chkbox-annotation"/>
                        <label class="form-check-label ms-2" for="chkbox-annotation">Student Annotation</label>
                    </div>
                    <div class="mt-3">
                      <input class="form-check-input" type="checkbox" value="FILE" id="chkbox-file"/>
                      <label class="form-check-label ms-2" for="chkbox-file">File Uploads</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row mt-4">
              <div class="col-3 pe-0">
                <label for="assign" class="me-2 float-end">Assign</label>
              </div>
              <div class="col">
                <div class="card edit-input" id="assign">
                  <div class="card-body">
                    <h6 class="font-bold">Assign to</h6>
                    <select class="form-select">
                      <option selected value="EVERYONE">Everyone</option>
                    </select>
                    <h6 class="mt-4 font-bold">Due</h6>
                      <input type="date" class="form-control" value="2023-09-18" id="date-due"/>
                      <div class="row">
                        <div class="col">
                          <h6 class="mt-4 font-bold">Available from</h6>
                        </div>
                        <div class="col">
                          <h6 class="mt-4 font-bold">Until</h6>
                        </div>
                      </div>
                      <div class="row">
                          <div class="col-6 pe-1">
                            <input type="date" class="form-control" value="2023-09-06" id="date-available-from"/>
                          </div>
                          <div class="col-6 ps-1">
                            <input type="date" class="form-control" id="date-available-until"/>
                          </div>
                        </div>
                      </div>
                      <a href="#" class="btn card-body">
                        <i class="fa-solid fa-plus me-2"></i>
                          Add
                      </a>
                    </div>
                  </div>
                </div> */}
            <hr/>
            <button onClick={handleSave} className="btn btn-danger ms-2 float-right">
              Save
            </button>
            <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
              className="btn btn-danger cancel-button  float-right">
              Cancel
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AssignmentEditor;