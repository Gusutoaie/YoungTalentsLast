import { TextInput, TextInputProps, ActionIcon, useMantineTheme, rem } from '@mantine/core';
import { IconSearch, IconArrowRight } from '@tabler/icons-react';

export default function InputWithButton(props: TextInputProps) {
  const theme = useMantineTheme();

  return (
    <TextInput
      radius="xl"
      size="md"
      placeholder="Search questions"
      rightSectionWidth={42}
      leftSection={
        <IconSearch
          style={{ width: rem(18), height: rem(18) }}
          stroke={1.5}
        />
      }
      rightSection={
        <ActionIcon
          size={32}
          radius="xl"
          variant="filled"
          style={{ backgroundColor: '#017E9E' }} // Change the background color to your desired RGB value here
        >
          <IconArrowRight
            style={{ width: rem(18), height: rem(18), color: 'white' }} // Change the icon color if needed
            stroke={1.5}
          />
        </ActionIcon>
      }
      {...props}
    />
  );
}
