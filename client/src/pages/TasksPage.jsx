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

  function renderMain() {
    if (tasks.length === 0) return <span>No tasks yet</span>;
    return tasks.map((task) => <TaskCard key={task.id} task={task} />);
  }

  return (
    <div>
      <h1>Tasks</h1>
      {renderMain()}
    </div>
  );
}

export default TasksPage;
