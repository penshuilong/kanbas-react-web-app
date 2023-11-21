import React from 'react';
import Assignment3 from "./a3";
import Nav from "../Nav";
import Assignment4 from "./a4";
import Assignment5 from "./a5";
import {Route, Routes, Navigate} from "react-router";
import store from "./store";
import {Provider} from "react-redux";

function Labs() {
    return(
        <Provider store={store}>
            <div>              
                <Nav/>
                <Routes>
                <Route path="/"element={<Navigate to="a3"/>}/>
                    <Route path="/a3" element={<Assignment3/>}></Route>
                    <Route path="/a4" element={<Assignment4/>}></Route>
                    <Route path="/a5" element={<Assignment5/>}></Route>
                </Routes>
            </div>
        </Provider>

    );
}
export default Labs;