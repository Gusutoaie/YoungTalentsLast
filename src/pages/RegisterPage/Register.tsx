import { useState } from 'react';
import { TextInput, PasswordInput, Tooltip, Center, Text, rem,UnstyledButton, Menu, Image, Group, Checkbox } from '@mantine/core';
import { IconInfoCircle,IconChevronDown,IconUser,IconKey,IconMail,IconCalendar } from '@tabler/icons-react';
import classes from './Register.module.css';
const data = [
    { label: 'English'},
    { label: 'German'},
    { label: 'Italian' },
    { label: 'French' },
    { label: 'Polish'},
  ];

function Nume() {
    

    return (
        <TextInput
            label="Nume"
            placeholder="Nume"
            
        />
    );
}

function Parola() {
    const [opened, setOpened] = useState(false);
    const [value, setValue] = useState('');
    const valid = value.trim().length >= 6;
    return (
        <Tooltip
            label={valid ? 'All good!' : 'Password must include at least 6 characters'}
            position="bottom-start"
            withArrow
            opened={opened}
            color={valid ? 'teal' : undefined}
            withinPortal
        >
            <PasswordInput
                label="Parolă"
                required
                placeholder="Parolă"
                onFocus={() => setOpened(true)}
                onBlur={() => setOpened(false)}
                mt="md"
                value={value}
                onChange={(event) => setValue(event.currentTarget.value)}
            />
        </Tooltip>
    );
}
function Email() {
    const rightSection = (
        <Tooltip
            label="We store your data securely"
            position="top-end"
            withArrow
            transitionProps={{ transition: 'pop-bottom-right' }}
        >
            <Text component="div" c="dimmed" style={{ cursor: 'help' }}>
                <Center>
                    <IconInfoCircle style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
                </Center>
            </Text>
        </Tooltip>
    );

    return (
        <TextInput
            rightSection={rightSection}
            label="Adresă de e-mail"
            placeholder="Adresă de e-mail"
        />
    );
}

function Prenume() {
    return (
        <TextInput
            label="Prenume"
            placeholder="Prenume"
        />
    );
}
function Username() {
    return (
        <TextInput
            label="Prenume"
            placeholder="Prenume"
        />
    );
}

function ConfirmareParola() {
    const [opened, setOpened] = useState(false);
    const [value, setValue] = useState('');
    const valid = value.trim().length >= 6;
    return (
        <Tooltip
            label={valid ? 'All good!' : 'Password must include at least 6 characters'}
            position="bottom-start"
            withArrow
            opened={opened}
            color={valid ? 'teal' : undefined}
            withinPortal
        >
            <PasswordInput
                label="Confirm Parolă"
                required
                placeholder="Confirm Parolă"
                onFocus={() => setOpened(true)}
                onBlur={() => setOpened(false)}
                mt="md"
                value={value}
                onChange={(event) => setValue(event.currentTarget.value)}
            />
        </Tooltip>
    );
}

function JobActual() {
    return (
        <TextInput
            label="Job Actual"
            placeholder="Job Actual"
        />
    );
}
function CompanieActuala() {
    return (
        <TextInput
            label="Companie Actuală"
            placeholder="Companie Actuală"
        />
    );
}
function LanguagePicker() {
    const [opened, setOpened] = useState(false);
    const [selected, setSelected] = useState(data[0]);
    const items = data.map((item) => (
      <Menu.Item
        onClick={() => setSelected(item)}
        key={item.label}
      >
        {item.label}
      </Menu.Item>
    ));
  
    return (
        <div>

        <Text size="sm"  mb={4}>
            Facultatea absolvită
        </Text>
      <Menu
        onOpen={() => setOpened(true)}
        onClose={() => setOpened(false)}
        radius="md"
        width="target"
        withinPortal
      >
        <Menu.Target>
          <UnstyledButton className={classes.control} data-expanded={opened || undefined}>
            <Group gap="xs">
              <span className={classes.label}>{selected.label}</span>
            </Group>
            <IconChevronDown size="1rem" className={classes.icon} stroke={1.5} />
          </UnstyledButton>
        </Menu.Target>
        <Menu.Dropdown>{items}</Menu.Dropdown>
      </Menu>
      </div>

    );
  }

  function AnulAbsolvirii() {
    return (
        <TextInput
            label="Anul Absolvirii"
            placeholder="Anul Absolvirii"
        />
    );
}

function DomeniuProfesional() {
    return (
        <TextInput
            label="Domeniu profesional actual"
            placeholder="Domeniu Profesional"
        />
    );
}
function Buttoane() {
    return (
        

        <div className={classes.buttoaneContainer}>
            <div className={classes.termeniSiConditi}>
                <a className={classes.ArataTermeni} href="#">Arată termenii şi condiţiile</a>
                <Checkbox
                className={classes.checkbox}
                onChange={() => {}}
                label="Sunt de acord cu termenii şi condiţiile"
                tabIndex={-1}
                size="md"
                mr="xl"
                styles={{ input: { cursor: 'pointer' } }}
                aria-hidden
                />         
       </div>
            <div className={classes.buttons}>
                <button className={classes.inregistrareButton}>Înregistrează-te</button>
                <button className={classes.intraInCont}>Intră in cont</button>
            </div>
           
        </div>
    );
}


function DevinoMentor() {
    const [opened, setOpened] = useState(false);
    const [selected, setSelected] = useState(data[0]);
    const items = data.map((item) => (
      <Menu.Item
        onClick={() => setSelected(item)}
        key={item.label}
      >
        {item.label}
      </Menu.Item>
    ));
  
    return (
        <div>

        <Text size="sm"  mb={4}>
        Vrei sa devii mentor al comunităţii noastre?

        </Text>
      <Menu
        onOpen={() => setOpened(true)}
        onClose={() => setOpened(false)}
        radius="md"
        width="target"
        withinPortal
      >
        <Menu.Target>
          <UnstyledButton className={classes.control} data-expanded={opened || undefined}>
            <Group gap="xs">
              <span className={classes.label}>{selected.label}</span>
            </Group>
            <IconChevronDown size="1rem" className={classes.icon} stroke={1.5} />
          </UnstyledButton>
        </Menu.Target>
        <Menu.Dropdown>{items}</Menu.Dropdown>
      </Menu>
      </div>

    );
  }



export default function Register() {
    return (
        <>
        <div className={classes.container}>
           <div className={classes.title}>
                    <h2>Register</h2>
            </div>

             
                <div className={classes.forms}>
                    <div className={classes.formsContainer}> 
                    <Nume />
                    <Prenume />
                    <Username />
                    <Parola />
                    <ConfirmareParola />
                    <Email />
                    <JobActual />
                    <CompanieActuala />
                    <LanguagePicker />
                    <AnulAbsolvirii />
                    <DomeniuProfesional />
                    <DevinoMentor />
                    <Buttoane />
                    </div>
                </div>
                </div>
        </>
    );
}