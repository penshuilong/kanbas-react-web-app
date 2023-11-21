import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    assignments: [],
    assignment: {
        title: "New Title",
        course: "New Course",
        points: 100,
        description: "New Description",
        availableFromDate: "New Available From Date",
        availableUntilDate: "New Available Until Date",
        due: "New Date"
    },
};

const assignmentsSlice = createSlice({
                                         name: "assignments",
                                         initialState,
                                         reducers: {
                                             addAssignment: (state, action) => {
                                                 state.assignments = [
                                                     {
                                                         ...action.payload,
                                                         _id: new Date().getTime().toString()
                                                     },
                                                     ...state.assignments,
                                                 ];
                                             },
                                             deleteAssignment: (state, action) => {
                                                 state.assignments = state.assignments.filter(
                                                     (assignment) => assignment._id
                                                                     !== action.payload
                                                 );
                                             },
                                             updateAssignment: (state, action) => {
                                                 state.assignments =
                                                     state.assignments.map((assignment) => {
                                                         console.log(action.payload._id);
                                                         if (assignment._id
                                                             === action.payload._id) {
                                                             return action.payload;
                                                         } else {
                                                             return assignment;
                                                         }
                                                     });
                                             },
                                             selectAssignment: (state, action) => {
                                                 state.assignment = action.payload;
                                             },
                                             setAssignment: (state, action) => {
                                                 state.assignments = action.payload;
                                             },
                                         },
                                     });

export const {
    addAssignment, deleteAssignment,
    updateAssignment, selectAssignment,
    setAssignment
} = assignmentsSlice.actions;
export default assignmentsSlice.reducer;