import React, { useEffect, useState } from "react";
import axios from "axios";

function EncodingParametersInURLs() {
  const [a, setA] = useState(34);
  const [b, setB] = useState(23);
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  })
  return (
    <div>
      <h3>Encoding Parameters In URLs</h3>
      <h4>Assignment</h4>
      <a href={`http://localhost:4000/a5/assignment/${assignment.id}`} className="btn btn-primary">
        Get Assignment
      </a>
      <br/>
      <h4>Calculator</h4>
      <input
        onChange={(e) => setA(e.target.value)}
        className="form-control" type="number" value={a}/>
      <input
        onChange={(e) => setB(e.target.value)}
        className="form-control" type="number" value={b}/>
      <h3>Query Parameters</h3>
      <a
        href={`http://localhost:4000/a5/calculator?a=${a}&b=${b}&operation=add`}
        className="btn btn-primary">
        Add {a} + {b}
      </a>
      <a
        href={`http://localhost:4000/a5/calculator?a=${a}&b=${b}&operation=subtract`}
        className="btn btn-danger">
        Substract {a} - {b}
      </a>
      <h3>Path Parameters</h3>
      <a
        href={`http://localhost:4000/a5/add/${a}/${b}`}
        className="btn btn-primary">
        Add {a} + {b}
      </a>
      <a
        href={`http://localhost:4000/a5/subtract/${a}/${b}`}
        className="btn btn-danger">
        Substract {a} - {b}
      </a>
    </div>
  );
}
export default EncodingParametersInURLs;