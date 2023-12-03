import axios from 'axios';

const URL = "https://kanbas-node-server-app-nosd.onrender.com/api/courses";

export const findAllCourses = async () => {
    const response = await axios.get(URL);
    return response.data;
};

export const addCourse = async (newCourse) => {
    const response = await axios.post(URL, newCourse);
    return response.data;
};

export const deleteCourse = async (course) => {
    const response = await axios.delete(
        `${URL}/${course}`
    );
    return response.data;
};

export const updateCourse = async (course) => {
    const response = await axios.put(
        `${URL}/${course._id}`,
        course
    );
    return response.data;
};