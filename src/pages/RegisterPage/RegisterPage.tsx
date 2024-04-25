import { useToggle, upperFirst } from '@mantine/hooks';
import { useForm } from '@mantine/form';
import { UnstyledButton, Menu, Image } from '@mantine/core';
import { useState, useEffect } from 'react';
import { IconChevronDown } from '@tabler/icons-react';
import { Link, useNavigate } from "react-router-dom";

import axios from 'axios';

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
import classes from './RegisterPage.module.css';
export default function RegisterPage(props: PaperProps) {

	const [emailAddress, setEmailAddress] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const [emailAddressError, setEmailAddressError] = useState("");
	const [passwordError, setPasswordError] = useState("");
	const [confirmPasswordError, setConfirmPasswordError] = useState("");

	const [errorMessages, setErrorMessages] = useState(["ok", "ok", "ok"]);
	const navigate = useNavigate();

    const handleRegister = async () => {
		try {
			if (
				emailAddress === "" ||
				password === "" ||
				confirmPassword === ""
			) {
				alert("Please fill out all fields!");
				return;
			}

			await axios.post("http://localhost:8090/user/register", {
              
				emailAddress: emailAddress,
				password: password,
				confirmPassword: confirmPassword,
                faculty: "FACULTY",
			}).then((response) => {
                alert("Account created successfully!");
                navigate("/login");
            }).catch((error) => {
                alert("errrrrorrr");
                setErrorMessages(error.response.data.split(","));
            });

			navigate("/login");
		} catch (error: any) {
            alert("errrrrorrr catchhh");
			setErrorMessages(error.response.data.split(","));
		}
	};








    const [type, toggle] = useToggle(['register', 'login']);
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
    const data = [
        { label: 'Facultatea de Arte si Design', image: 'https://image.flaticon.com/icons/png/512/197/197374.png' },
        { label: 'Facultatea de Drept', image: 'https://image.flaticon.com/icons/png/512/197/197419.png' },
        { label: 'Facultatea de Matematica si Informatica', image: 'https://image.flaticon.com/icons/png/512/197/197388.png' },
        { label: 'Facultatea de Fizica', image: 'https://image.flaticon.com/icons/png/512/197/197374.png' },
        { label: 'Facultatea de Educatie Fizica si Sport', image: 'https://image.flaticon.com/icons/png/512/197/197419.png' },
    ];
    const [opened, setOpened] = useState(false);
    const [selected, setSelected] = useState(data[0]);


    const dataYearLevel = [
        { label: 'Anul 1', image: 'https://image.flaticon.com/icons/png/512/197/197374.png' },
        { label: 'Anul 2', image: 'https://image.flaticon.com/icons/png/512/197/197419.png' },
        { label: 'Anul 3', image: 'https://image.flaticon.com/icons/png/512/197/197388.png' },
        { label: 'Anul 4', image: 'https://image.flaticon.com/icons/png/512/197/197374.png' },
        { label: 'Anul 5', image: 'https://image.flaticon.com/icons/png/512/197/197419.png' },
    ];
    const [openedYear, setOpenedYear] = useState(false);
    const [selectedYear, setSelectedYear] = useState(dataYearLevel[0]);


    const items = data.map((item) => (
        <Menu.Item
            leftSection={<Image src={item.image} width={18} height={18} />}
            onClick={() => setSelected(item)}
            key={item.label}
        >
            {item.label}
        </Menu.Item>
    ));
    const itemsYear = dataYearLevel.map((item) => (
        <Menu.Item
            leftSection={<Image src={item.image} width={18} height={18} />}
            onClick={() => setSelectedYear(item)}
            key={item.label}
        >
            {item.label}
        </Menu.Item>
    ));


    return (
        <Paper className={classes.container} radius="md" p="xl" withBorder {...props}>
            <Text size="lg" fw={500}>
                Welcome to YoungTalent, {type} with
            </Text>

            <Group grow mb="md" mt="md">
                <GoogleButton radius="xl">Sign up with Google</GoogleButton>
            </Group>

            <Divider label="Or continue with email" labelPosition="center" my="lg" />

            <form onSubmit={form.onSubmit(() => { })}>
                <Stack>
                    {type === 'register' && (
                        <TextInput
                            label="Name"
                            placeholder="Your name"
                            value={form.values.name}
                            onChange={(event) => form.setFieldValue('name', event.currentTarget.value)}
                            radius="md"
                        />
                    )}

                    <TextInput
                        required
                        label="Email"
                        placeholder="mail@e-uvt.ro"
                        value={emailAddress}
                        onChange={(event) => setEmailAddress(event.currentTarget.value)}
                        error={emailAddressError}
                        radius="md"
                    />

                    <div className={classes.menuContainer}>
                        {/* Label and Menu for Choosing University */}
                        <div className={classes.menuButton}>
                            <div className={classes.menuLabel}>Choose University</div>
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
                                            <IconChevronDown size="1rem" className={classes.icon} stroke={1.5} />
                                        </Group>
                                    </UnstyledButton>
                                </Menu.Target>
                                <Menu.Dropdown>{items}</Menu.Dropdown>
                            </Menu>
                        </div>
                        <div className={classes.menuButton}>

                            {/* Label and Menu for Choosing Year */}
                            <div className={classes.menuLabel}>Choose Year</div>
                            <Menu
                                onOpen={() => setOpenedYear(true)}
                                onClose={() => setOpenedYear(false)}
                                radius="md"
                                width="target"
                                withinPortal
                            >
                                <Menu.Target>
                                    <UnstyledButton className={classes.control} data-expanded={openedYear || undefined}>
                                        <Group gap="xs">
                                            <span className={classes.label}>{selectedYear.label}</span>
                                            <IconChevronDown size="1rem" className={classes.icon} stroke={1.5} />
                                        </Group>
                                    </UnstyledButton>
                                </Menu.Target>
                                <Menu.Dropdown>{itemsYear}</Menu.Dropdown>
                            </Menu>
                        </div>

                    </div>


                    <PasswordInput
                        required
                        label="Password"
                        placeholder="Your password"
                        value={password}
                        onChange={(event) => setPassword(event.currentTarget.value)}
                        error={form.errors.password && 'Password should include at least 6 characters'}
                        radius="md"
                    />
                    <PasswordInput
                        required
                        label="Confirm Password"
                        placeholder="Your password"
                        value={confirmPassword}
                        onChange={(event) => setConfirmPassword(event.currentTarget.value)}
                        error={form.errors.password && 'Password should include at least 6 characters'}
                        radius="md"
                    />

                    {type === 'register' && (
                        <Checkbox
                            label="I accept terms and conditions"
                            checked={form.values.terms}
                            onChange={(event) => form.setFieldValue('terms', event.currentTarget.checked)}
                        />
                    )}
                </Stack>

                <Group justify="space-between" mt="xl">
                    <Anchor component="button" type="button" c="dimmed" onClick={() => toggle()} size="xs">
                        {type === 'register'
                            ? 'Already have an account? Login'
                            : "Don't have an account? Register"}
                    </Anchor>
                    <Button type="submit" radius="xl" onClick={handleRegister}>
                        {upperFirst(type)}
                        
                    </Button>
                </Group>
            </form>
        </Paper>
    );
}