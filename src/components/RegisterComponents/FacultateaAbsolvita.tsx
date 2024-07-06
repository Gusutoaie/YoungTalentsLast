import React, { useState, useEffect } from 'react';
import { Select, Text, Group } from '@mantine/core';
import { IconSchool } from '@tabler/icons-react';
import axios from 'axios';
import { SelectProps } from '../../Interfaces/FormData';
import classes from './Components.module.css';

interface Faculty {
  id: number;
  name: string;
}

export default function FacultateaAbsolvita({ value, onChange }: SelectProps) {
  const [faculties, setFaculties] = useState<Faculty[]>([]);

  useEffect(() => {
    const fetchFaculties = async () => {
      try {
        const response = await axios.get<Faculty[]>('http://localhost:8090/api/faculties');
        setFaculties(response.data);
      } catch (error) {
        console.error('Error fetching faculties:', error);
      }
    };

    fetchFaculties();
  }, []);

  const facultyOptions = faculties
    .filter((faculty) => faculty.name.trim() !== "") // Filter out empty names
    .map((faculty) => ({
      value: faculty.name,
      label: faculty.name,
    }))
    .filter((option, index, self) => // Filter out duplicate options
      index === self.findIndex((o) => o.value === option.value)
    );

  return (
    <div className={classes.inputContainer}>
      <Group className={classes.labelIconGroup}>
        <IconSchool className={classes.icon} size={22} />
        <Text className={classes.labelText}>Facultatea absolvită</Text>
      </Group>
      <Select
        data={facultyOptions}
        value={value}
        onChange={(selectedValue) => onChange(selectedValue || '')}
        placeholder="Select faculty"
        className={classes.input}
        styles={{
          input: {
            border: '1px solid #ddd',
            height: '40px'
          }
        }}
      />
    </div>
  );
}
