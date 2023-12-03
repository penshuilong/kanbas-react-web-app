import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    message: "Hello World (this is the redux initial state message)",
};
const helloSlice = createSlice({
                                   name: "hello",
                                   initialState,
                                   reducers: {},
                               });
export default helloSlice.reducer;
