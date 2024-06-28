import { ADDTASK, DELETETASK, EDITTASK, GETTASKS } from "../actionTypes";

const initialState = JSON.parse(localStorage.getItem('tasks')) || [];

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDTASK: 
            {
                const updatedTasksList = [...state, action.payload];
                localStorage.setItem('tasks', JSON.stringify(updatedTasksList));
                return updatedTasksList;
            }
        case GETTASKS:
            {
                const tasksLists = JSON.parse(localStorage.getItem('tasks')) || [];
                return tasksLists;
            }
        case DELETETASK:
            {
                const updatedTasksList = state.filter(task => task.id !== action.payload);
                localStorage.setItem('tasks', JSON.stringify(updatedTasksList));
                return updatedTasksList;
            }
        case EDITTASK:
            {
                const editedList = state.map(task => task == action.payload ? 
                    action.payload : task
                )
                localStorage.setItem('tasks', JSON.stringify(editedList));
                return editedList;
            }
        default:
            return state;  
    }
}

export default reducer;