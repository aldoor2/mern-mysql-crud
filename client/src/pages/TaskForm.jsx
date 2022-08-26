import { Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTasks } from '../context/TaskContext';

const INITIAL_STATE = {
  title: '',
  description: '',
};

function TaskForm() {
  const { createTask, getTask, updateTask } = useTasks();
  const [task, setTask] = useState(INITIAL_STATE);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadTask = async () => {
      if (params.id) {
        const task = await getTask(params.id);
        setTask({
          title: task.title,
          description: task.description,
        });
      }
    };
    loadTask();
  }, []);

  return (
    <div>
      <h2>{params.id ? 'Edit Task' : 'Create Task'}</h2>

      <Formik
        initialValues={task}
        enableReinitialize={true}
        onSubmit={async (values) => {
          if (params.id) {
            await updateTask(params.id, values);
            navigate('/');
          } else {
            await createTask(values);
          }

          setTask(INITIAL_STATE);
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <label htmlFor='title'>Title</label>
            <input
              type='text'
              name='title'
              placeholder='Write a title'
              onChange={handleChange}
              value={values.title}
            />

            <label htmlFor='description'>Description</label>
            <textarea
              name='description'
              rows='3'
              placeholder='Write a description'
              onChange={handleChange}
              value={values.description}
            ></textarea>

            <button type='submit' disabled={isSubmitting}>
              {isSubmitting ? 'Saving...' : 'Save'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default TaskForm;
