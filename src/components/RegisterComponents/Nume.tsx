import React from 'react';
import { TextInput, Group, Text } from '@mantine/core';
import { IconUser } from '@tabler/icons-react';
import { InputProps } from '../../Interfaces/FormData';
import classes from './Components.module.css';

export default function Nume({ value, onChange }: InputProps) {
  return (
    <div className={classes.inputContainer}>
      <Group className={classes.labelIconGroup}>
        <IconUser className={classes.icon} size={22} />
        <Text className={classes.labelText}>Nume</Text>
      </Group>
      <TextInput 
        placeholder="Nume"
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
