import React, { useState, useEffect } from 'react';
import classes from './Members.module.css';
import { Avatar, Badge, Table, Group, Text, Select } from '@mantine/core';
import axios from 'axios';
import User from '../../Interfaces/User';
const rolesData = ['Manager', 'Collaborator', 'Contractor'];

export default function Members() {
  const [members, setMembers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await axios.get<User[]>('http://localhost:8090/user/all'); // Replace with your API endpoint
        setMembers(response.data);
        setLoading(false);
      } catch (error) {
        setError(error as Error);
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const rows = members.map((item) => (
    <tr key={item.id}>
      <td>
        <Group gap="sm">
          <Avatar size={40} src={item.profilePicturePath} radius={40} />
          <div>
            <Text fz="sm" fw={500}>
              {item.firstName} {item.lastName}
            </Text>
            <Text fz="xs" c="dimmed">
              {item.email}
            </Text>
          </div>
        </Group>
      </td>

      <td>
        <Select
          data={rolesData}
          defaultValue={item.birthDate}
          variant="unstyled"
          allowDeselect={false}
        />
      </td>
      <td>{/* Assuming lastActive field is removed */}</td>
      <td>
        {item.isConfirmed ? (
          <Badge fullWidth variant="light">
            Active
          </Badge>
        ) : (
          <Badge color="gray" fullWidth variant="light">
            Disabled
          </Badge>
        )}
      </td>
    </tr>
  ));

  return (
    <div className={classes.container}>
      <Table.ScrollContainer minWidth={800}>
        <Table verticalSpacing="sm">
          <thead>
            <tr>
              <th>Member</th>
              <th>Job Actual</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </Table.ScrollContainer>
    </div>
  );
}
