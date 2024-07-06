import React from 'react';
import { Select, Text, Group } from '@mantine/core';
import { IconUserCheck } from '@tabler/icons-react';
import { CheckboxProps } from '../../Interfaces/FormData';
import classes from './Components.module.css';

const DataMentor = [
  { label: 'Da', value: 'Da' },
  { label: 'Nu', value: 'Nu' },
];

export default function DevinoMentor({ value, onChange }: CheckboxProps) {
  const mentorOptions = DataMentor.map((item) => ({
    value: item.value,
    label: item.label,
  }));

  return (
    <div className={classes.inputContainer}>
      <Group className={classes.labelIconGroup}>
        <IconUserCheck className={classes.icon} size={22} />
        <Text className={classes.labelText}>Vrei să devii mentor al comunităţii noastre?</Text>
      </Group>
      <Select
        data={mentorOptions}
        value={value}
        onChange={(selectedValue) => onChange(selectedValue || '')}
        placeholder="Selectează răspunsul"
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
