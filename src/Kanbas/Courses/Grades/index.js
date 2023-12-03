import db from "../../Database";
import { useParams } from "react-router-dom";
import { FaFileImport, FaFileExport } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
import { BiSearchAlt2 } from "react-icons/bi";
import { TbFilter } from "react-icons/tb"
function Grades() {
    const { courseId } = useParams();
    const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
    const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);

    return (
        <div>
            <div className="d-flex justify-content-end">
                <button type="button" class="btn btn-light me-2">
                    <FaFileImport className="me-2" />Import</button>
                <button type="button" class="btn btn-light me-2">
                    <FaFileExport className="me-2" />Export</button>
                <button type="button" class="btn btn-light me-2">
                    <AiFillSetting /></button>
            </div>
            <div class="row">
                <div class="col-6">
                    <h6>Students Names</h6>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1"><BiSearchAlt2 /></span>
                        <select class="form-select" id="dropdownSelect">
                            <option value="option1">Search Students</option>
                            <option value="option2">Student 1</option>
                            <option value="option3">Student 2</option>
                        </select>
                    </div>
                </div>
                <div class="col-6">
                    <h6>Assignment Names</h6>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1"><BiSearchAlt2 /></span>
                        <select class="form-select" id="dropdownSelect">
                            <option value="option1">Search Assignments</option>
                            <option value="option2">Student 1</option>
                            <option value="option3">Student 2</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="row mb-3">
                <button type="button" className="btn btn-secondary" style={{ width: "20%" }}>
                    <TbFilter className="me-2" />Apply Filters</button>
            </div>
            <div className="table-responsive">
                <table className="table table-striped border">
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
                                        return (<td>{grade?.grade || ""}</td>);
                                    })}
                                </tr>);
                        })}
                    </tbody></table>
            </div></div>);
}
export default Grades;
