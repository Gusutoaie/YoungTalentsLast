import React, { useState } from 'react';
import { PasswordInput, Tooltip, Group, Text } from '@mantine/core';
import { IconLock } from '@tabler/icons-react';
import { InputProps } from '../../Interfaces/FormData';
import classes from './Components.module.css';

export default function Parola({ value, onChange }: InputProps) {
  const [opened, setOpened] = useState(false);
  const valid = value.trim().length >= 6;

  return (
    <div className={classes.inputContainer}>
      <Group className={classes.labelIconGroup}>
        <IconLock className={classes.icon} size={22} />
        <Text className={classes.labelText}>Parolă</Text>
      </Group>
      <Tooltip
        label={valid ? 'All good!' : 'Password must include at least 6 characters'}
        position="bottom-start"
        withArrow
        opened={opened}
        color={valid ? 'teal' : undefined}
        withinPortal
      >
        <PasswordInput
          required
          placeholder="Parolă"
          onFocus={() => setOpened(true)}
          onBlur={() => setOpened(false)}
          value={value}
          onChange={onChange}
          className={classes.input}
          styles={{
            input: {
              border: '1px solid #ddd',
              height: '40px'
            }
          }}
        />
      </Tooltip>
    </div>
  );
}
