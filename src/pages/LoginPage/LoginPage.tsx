import { useToggle, upperFirst } from '@mantine/hooks';
import { useForm } from '@mantine/form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // make sure to install react-router-dom if using this
import axios from 'axios';
import { useAppDispatch } from '../../hookt';
import { setUser } from '../../slices/userSlice';
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  PaperProps,
  Button,
  Divider,
  Checkbox,
  Anchor,
  Stack,
} from '@mantine/core';
import { GoogleButton } from './GoogleButton';
import { GithubButton } from './GithubButton';
import classes from './LoginPage.module.css';
import { useAppSelector } from '../../hookt';
export default function LoginPage(props: PaperProps) {

  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();


  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:8090/user/login", {
        emailAddress,
        password
      });
      // Assuming the server sends back a token and user info when login is successful
      alert("Login successful!");
      const response1 = await axios.get("http://localhost:8090/user/get/" + response.data);
      dispatch(setUser(response1.data));


      navigate("/"); // Navigate to a protected route or home page after login
    } catch (error: any) {
      if (error.response && error.response.data) {
        // Server response with error details, handle accordingly
        alert("Login failed!");
        setErrorMessages(error.response.data); // Assuming error details are sent as a string
      } else {
        // Something happened in setting up the request that triggered an Error
        alert("Error logging in!");
        console.error('Login error:', error);
      }
    }
  };




  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessages, setErrorMessages] = useState([]);
  const navigate = useNavigate();


  const [type, toggle] = useToggle(['login', 'register']);
  const form = useForm({
    initialValues: {
      email: '',
      name: '',
      password: '',
      terms: true,
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
      password: (val) => (val.length <= 6 ? 'Password should include at least 6 characters' : null),
    },
  });

  return (
    <Paper className={classes.container} radius="md" p="xl" withBorder {...props}>
      <Text size="lg" fw={500}>
        Welcome to YoungTalent, {type} with
      </Text>

      <Group grow mb="md" mt="md">
        <GoogleButton radius="xl">Google</GoogleButton>
        <GithubButton radius="xl">GitHub</GithubButton>
      </Group>

      <Divider label="Or continue with email" labelPosition="center" my="lg" />

      <form onSubmit={(e) => {
        e.preventDefault();
        handleLogin();
      }}>
        <Stack>


          <TextInput
            required
            label="Email"
            placeholder="mail@e-uvt.ro"
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
            error={form.errors.email && 'Invalid email'}
            radius="md"
          />

          <PasswordInput
            required
            label="Password"
            placeholder="Your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={form.errors.password && 'Password should include at least 6 characters'}
            radius="md"
          />


        </Stack>

        <Group justify="space-between" mt="xl">
          <Anchor component="button" type="button" c="dimmed" onClick={() => toggle()} size="xs">
            {type === 'register'
              ? 'Already have an account? Login'
              : "Don't have an account? Register"}
          </Anchor>
          <Button type="submit" radius="xl">
            {upperFirst(type)}
          </Button>
        </Group>
      </form>
    </Paper>
  );
}