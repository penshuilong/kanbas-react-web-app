import React from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import "./index.css";
import "../../kanbas-styles.css";


function CourseNavigation() {
    const links = ["Home", "Modules", "Piazza", "Zoom Meetings", "Assignments",
                   "Quizzes", "Grades", "People", "Panopto Video", "Discussions", "Announcements",
    "Pages", "Files", "Rubrics", "Outcomes", "Collaborations", "Syllabus", "Settings"];
    const { courseId } = useParams();
    const { pathname } = useLocation();
    return (
        <div className="list-group" style={{ width: 155 }}>
            {links.map((link, index) => (
                <Link
                    key={index}
                    to={`/Kanbas/Courses/${link}/${courseId}`}
                    className={`list-group-item wd-expanded-nav
                    ${pathname.includes(link) && "active"}`}>
                    {link}
                </Link>
            ))}
        </div>
    );
}


export default CourseNavigation;