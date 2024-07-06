import React from 'react';
import { TextInput, Group, Text } from '@mantine/core';
import { IconBriefcase } from '@tabler/icons-react';
import { InputProps } from '../../Interfaces/FormData';
import classes from './Components.module.css';

export default function DomeniuProfesional({ value, onChange }: InputProps) {
  return (
    <div className={classes.inputContainer}>
      <Group className={classes.labelIconGroup}>
        <IconBriefcase className={classes.icon} size={22} />
        <Text className={classes.labelText}>Domeniu profesional actual</Text>
      </Group>
      <TextInput 
        placeholder="Domeniu Profesional"
        className={classes.input}
        value={value}
        onChange={onChange}
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
