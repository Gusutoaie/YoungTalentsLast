import React, { useState } from 'react';
import { useForm } from '@mantine/form';
import { Button, TextInput, PasswordInput, Checkbox, Paper, Group, Text, Divider, Stack,PaperProps } from '@mantine/core';
import { useAppSelector } from '../../hookt';

interface YourProfileProps {
    title: string;
}

const YourProfile: React.FC<YourProfileProps> = (title, props: PaperProps) => {



    const user = useAppSelector((state) => state.user);

    const form = useForm({
        initialValues: {
            name: 'John Doe',
            email: 'johndoe@example.com',
            university: 'University of Technology',
            year: 'Third Year',
            confirm: false,
        },
        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
        },
    });

    // Edit mode state
    const [editMode, setEditMode] = useState(false);

    const toggleEditMode = (event:any) => {
        event.preventDefault(); // Prevent default to stop form submission
        console.log('Toggling edit mode from', editMode, 'to', !editMode); // Debug log
        setEditMode(!editMode);
    };

     // Function to handle save
     const handleSave = (event:any) => {
        event.preventDefault(); // Prevent form submission
        console.log('Data saved:', form.values); // Placeholder for actual save logic
        setEditMode(false); // Exit edit mode
    };
    const [password, setPassword] = useState('');




    return (
        <Paper radius="md" p="xl" withBorder {...props}>
            <Text size="lg" fw={500}>Profile Details</Text>

            <Divider my="lg" />

            <form onSubmit={handleSave}>
                <Stack>
                    <TextInput
                        required
                        label="First Name"
                        value={user.firstName}
                        disabled={!editMode}
                        radius="md"
                    />
                    <TextInput
                        required
                        label="Last Name"
                        value={user.lastName}
                        disabled={!editMode}
                        radius="md"
                    />

                    <TextInput
                        required
                        label="Email"
                        value={user.email}
                        disabled={true}
                        radius="md"
                    />

                    <TextInput
                        required
                        label="University"
                        value={form.values.university}
                        onChange={(event) => form.setFieldValue('university', event.currentTarget.value)}
                        disabled={!editMode}
                        radius="md"
                    />

                    <TextInput
                        required
                        label="Year"
                        value={user.yearOfStudy}
                        onChange={(event) => form.setFieldValue('year', event.currentTarget.value)}
                        disabled={!editMode}
                        radius="md"
                    />
                    <PasswordInput
                        required
                        label="Password"
                        placeholder="Your password"
                        value={user.password}
                        onChange={(e) => setPassword(e.target.value)}
                        error={form.errors.password && 'Password should include at least 6 characters'}
                        radius="md"
                    />

                  

                    {editMode && (
                        <Checkbox
                            label="I confirm the accuracy of the information provided"
                            checked={form.values.confirm}
                            onChange={(event) => form.setFieldValue('confirm', event.currentTarget.checked)}
                        />
                    )}
                </Stack>

                <Group  mt="md">
                    {editMode ? (
                        <Button type="submit" radius="xl">Save Changes</Button>
                    ) : (
                        <Button type="button" onClick={toggleEditMode} radius="xl">Edit</Button>
                    )}
                </Group>
            </form>
        </Paper>
    );
}

export default YourProfile;