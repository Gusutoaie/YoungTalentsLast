import React from 'react';
import { TextInput, Group, Text } from '@mantine/core';
import { IconBuilding } from '@tabler/icons-react';
import { InputProps } from '../../Interfaces/FormData';
import classes from './Components.module.css';

export default function CompanieActuala({ value, onChange }: InputProps) {
  return (
    <div className={classes.inputContainer}>
      <Group className={classes.labelIconGroup}>
        <IconBuilding className={classes.icon} size={22} />
        <Text className={classes.labelText}>Companie Actuală</Text>
      </Group>
      <TextInput 
        placeholder="Companie Actuală"
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
