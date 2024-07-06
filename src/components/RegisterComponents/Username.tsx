import React from 'react';
import { TextInput, Group, Text } from '@mantine/core';
import { IconAt } from '@tabler/icons-react';
import { InputProps } from '../../Interfaces/FormData';
import classes from './Components.module.css';

export default function Username({ value, onChange }: InputProps) {
  return (
    <div className={classes.inputContainer}>
      <Group className={classes.labelIconGroup}>
        <IconAt className={classes.icon} size={22} />
        <Text className={classes.labelText}>Username</Text>
      </Group>
      <TextInput 
        placeholder="Acesta va fi numele dumneavoastră de profil"
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
