function TaskCard({ task }) {
  return (
    <div>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <span>
        {task.done ? (
          <img
            src='https://icongr.am/fontawesome/check-square-o.svg?size=24&color=0fe600'
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
      <button>
        <img
          src='https://icongr.am/fontawesome/trash-o.svg?size=16&color=ed072a'
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
