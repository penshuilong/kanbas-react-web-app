import db from "../../Database";
import {createSlice} from "@reduxjs/toolkit";
import assignments from "./index";
function emptyAssignment() {
    return ({
        _id: new Date().getTime().toString(),
        course: "Unknown",
        title: "New Title",
        dueDate: "2023-10-28",
        points: 100,
        availableFromDate: "2000-01-01",
        availableUntilDate: "2100-01-01",
        description: "No description yet for now",
    })
}



const initialState = {
    assignments:db.assignments,
    newAssignment:emptyAssignment(),
};

const assignmentSlice = createSlice(
    {
        name:"assignments",
        initialState,
        reducers:{
            emptyNewAssignment:(state)=>{
                state.newAssignment = emptyAssignment();
            },
            addAssignment:(state, action)=>{
                state.assignments = [...state.assignments, state.newAssignment];
                state.newAssignment = emptyAssignment();
            },
            deleteAssignment:(state, action)=>{
                state.assignments = state.assignments.filter((a)=> a._id !== action.payload);
            },
            updateAssignment: (state, action) => {
                const updatedAssignmentIndex = state.assignments.findIndex(
                    (a) => a._id === action.payload._id
                );

                if (updatedAssignmentIndex !== -1) {
                    state.assignments[updatedAssignmentIndex] = action.payload;
                }
            },
            setNewAssignment:(state, action)=>{
                state.newAssignment = action.payload;
            },


        }
    }
);

export const{emptyNewAssignment, setNewAssignment, addAssignment, deleteAssignment,updateAssignment} = assignmentSlice.actions;
export default assignmentSlice.reducer;