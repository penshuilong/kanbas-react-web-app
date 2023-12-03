import { React, useState } from "react";
import { Link } from "react-router-dom";
import db from "../Database";
import { addTodo, setTodo } from "../../Labs/a4/ReduxExamples/todos/todosReducer";
import { add } from "../../Labs/a4/ReduxExamples/AddRedux/addReducer";
function Dashboard({ courses, newCourse, setNewCourse, addCourse,
    deleteCourse, updateCourse }
  ) {


    return (
        <div>
            <h1>Dashboard</h1>
            <div className="list-group">

                <li className="list-group-item">
                    <button onClick={() => addCourse(newCourse)} className="btn btn-success float-end">Add</button>
                    <button onClick={() => updateCourse(newCourse)} className="btn btn-warning float-end" style={{ marginRight: "10px" }}>
                        Update </button>
                    <input
                        value={newCourse.name}
                        onChange={(e) =>
                            setNewCourse({
                                ...newCourse,
                                name: e.target.value
                            }
                            )
                            
                        }
                    />
                </li>

                {courses.map((course) => (
                    <div key={course._id} className="list-group-item" style={{ width: "500px" }}>
                        <Link to={`/Kanbas/Courses/${course._id}`}>
                        <span style={{textDecorationLine: 'none', color: 'black' }}>{course.name}</span>
                        </Link>
                        <button onClick={() => deleteCourse(course._id)} className="btn btn-danger float-end me-2">Delete</button>
                        <button onClick={() => setNewCourse(course)} className="btn btn-primary float-end" style={{ marginRight: "10px" }}>Edit</button>
                    </div>
                ))}

            </div>
        </div>
    );
}


export default Dashboard;





// import { React, useState } from "react";
// import db from "../Database";
// import { Link } from "react-router-dom";
// function Dashboard({
//   courses,
//   course,
//   setCourse,
//   addNewCourse,
//   deleteCourse,
//   updateCourse,
// }) {
//   return (
//     <div>
//       <h1>Dashboard</h1>
//       <h5>Course</h5>
//       <input
//         value={course.name}
//         className="form-control"
//         onChange={(e) => setCourse({ ...course, name: e.target.value })}
//       />
//       <input
//         value={course.number}
//         className="form-control"
//         onChange={(e) => setCourse({ ...course, number: e.target.value })}
//       />
//       <input
//         value={course.startDate}
//         className="form-control"
//         type="date"
//         onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
//       />
//       <input
//         value={course.endDate}
//         className="form-control"
//         type="date"
//         onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
//       />
//       <button onClick={updateCourse}>Update</button>

//       <button onClick={addNewCourse}>Add</button>
//       <hr />
//       <h2>Published Courses ({courses.length})</h2>
//       <div class="row row-cols-1 row-cols-md-3 g-4">
//         <div className="col">
//           {courses.map((course, index) => (
//             <div class="card">
//               <img src="/images/react.png" class="card-img-top" alt="..." />
//               <div class="card-body">
//                 <button
//                   onClick={(event) => {
//                     event.preventDefault();
//                     setCourse(course);
//                   }}
//                 >
//                   Edit
//                 </button>
//                 <button
//                   onClick={(event) => {
//                     event.preventDefault();
//                     deleteCourse(course._id);
//                   }}
//                 >
//                   Delete
//                 </button>

//                 <h5 class="card-title">{course.name}</h5>

//                 <Link
//                   key={course._id}
//                   to={`/Kanbas/Courses/${course._id}`}
//                   className="btn btn-primary"
//                 >
//                   {course.name}
//                 </Link>
//                 <p class="card-text">
//                   This is a longer card with supporting text below as a natural
//                   lead-in to additional content. This content is a little bit
//                   longer.
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;