import { useEffect } from 'react';
import TaskCard from '../components/TaskCard';
import { useTasks } from '../context/TaskContext';

function TasksPage() {
  const { tasks, loadTasks } = useTasks();

  useEffect(() => {
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
