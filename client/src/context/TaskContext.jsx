import { createContext, useContext, useState } from 'react';
import {
  getTasksRequest,
  deleteTaskRequest,
  createTaskRequest,
  getTaskRequest,
  updateTaskRequest,
} from '../api/tasks.api';

export const TaskContext = createContext();

export const useTasks = () => {
  const context = useContext(TaskContext);

  if (!context)
    throw new Error('The hook useTasks must be used within a TaskContext');

  return context;
};

export const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    const response = await getTasksRequest();
    const { data: result } = response.data;
    setTasks(result);
  };

  const deleteTask = async (id) => {
    try {
      const response = await deleteTaskRequest(id);
      if (response.status === 204)
        setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      console.error(error.message);
    }
  };

  const createTask = async (task) => {
    try {
      await createTaskRequest(task);
    } catch (error) {
      console.error(error);
    }
  };

  const getTask = async (id) => {
    try {
      const response = await getTaskRequest(id);
      const { data: result } = response.data;
      return result;
    } catch (error) {
      console.error(error.message);
    }
  };

  const updateTask = async (id, updatedFields) => {
    try {
      const response = await updateTaskRequest(id, updatedFields);
      console.log(response);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <TaskContext.Provider
      value={{ tasks, loadTasks, deleteTask, createTask, getTask, updateTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};
