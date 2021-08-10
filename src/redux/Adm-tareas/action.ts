import {
    GET_TASKS,
    SET_TASKS,
    ADD_TASKS,
    REORDER,
    DELETE_TASK,
    
  } from '../actions';
  
  export const getTasks = () => {
    return {
      type: GET_TASKS,
    };
  };
  
  export const setTasks = (payload: any) => {
    return {
      type: SET_TASKS,
      payload,
    };
  };
  
  export const addTasks = (payload: any) => {  
    return {
      type: ADD_TASKS,
      payload,
    };
  };

  export const reOrder = (source: any, destination:any, draggableId:any) => {
    return { 
      type: REORDER,
      payload : {source, destination, draggableId}
    };
  };

  export const deleteTask = (payload: any) => {
    return { 
      type: DELETE_TASK,
      payload,
    };
  };
 
 