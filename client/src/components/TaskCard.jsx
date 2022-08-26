import { useNavigate } from 'react-router-dom';
import { useTasks } from '../context/TaskContext';

function TaskCard({ task }) {
  const { deleteTask } = useTasks();
  const navigate = useNavigate();

  return (
    <div>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <span>
        {task.done ? (
          <img
            src='https://icongr.am/fontawesome/check-square-o.svg?size=24&color=currentColor'
            alt='done'
          />
        ) : (
          <img
            src='https://icongr.am/fontawesome/square-o.svg?size=24&color=currentColor'
            alt='undone'
          />
        )}
      </span>
      <span>{task.createdAt}</span>
      <button onClick={() => deleteTask(task.id)}>
        <img
          src='https://icongr.am/fontawesome/trash-o.svg?size=16&color=currentColor'
          alt='delete'
        />{' '}
        Delete
      </button>
      <button onClick={() => navigate(`/edit/${task.id}`)}>
        <img
          src='https://icongr.am/fontawesome/edit.svg?size=16&color=color=currentColor'
          alt='delete'
        />{' '}
        Edit
      </button>
    </div>
  );
}

export default TaskCard;
