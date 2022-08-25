import { createContext, useContext, useState } from 'react';
import {
  getTasksRequest,
  deleteTaskRequest,
  createTaskRequest,
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

  return (
    <TaskContext.Provider value={{ tasks, loadTasks, deleteTask, createTask }}>
      {children}
    </TaskContext.Provider>
  );
};
