import React from 'react';
import { TextInput, Group, Text } from '@mantine/core';
import { IconUser } from '@tabler/icons-react';
import { InputProps } from '../../Interfaces/FormData';
import classes from './Components.module.css';

export default function Prenume({ value, onChange }: InputProps) {
  return (
    <div className={classes.inputContainer}>
      <Group className={classes.labelIconGroup}>
        <IconUser className={classes.icon} size={22} />
        <Text className={classes.labelText}>Prenume</Text>
      </Group>
      <TextInput 
        placeholder="Prenume"
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
