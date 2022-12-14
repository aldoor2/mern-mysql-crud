import { Routes, Route } from 'react-router-dom';
import { Box } from '@chakra-ui/react';

import NotFound from './pages/NotFound';
import TaskForm from './pages/TaskForm';
import TasksPage from './pages/TasksPage';

import Navbar from './components/Navbar';

import { TaskContextProvider } from './context/TaskContext';

function App() {
  return (
    <Box>
      <TaskContextProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<TasksPage />} />
          <Route path='/new' element={<TaskForm />} />
          <Route path='/edit/:id' element={<TaskForm />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </TaskContextProvider>
    </Box>
  );
}

export default App;
