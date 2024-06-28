import { ADDTASK, DELETETASK, EDITTASK, GETTASKS } from "./actionTypes";

export const getTasks = () => ({
    type: GETTASKS
})

export const addTask = (newTask) => ({
    type: ADDTASK,
    payload: newTask
})

export const editTask = (task) => ({
    type: EDITTASK,
    isEditing: true,
    payload: task
})

export const deleteTask = (id) => ({
    type: DELETETASK,
    payload: id
})