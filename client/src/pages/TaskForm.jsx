import { Form, Formik, Field } from 'formik';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Input,
  Button,
  Flex,
  Box,
  VStack,
  FormLabel,
  FormControl,
  Textarea,
  FormErrorMessage,
  Heading,
} from '@chakra-ui/react';
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
    <Flex bg='gray.800' align='center' justify='center' h='85vh'>
      <Box bg='black' p={6} rounded='md' w='24rem'>
        <Heading as='h2' size='lg' mb={4} textAlign='center'>
          {params.id ? 'Edit Task' : 'Create New Task'}
        </Heading>

        <Formik
          initialValues={task}
          enableReinitialize={true}
          onSubmit={async (values) => {
            if (values.title.length > 0) {
              if (params.id) {
                await updateTask(params.id, values);
              } else {
                await createTask(values);
              }

              navigate('/');
              setTask(INITIAL_STATE);
            }
          }}
        >
          {({
            handleChange,
            handleSubmit,
            values,
            isSubmitting,
            errors,
            touched,
          }) => (
            <Form onSubmit={handleSubmit}>
              <VStack spacing={4} align='flex-start'>
                <FormControl isInvalid={!!errors.title && touched.title}>
                  <FormLabel htmlFor='title'>Title *</FormLabel>
                  <Field
                    as={Input}
                    type='text'
                    name='title'
                    placeholder='Write a title'
                    onChange={handleChange}
                    value={values.title}
                    validate={(value) => {
                      let error;

                      if (value.length === 0) {
                        error = 'Please enter a title';
                      }

                      return error;
                    }}
                  />
                  <FormErrorMessage>{errors.title}</FormErrorMessage>
                </FormControl>

                <FormControl>
                  <FormLabel htmlFor='description'>Description</FormLabel>
                  <Field
                    as={Textarea}
                    name='description'
                    size='sm'
                    placeholder='Write a description'
                    onChange={handleChange}
                    value={values.description}
                  />
                </FormControl>

                <Button
                  type='submit'
                  disabled={isSubmitting}
                  colorScheme={!isSubmitting ? 'green' : 'gray'}
                  width='full'
                >
                  {isSubmitting ? 'Saving...' : 'Save'}
                </Button>
              </VStack>
            </Form>
          )}
        </Formik>
      </Box>
    </Flex>
  );
}

export default TaskForm;
