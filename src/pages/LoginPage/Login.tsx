import {
    TextInput,
    PasswordInput,
    Checkbox,
    Anchor,
    Paper,
    Title,
    Text,
    Container,
    Group,
    Button,
  } from '@mantine/core';
  import classes from './Login.module.css';
  
  export default function Login() {
    return (
      <div>
        <div className={classes.title}>
          <h3>Login</h3>
        </div>
      
    <div className={classes.container}>
      <Container className={classes.loginForm} >
        <Title ta="center" className={classes.title}>
          Welcome back!
        </Title>
       
  
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <TextInput label="Email" placeholder="" required />
          <PasswordInput label="Password" placeholder="" required mt="md" />
          <Group justify="space-between" mt="lg">
            <Checkbox label="Remember me" />
            <Anchor component="button" size="sm">
             Parolă uitată?
            </Anchor>
          </Group>
          <Group justify="space-between" mt="lg">
            <Button className={classes.intraInCont}>
              Intră în cont
            </Button>
            <Button className={classes.inregistrare} >
            Înregistrează-te
            </Button>

          </Group>
          
        </Paper>
      </Container>
      </div>
      </div>
    );
  }