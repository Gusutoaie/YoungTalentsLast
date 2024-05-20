import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Container,
  Group,
  Button,
} from '@mantine/core';
import { loginUser } from '../../utils/loginUser'; // Import the login utility function
import classes from './Login.module.css';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = async () => {
    try {
      const userData = { emailAddress: email, password };
      const response = await loginUser(userData);
      alert('Login successful');
      console.log(response);
      navigate('/dashboard'); // Redirect to the dashboard or desired route after successful login
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Failed to log in');
    }
  };

  return (
    <div>
      <div className={classes.title}>
        <h3>Login</h3>
      </div>
      
      <div className={classes.container}>
        <Container className={classes.loginForm}>
          <Title ta="center" className={classes.title}>
            Welcome back!
          </Title>
        
          <Paper withBorder shadow="md" p={30} mt={30} radius="md">
            <TextInput
              label="Email"
              placeholder=""
              required
              value={email}
              onChange={(event) => setEmail(event.currentTarget.value)}
            />
            <PasswordInput
              label="Password"
              placeholder=""
              required
              mt="md"
              value={password}
              onChange={(event) => setPassword(event.currentTarget.value)}
            />
            <Group justify="space-between" mt="lg">
              <Checkbox
                label="Remember me"
                checked={rememberMe}
                onChange={(event) => setRememberMe(event.currentTarget.checked)}
              />
              <Anchor component="button" size="sm">
                Parolă uitată?
              </Anchor>
            </Group>
            <Group justify="space-between" mt="lg">
              <Button className={classes.intraInCont} onClick={handleLogin}>
                Intră în cont
              </Button>
              <Button className={classes.inregistrare} onClick={() => navigate('/register')}>
                Înregistrează-te
              </Button>
            </Group>
          </Paper>
        </Container>
      </div>
    </div>
  );
}
