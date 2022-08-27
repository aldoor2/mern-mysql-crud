import { DeleteIcon, EditIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Box, Button, Heading, HStack, Stack, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useTasks } from '../context/TaskContext';

function TaskCard({ task }) {
  const { deleteTask, toggleTaskDone } = useTasks();
  const navigate = useNavigate();

  const handleDone = async () => {
    try {
      await toggleTaskDone(task.id);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <Stack
        w={{ sm: '100%', md: '350px' }}
        bg='gray.900'
        boxShadow={'2xl'}
        padding={4}
        rounded={'lg'}
      >
        <Stack
          flex={1}
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
          p={1}
          pt={2}
        >
          <HStack justifyContent='space-between' p={2}>
            <Heading as={'h2'} fontSize={'2xl'} textAlign='center'>
              {task.title}
            </Heading>
            <Box color={task.done ? 'green.400' : 'gray.500'}>
              {task.done ? (
                <ViewIcon w={6} h={6} />
              ) : (
                <ViewOffIcon w={6} h={6} />
              )}
            </Box>
          </HStack>
          <Text fontWeight={600} color={'gray.500'} size='sm' mb={4}>
            {task.createdAt}
          </Text>
          <Text textAlign={'center'} color='gray.400' px={3}>
            {task.description}
          </Text>

          <Stack
            width={'100%'}
            mt={'24rem'}
            direction={'row'}
            padding={2}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <Button
              flex={1}
              fontSize={'sm'}
              leftIcon={<DeleteIcon />}
              rounded={'full'}
              variant={'outline'}
              colorScheme={'blue'}
              _hover={{
                bg: 'red.500',
                color: 'white',
                borderColor: 'transparent',
              }}
              onClick={() => deleteTask(task.id)}
            >
              Delete
            </Button>

            <Button
              flex={1}
              fontSize={'sm'}
              leftIcon={<EditIcon />}
              rounded={'full'}
              variant={'outline'}
              colorScheme={'blue'}
              _hover={{
                bg: 'blue.500',
                color: 'white',
                borderColor: 'transparent',
              }}
              onClick={() => navigate(`/edit/${task.id}`)}
            >
              Edit
            </Button>

            <Button
              flex={1}
              fontSize={'sm'}
              leftIcon={task.done ? <ViewOffIcon /> : <ViewIcon />}
              rounded={'full'}
              variant={'outline'}
              colorScheme={'blue'}
              _hover={{
                bg: 'blue.500',
                color: 'white',
                borderColor: 'transparent',
              }}
              onClick={() => handleDone()}
            >
              {task.done ? 'Undone' : 'Done'}
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}

export default TaskCard;
