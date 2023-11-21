import React, {useState,  useEffect} from 'react';
import {HashRouter, Link} from "react-router-dom";
import KanbasNavigation from "./KanbasNavigation";
import Dashboard from "./Dashboard";
import {Navigate, Route, Routes} from "react-router";
import HelloWorld from "../Labs/a3/HelloWorld";
import Labs from "../Labs";
import './kanbas-styles.css';
import Courses from "./Courses";
import db from "./Database";
import {Provider} from "react-redux";
import store from "./store";
import AssignmentEditor from "./Courses/Assignments/AssignmentEditor";
import axios from "axios";




function Kanbas() {
    const [courses, setCourses] = useState(db.courses);
    const [course, setCourse] = useState({
                                             name: "New Course",      number: "New Number",
                                             startDate: "2023-09-10", endDate: "2023-12-15",
                                         });

    const API_BASE = process.env.REACT_APP_API_BASE;
    const URL = `${API_BASE}/courses`;
    
    const findAllCourses = async () => {
        const response = await axios.get(URL);
        setCourses(response.data);
    };
    useEffect(() => {
        findAllCourses();
    }, []);

    const addNewCourse = async () => {
        const response = await axios.post(URL, course);
        setCourses([
                       ...courses,
                       response.data,
                   ]);
        setCourse({
                      name: "New Course",
                      number: "New Number",
                      startDate: "2023-09-10",
                      endDate: "2023-12-15",
                  });
    };

    const deleteCourse = async (courseId) => {
        const response = await axios.delete(
            `${URL}/${courseId}`
        );
        setCourses(courses.filter((course) => course._id !== courseId));
    };
    const updateCourse = async () => {
        const response = await axios.put(
            `${URL}/${course._id}`,
            course
        );
        setCourses(
            courses.map((c) => {
                if (c._id === course._id) {
                    return course;
                }
                return c;
            })
        );
    };

    return(
        <Provider store={store}>
            <div className="d-flex">
                <KanbasNavigation/>

                <div className="wd-main-content-wrapper">
                    <Routes>
                        <Route path="/" element={<Navigate to="Dashboard" />} />
                        <Route path="Account" element={<h1>Account</h1>} />
                        <Route path="Dashboard" element={            <Dashboard
                            courses={courses}
                            course={course}
                            setCourse={setCourse}
                            addNewCourse={addNewCourse}
                            deleteCourse={deleteCourse}
                            updateCourse={updateCourse}/>} />
                        <Route path="Courses/:courseId/*" element={<Courses courses={courses}/>} />

                    </Routes>
                </div>
            </div>
        </Provider>


    );
}
export default Kanbas;