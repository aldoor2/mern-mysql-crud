import { deleteTaskRequest } from '../api/tasks.api';

function TaskCard({ task }) {
  const handleDelete = async (id) => {
    try {
      const response = await deleteTaskRequest(id);
      console.log(response);
    } catch (error) {
      console.error(error.message);
    }
  };

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
      <button onClick={() => handleDelete(task.id)}>
        <img
          src='https://icongr.am/fontawesome/trash-o.svg?size=16&color=currentColor'
          alt='delete'
        />{' '}
        Delete
      </button>
      <button>
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
