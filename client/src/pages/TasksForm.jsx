import { Form, Formik } from 'formik';
import { useTasks } from '../context/TaskContext';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function TasksForm() {
  const { createTask, getTask, updateTask } = useTasks();
  const [task, setTask] = useState({
    title: '',
    description: '',
  });

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
      <h1>{params.id ? 'Edit Task' : 'New Task'}</h1>
      <Formik
        initialValues={task}
        enableReinitialize={true}
        onSubmit={async (values) => {
          if (params.id) {
            await updateTask(params.id, values);
          } else {
            await createTask(values);
          }
          navigate('/');
          setTask({
            title: '',
            description: '',
          });
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <label>Title</label>
            <input
              type="text"
              name="title"
              placeholder="Write a title"
              onChange={handleChange}
              value={values.title}
            />

            <label>Description</label>
            <textarea
              name="description"
              rows="3"
              placeholder="Write a description"
              onChange={handleChange}
              value={values.description}
            ></textarea>

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Saving...' : 'Save'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default TasksForm;
