import { Route, Routes } from 'react-router-dom';
import TasksPage from './pages/TasksPage';
import TasksForm from './pages/TasksForm';
import NotFound from './pages/NotFound';
import { TaskContextProvider } from './context/TaskContext';

import NavBar from './components/NavBar';
function App() {
  return (
    <TaskContextProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<TasksPage />} />
        <Route path="/new" element={<TasksForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TaskContextProvider>
  );
}

export default App;
