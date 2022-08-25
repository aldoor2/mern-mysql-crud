import { useEffect } from 'react';

import TaskCard from '../components/TaskCard';
import { useTasks } from '../context/TaskContext';

function TasksPage() {
  const { tasks, loadTasks } = useTasks();

  useEffect(() => {
    loadTasks();
  }, []);

  function renderMain() {
    if (tasks.length === 0) return <h3>No tasks yet</h3>;
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
