import { TrendingPostsEvent } from '../interfaces/TrendingPostsEvent';
import { TrendingPostsType } from '../interfaces/TrendingPostsType';
import classes from './TrendingPostsComponent.module.css';
import { UnstyledButton, Group, Avatar, Text, rem } from '@mantine/core';
import { IconChevronRight } from '@tabler/icons-react';
interface EventComponentProps {
    event: TrendingPostsType;
}

export const TrendingPostModule: React.FC<EventComponentProps> = ({ event }) => {
    return (
      <div className={classes.event}>
        <div className={classes.userImage}>
      <Group>
        <Avatar
          src={event.image}
          radius="xl"
        />

      </Group>
          
          
          </div>
        <div className={classes.eventTitle}>{event.title}</div>
        <div className="event-description">{event.description}</div>
      </div>
    );
  };