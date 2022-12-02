import { Route, Routes } from 'react-router-dom';
import TasksPage from './pages/TasksPage';
import TasksForm from './pages/TasksForm';
import NotFound from './pages/NotFound';
import { TaskContextProvider } from './context/TaskContext';

import NavBar from './components/NavBar';
function App() {
  return (
    <div className="bg-zinc-900 h-screen">
      <NavBar />
      <div className="container mx-auto py-4 px-20">
        <TaskContextProvider>
          <Routes>
            <Route path="/" element={<TasksPage />} />
            <Route path="/new" element={<TasksForm />} />
            <Route path="/edit/:id" element={<TasksForm />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </TaskContextProvider>
      </div>
    </div>
  );
}

export default App;
