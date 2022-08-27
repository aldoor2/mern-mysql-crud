import { Box, Grid, Heading } from '@chakra-ui/react';
import { useEffect } from 'react';

import TaskCard from '../components/TaskCard';
import { useTasks } from '../context/TaskContext';

function TasksPage() {
  const { tasks, loadTasks } = useTasks();

  useEffect(() => {
    loadTasks();
  }, []);

  function renderMain() {
    if (tasks.length === 0)
      return (
        <Heading as={'h3'} size={'md'} textAlign={'center'} color={'gray.500'}>
          No tasks yet
        </Heading>
      );
    return tasks.map((task) => <TaskCard key={task.id} task={task} />);
  }

  return (
    <Box bg='gray.800' h='90vh' px={10} pt={6}>
      <Heading as='h2' textAlign={'center'} size='lg' mb={4}>
        Tasks
      </Heading>
      <Grid templateColumns='repeat(3, 1fr)' gap={6}>
        {renderMain()}
      </Grid>
    </Box>
  );
}

export default TasksPage;
