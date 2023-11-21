import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {
    addModule,
    deleteModule,
    updateModule,
    setModule,
    setModules,
} from "./modulesReducer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faCaretDown, faCaretRight,
    faCircleCheck, faEllipsisV,
    faGripVertical,
    faPlus
} from "@fortawesome/free-solid-svg-icons";
import "./ModuleList.css";
import * as client from "./client";

function ModuleList() {
    const {courseId} = useParams();
    const modules = useSelector((state) => state.modulesReducer.modules);
    const module = useSelector((state) => state.modulesReducer.module);
    const dispatch = useDispatch();

    useEffect(() => {
        client.findModulesForCourse(courseId)
            .then((modules) =>
                      dispatch(setModules(modules))
            );
    }, [courseId]);

    const handleAddModule = () => {
        client.createModule(courseId, module).then((module) => {
            dispatch(addModule(module));
        });
    };

    const handleDeleteModule = (moduleId) => {
        client.deleteModule(moduleId).then((status) => {
            dispatch(deleteModule(moduleId));
        });
    };

    const handleUpdateModule = async () => {
        const status = await client.updateModule(module);
        dispatch(updateModule(module));
    };

    return (
        <ul className="list-group">
            <li className="list-group-item">
                <button className="btn btn-success me-1 mb-2"
                        onClick={handleAddModule}>
                    Add
                </button>
                <button className="btn btn-primary me-1 mb-2"
                        onClick={handleUpdateModule}>
                    Update
                </button>
                <input className="me-1 mb-2"
                       value={module.name}
                       onChange={(e) =>
                           dispatch(setModule({...module, name: e.target.value}))
                       }/>
                <textarea className="me-1 mb-2"
                          value={module.description}
                          onChange={(e) =>
                              dispatch(setModule({...module, description: e.target.value}))
                          }/>
            </li>

            {modules.map((module, index) => (
                <li key={index} className="list-group-item list-group-item-secondary mb-4">
                    <div
                        className="d-flex align-items-center justify-content-between mt-2">
                        <div className="list-header-content d-flex align-items-center mb-2">
                            <FontAwesomeIcon className="me-2"
                                             icon={faGripVertical}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faCaretRight}></FontAwesomeIcon>
                            <h5 className="list-header m-0 ms-2">{module.name}</h5>
                        </div>
                        <div className="d-flex align-items-center">
                            <FontAwesomeIcon className="text-success me-2"
                                             icon={faCircleCheck}></FontAwesomeIcon>
                            <FontAwesomeIcon className="me-3" icon={faCaretDown}></FontAwesomeIcon>
                            <FontAwesomeIcon className="me-2" icon={faPlus}></FontAwesomeIcon>
                            <FontAwesomeIcon className="text-secondary"
                                             icon={faEllipsisV}></FontAwesomeIcon>
                        </div>
                    </div>
                    <p>{module.description}</p>
                    <button className="btn btn-primary me-1"
                            onClick={() => dispatch(setModule(module))}>
                        Edit
                    </button>
                    <button className="btn btn-danger"
                            onClick={() => handleDeleteModule(module._id)}>
                        Delete
                    </button>
                </li>
            ))
            }
        </ul>
    );
}

export default ModuleList;