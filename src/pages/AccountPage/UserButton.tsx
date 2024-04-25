import { UnstyledButton, Group, Avatar, Text, rem } from '@mantine/core';
import { IconChevronRight } from '@tabler/icons-react';
import classes from './UserButton.module.css';
import { useAppSelector } from '../../hookt';
import avatar from '../../assets/images/avatar.png';




export function UserButton() {

  const user = useAppSelector((state) => state.user);

  return (
    <UnstyledButton className={classes.user}>
      <Group>
        <Avatar
          src={avatar}
          radius="xl"
        />

        <div style={{ flex: 1 }}>
          <Text size="sm" fw={500}>
            {user.firstName} {user.lastName}
          </Text>

          <Text c="dimmed" size="xs">
            {user.email}
          </Text>
        </div>

        <IconChevronRight style={{ width: rem(14), height: rem(14) }} stroke={1.5} />
      </Group>
    </UnstyledButton>
  );
}