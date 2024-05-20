import React, { useState } from 'react';
import { TextInput, PasswordInput, Tooltip, Center, Text, rem, UnstyledButton, Menu, Group, Checkbox } from '@mantine/core';
import { IconInfoCircle, IconChevronDown } from '@tabler/icons-react';
import classes from './Register.module.css';
import { registerUser } from '../../utils/registerUser';
import { FormData, InputProps, SelectProps, CheckboxProps } from '../../Interfaces/FormData';
import { useNavigate } from 'react-router-dom';

const data = [
  { label: 'Facultatea de Arte și Design' },
  { label: 'Facultatea de Chimie, Biologie, Geografie' },
  { label: 'Facultatea de Drept' },
  { label: 'Facultatea de Economie și de Administrare a Afacerilor' },
  { label: 'Facultatea de Educație Fizică și Sport' },
  { label: 'Facultatea de Fizică' },
  { label: 'Facultatea de Litere, Istorie și Teologie' },
  { label: 'Facultatea de Matematică și Informatică' },
  { label: 'Facultatea de Muzică și Teatru' },
  { label: 'Facultatea de Sociologie și Psihologie' },
  { label: 'Facultatea de Științe Politice, Filosofie și Științe ale Comunicării' },
];

const DataMentor = [
  { label: 'Da' },
  { label: 'Nu' },
];

function Nume({ value, onChange }: InputProps) {
  return (
    <TextInput
      label="Nume"
      placeholder="Nume"
      className={classes.input}
      value={value}
      onChange={onChange}
    />
  );
}

function Prenume({ value, onChange }: InputProps) {
  return (
    <TextInput
      label="Prenume"
      placeholder="Prenume"
      className={classes.input}
      value={value}
      onChange={onChange}
    />
  );
}

function Username({ value, onChange }: InputProps) {
  return (
    <TextInput
      label="Username"
      placeholder="Acesta va fi numele dumneavoastră de profil"
      className={classes.input}
      value={value}
      onChange={onChange}
    />
  );
}

function Parola({ value, onChange }: InputProps) {
  const [opened, setOpened] = useState(false);
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
        onChange={onChange}
        className={classes.input}
      />
    </Tooltip>
  );
}

function ConfirmareParola({ value, onChange }: InputProps) {
  const [opened, setOpened] = useState(false);
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
        onChange={onChange}
        className={classes.input}
      />
    </Tooltip>
  );
}

function Email({ value, onChange }: InputProps) {
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
      className={classes.input}
      value={value}
      onChange={onChange}
    />
  );
}

function JobActual({ value, onChange }: InputProps) {
  return (
    <TextInput
      label="Job Actual"
      placeholder="Job Actual"
      className={classes.input}
      value={value}
      onChange={onChange}
    />
  );
}

function CompanieActuala({ value, onChange }: InputProps) {
  return (
    <TextInput
      label="Companie Actuală"
      placeholder="Companie Actuală"
      className={classes.input}
      value={value}
      onChange={onChange}
    />
  );
}

function FacultateaAbsolvita({ value, onChange }: SelectProps) {
  const [opened, setOpened] = useState(false);
  const [selected, setSelected] = useState(data[0]);
  const items = data.map((item) => (
    <Menu.Item
      onClick={() => {
        setSelected(item);
        onChange(item.label);
      }}
      key={item.label}
    >
      {item.label}
    </Menu.Item>
  ));

  return (
    <div>
      <Text size="sm" mb={4}>
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

function AnulAbsolvirii({ value, onChange }: InputProps) {
  return (
    <TextInput
      label="Anul Absolvirii"
      placeholder="Anul Absolvirii"
      className={classes.input}
      value={value}
      onChange={onChange}
    />
  );
}

function DomeniuProfesional({ value, onChange }: InputProps) {
  return (
    <TextInput
      label="Domeniu profesional actual"
      placeholder="Domeniu Profesional"
      className={classes.input}
      value={value}
      onChange={onChange}
    />
  );
}

function DevinoMentor({ value, onChange }: CheckboxProps) {
  const [opened, setOpened] = useState(false);
  const [selected, setSelected] = useState(DataMentor[0]);
  const items = DataMentor.map((item) => (
    <Menu.Item

      onClick={() => {
        setSelected(item);
        onChange(item.label);
      }}

      key={item.label}
    >
      {item.label}
    </Menu.Item>
  ));

  return (
    <div>
      <Text size="sm" mb={4}>
        Vrei să devii mentor al comunităţii noastre?
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



function Buttoane({ onSubmit, onLogin }: { onSubmit: () => void; onLogin: () => void }) {
    const [termsAccepted, setTermsAccepted] = useState(false);

  return (
    <div className={classes.buttoaneContainer}>
      <div className={classes.termeniSiConditi}>
        <a className={classes.AratăTermeni} href="#">Arată termenii şi condiţiile</a>
        <Checkbox
          className={classes.checkbox}
          checked={termsAccepted}
          onChange={(event) => setTermsAccepted(event.currentTarget.checked)}
          label="Sunt de acord cu termenii şi condiţiile"
          tabIndex={-1}
          size="md"
          mr="xl"
          styles={{ input: { cursor: 'pointer' } }}
          aria-hidden
        />
      </div>
      <div className={classes.buttons}>
        <button className={classes.inregistrareButton} onClick={onSubmit} disabled={!termsAccepted}>Înregistrează-te</button>

        <button className={classes.intraInCont} onClick={onLogin}>Intră în cont</button>
      </div>
    </div>
  );
}

export default function Register() {
    const navigate = useNavigate();

  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    username: '',
    emailAddress: '',
    password: '',
    actualJob: '',
    actualCompany: '',
    professionalDomain: '',
    faculty: '',
    yearOfStudy: '',
    mentor: '',
  });

  const handleChange = (field: keyof FormData) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [field]: event.currentTarget.value,
    });
  };

  const handleSelectChange = (field: keyof FormData) => (value: string) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleCheckboxChange = (field: keyof FormData) => (value: string) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await registerUser(formData);
      alert('User registered successfully');
      console.log(response);
    } catch (error) {
      console.error('Error registering user:', error);
      alert('Failed to register user');
    }
  };
  const handleLogin = () => {
    navigate('/login');
  };
  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <h2>Register Page</h2>
      </div>
      <div className={classes.forms}>
        <div className={classes.formsContainer}>
          <Nume value={formData.lastName} onChange={handleChange('lastName')} />
          <Prenume value={formData.firstName} onChange={handleChange('firstName')} />
          <Username value={formData.username} onChange={handleChange('username')} />
          <Parola value={formData.password} onChange={handleChange('password')} />
          {/* <ConfirmareParola value={formData.confirmPassword} onChange={handleChange('confirmPassword')} /> */}
          <Email value={formData.emailAddress} onChange={handleChange('emailAddress')} />
          <JobActual value={formData.actualJob} onChange={handleChange('actualJob')} />
          <CompanieActuala value={formData.actualCompany} onChange={handleChange('actualCompany')} />
          <FacultateaAbsolvita value={formData.faculty} onChange={handleSelectChange('faculty')} />
          <AnulAbsolvirii value={formData.yearOfStudy} onChange={handleChange('yearOfStudy')} />
          <DomeniuProfesional value={formData.professionalDomain} onChange={handleChange('professionalDomain')} />
          <DevinoMentor value={formData.mentor} onChange={handleCheckboxChange('mentor')} />
          <Buttoane onSubmit={handleSubmit} onLogin={handleLogin} />
        </div>
      </div>
    </div>
  );
}
