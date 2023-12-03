import KanbasNavigation from "./KanbasNavigation";
import Account from "./Account";
import Courses from "./Courses";
import Dashboard from "./Dashboard";
import { Route, Routes, Navigate } from "react-router-dom";
import db from "./Database";
import { useEffect, useState } from "react";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";

import * as client from "./Courses/client";

function Kanbas() {
  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState({
    name: "New Course",
    number: "RS5610",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
  });


  // const updateCourse = (courseToUpdate) => {
  //   const newCourses = courses.map((course) => (course._id === courseToUpdate._id ? courseToUpdate : course));
  //   setCourses(newCourses);
  //   setNewCourse("");
  // };
  const URL = "http://localhost:4000/api/courses";
  const findAllCourses = async () => {
    const courses = await client.findAllCourses();
    setCourses(courses);
  };

  const addCourse = async () => {
    const course = await client.addCourse(newCourse);
    setCourses([course, ...courses]);
  };

  const deleteCourse = async (course) => {
    await client.deleteCourse(course);
    setCourses(courses.filter(
      (c) => c._id !== course));
  };

  const updateCourse = async (course) => {
    await client.updateCourse(course);
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        }
        return c;
      })
    );
    setNewCourse({ name: "" });
  };


  useEffect(() => {
    findAllCourses();
  }, []);


  return (
    <Provider store={store}>
    <div className="d-flex">
      <div style={{ background: "black" }} >
        <KanbasNavigation />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="/Account" element={<Account />} />
          <Route path="/Courses/:courseId/*" element={<Courses courses={courses} />} />
          <Route path="/Dashboard" element={<Dashboard
            courses={courses}
            newCourse={newCourse}
            setNewCourse={setNewCourse}
            addCourse={addCourse}
            deleteCourse={deleteCourse}
            updateCourse={updateCourse} />} />
        </Routes>
      </div>
    </div>
    </Provider>
  );
}
export default Kanbas;