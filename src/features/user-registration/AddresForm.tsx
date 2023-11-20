// import Input from '../../shared/UI/Input';
// import NextBtn from '../../shared/UI/Buttons/NextBtn';
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
import { useForm } from '@mantine/form';
import { Link } from 'react-router-dom';

const AddressForm = () => {
  const form = useForm({
    initialValues: {
      city: '',
      street: '',
      house: '',
      apartment: '',
      stateOrRegion: '',
      ZIP: '',
    },
  });

  return (
    <>
      <Center>
        <Title order={2}>Address</Title>
      </Center>
      <Container size="52rem">
        <Paper radius="lg" p="xl" shadow="xl">
          <form onSubmit={form.onSubmit((values) => console.log(values))}>
            <Group gap="md" grow>
              <Stack>
                <TextInput
                  classNames={{
                    input: 'my-reg-input',
                  }}
                  label="Street"
                  placeholder="Your street"
                  {...form.getInputProps('street')}
                />
                <TextInput
                  label="House"
                  placeholder="Your house"
                  {...form.getInputProps('house')}
                />
                <TextInput
                  label="Apartment"
                  placeholder="Your apartment"
                  {...form.getInputProps('apartment')}
                />
                <Button variant="outline">Back</Button>
              </Stack>
              <Stack>
                <TextInput
                  label="City"
                  placeholder="Your city"
                  {...form.getInputProps('city')}
                />
                <TextInput
                  label="State"
                  placeholder="Your state"
                  {...form.getInputProps('stateOrRegion')}
                />
                <TextInput
                  label="ZIP"
                  placeholder="xxxxx"
                  {...form.getInputProps('ZIP')}
                />
                <Button
                  className="reg-btns"
                  type="submit"
                  // variant="gradient"
                  // gradient={{
                  //   from: 'violet.7',
                  //   to: 'violet.4',
                  //   deg: 180,
                  // }}
                >
                  Next
                </Button>
              </Stack>
            </Group>
          </form>
          <Group mt="sm" justify="flex-end">
            <Text size="sm">
              Back to{' '}
              <Link to="/login">
                <Anchor fw={600}>Log In</Anchor>
              </Link>
            </Text>
          </Group>
        </Paper>
      </Container>
    </>
  );
};

export default AddressForm;
