import React from 'react';
import { TextInput, Group, Text } from '@mantine/core';
import { IconCalendar } from '@tabler/icons-react';
import { InputProps } from '../../Interfaces/FormData';
import classes from './Components.module.css';

export default function AnulAbsolvirii({ value, onChange }: InputProps) {
  return (
    <div className={classes.inputContainer}>
      <Group className={classes.labelIconGroup}>
        <IconCalendar className={classes.icon} size={22} />
        <Text className={classes.labelText}>Anul Absolvirii</Text>
      </Group>
      <TextInput 
        placeholder="Anul Absolvirii"
        className={classes.input}
        value={value}
        onChange={onChange}
        type="number"
        min={1900}
        max={new Date().getFullYear()}
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
