import React from 'react';
import { TextInput, Tooltip, Text, Center, Group } from '@mantine/core';
import { IconInfoCircle, IconMail } from '@tabler/icons-react';
import { InputProps } from '../../Interfaces/FormData';
import classes from './Components.module.css';

export default function Email({ value, onChange }: InputProps) {
  const rightSection = (
    <Tooltip
      label="We store your data securely"
      position="top-end"
      withArrow
      transitionProps={{ transition: 'pop-bottom-right' }}
    >
      <Text component="div" c="dimmed" style={{ cursor: 'help' }}>
        <Center>
          <IconInfoCircle style={{ width: 18, height: 18 }} stroke={1.5} />
        </Center>
      </Text>
    </Tooltip>
  );

  return (
    <div className={classes.inputContainer}>
      <Group className={classes.labelIconGroup}>
        <IconMail className={classes.icon} size={22} />
        <Text className={classes.labelText}>Adresă de e-mail</Text>
      </Group>
      <TextInput 
        rightSection={rightSection}
        placeholder="Adresă de e-mail"
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
