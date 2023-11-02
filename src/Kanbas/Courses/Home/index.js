import React from "react";
import ModuleList from "../Modules/ModuleList";
import "./index.css";
import {
    FaBell,
    FaCheck,
    FaFileImport,
    FaPlus
} from "react-icons/fa";
import "./index.css";
import {FaEllipsis} from "react-icons/fa6";


function Home() {
    return (
        <div className="row m-1 justify-content-between">
            <div className="col wd-main-content">
                <div className="d-flex wd-buttons-container justify-content-end">
                        <button type="button" className="btn wd-switch-buttons">Collapse
                            All
                        </button>
                        <button type="button" className="btn wd-switch-buttons">View Progress</button>

                        <div className="dropdown">
                            <button className="btn dropdown-toggle wd-switch-buttons" type="button"
                                    id="dropdownMenuButton1"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                <FaCheck/>Publish All
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButtojn1">
                            </ul>
                        </div>
                        <button type="button" className="btn btn-danger">
                            <FaPlus/>Module
                        </button>

                        <button type="button" className="btn btn-outline-dark wd-switch-buttons
                         wd-detail-btn">
                            <FaEllipsis/>
                        </button>
                </div>
                <hr/>
                <div>
                    <h2>Home</h2>
                    <ModuleList/>
                </div>

            </div>
            <div className="col-3 wd-status">
                <div className="row wd-status-bar-list">
                    <button type="button" className="btn">
                        <FaFileImport/> Existing Content</button>
                    <button type="button" className="btn">Import from Commons</button>
                    <button type="button" className="btn">Choose Home Page</button>
                    <button type="button" className="btn">View Course Stream</button>
                    <button type="button" className="btn">
                         New Acnnouncement</button>
                    <button type="button" className="btn">New Analytics</button>
                    <button type="button" className="btn">
                        <FaBell/> Course Notification</button>
                </div>
                <div className="wd-todo-list">
                    <h5>To Do</h5>
                    <hr/>
                    <ul className="wdListNoDot m-0 p-0">
                        <li>
                            <p className=" wdKanbasRed m-0">Grade A1 - ENV + HTML</p>
                            <p className=""><small>100 points Sep 18 at 11:59PM</small></p>
                        </li>
                        <li>
                            <p className=" wdKanbasRed m-0">Grade A2 - CSS + BOOTSTRAP</p>
                            <p className=""><small>100 points Oct 2 at 11:59PM</small></p>
                        </li>
                    </ul>

                </div>
            </div>

        </div>
    );
}
export default Home;