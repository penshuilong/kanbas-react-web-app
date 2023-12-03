import db from "../../Kanbas/Database";
import { useParams, Route, Routes, Navigate, useLocation} from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import {FaBars} from 'react-icons/fa';
import "./index1.css"
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import { useState, useEffect } from "react";
import axios from "axios";


function Courses() {
    // const { courseId } = useParams();
    // const course = courses.find((course) => course._id === courseId);
    const { pathname } = useLocation();
    const lastPart = pathname.split('/').pop();

    const { courseId } = useParams();
    const URL = "https://kanbas-node-server-app-amul.onrender.com/api/courses";
    const [course, setCourse] = useState({});
    const findCourseById = async (courseId) => {
      const response = await axios.get(
        `${URL}/${courseId}`
      );
      setCourse(response.data);
    };
    useEffect(() => {
      findCourseById(courseId);
    }, [courseId]);
  
    return (
        <div>
            <div className="row">
                <nav className="breadcrumb" class="d-none d-sm-block"> 
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item text-danger"><FaBars className="mx-2"/> {course.name}.{course.number}</li>
                        <li className="breadcrumb-item active" aria-current="page">{lastPart}</li>
                    </ol>
                </nav>
            </div>
            <CourseNavigation /> 
            <div>
                <div
                    className="overflow-y-scroll position-fixed bottom-0 end-0"
                    style={{
                        left: "320px",
                        top: "50px",
                    }}
                >
                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<Home />} />
                        <Route path="Modules" element={<Modules/>} />
                        <Route path="Assignments" element={<Assignments/>} />
                        <Route
                            path="Assignments/:assignmentId"
                            element={<AssignmentEditor/>}/>
                        <Route path="Grades" element={<Grades />} />
                    </Routes>
                </div>
            </div>

        </div>
    );
}
export default Courses;