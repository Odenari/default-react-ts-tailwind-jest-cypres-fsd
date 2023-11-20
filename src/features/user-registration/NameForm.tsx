import {
  Text,
  Title,
  Group,
  Paper,
  TextInput,
  Button,
  Anchor,
  Container,
  Stack,
  Center,
} from '@mantine/core';
import { DateInput } from '@mantine/dates';
import { useForm } from '@mantine/form';
import { useState } from 'react';

const NameForm = () => {
  const [date, setDate] = useState<Date | null>(null);
  const form = useForm({
    initialValues: {
      firstName: '',
      lastName: '',
    },
  });

  return (
    <>
      <Center>
        <Title order={2}>Personal Data</Title>
      </Center>
      <Container size="52rem" mb="lg">
        <Center>
          <Paper miw="452px" radius="lg" p="xl" shadow="xl">
            <Center>
              <form
                onSubmit={form.onSubmit(() => {
                  console.log(form.values);
                  console.log(date);
                })}
              >
                <Stack>
                  <TextInput
                    // This allows us to connect form field with input value
                    {...form.getInputProps('firstName')}
                    maw="372px"
                    label="Name"
                    placeholder="Your name"
                  />
                  <TextInput
                    {...form.getInputProps('lastName')}
                    maw="372px"
                    label="Surname"
                    placeholder="Your surname"
                  />
                  <DateInput
                    value={date}
                    onChange={setDate}
                    maw="372px"
                    label="Date of birth"
                    placeholder="MM/DD/YYYY"
                  />
                  <Button type="submit">Next</Button>
                </Stack>
              </form>
            </Center>
          </Paper>
        </Center>
      </Container>
    </>
  );
};

export default NameForm;
