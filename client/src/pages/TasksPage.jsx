import { useEffect, useState } from 'react';
import { getTasksRequest } from '../api/tasks.api';
import TaskCard from '../components/TaskCard';

function TasksPage() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function loadTasks() {
      const response = await getTasksRequest();
      setTasks(response.data);
    }
    loadTasks();
  }, []);

  function renderMainContent() {
    if (tasks.length === 0) {
      return <h1>No tasks yet</h1>;
    }
    return tasks.map((task) => <TaskCard key={task.id} task={task} />);
  }

  return (
    <div>
      <h1>Tasks</h1>
      {renderMainContent()}
    </div>
  );
}

export default TasksPage;
