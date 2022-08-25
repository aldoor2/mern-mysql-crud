import { useState } from 'react';
import { useEffect } from 'react';
import { getTasksRequest } from '../api/tasks.api';
import TaskCard from '../components/TaskCard';

function TasksPage() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function loadTasks() {
      const response = await getTasksRequest();
      const { data: result } = response.data;
      setTasks(result);
    }
    loadTasks();
  }, []);

  return (
    <div>
      <h1>Tasks</h1>

      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TasksPage;
