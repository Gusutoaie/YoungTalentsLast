import { Card, Image, Text, Badge,Avatar, Button, Group } from '@mantine/core';
import { IconCalendar, IconUser, IconBuildingBank, IconCreditCard, IconDiscount2 } from '@tabler/icons-react';
import classes from './EventComponent.module.css';
import { TrendingPostsType } from '../interfaces/TrendingPostsType';
import events from '../../assets/images/events.png';

interface EventComponentProps {
    event: TrendingPostsType;
}

const EventDetailsCard = () => {
  return (
    <div className={classes.container}>
    <Card className={classes.Card} shadow="sm" p="lg">
      <Card.Section>
       
        <Image src={events} height={160} alt="Event" />
      </Card.Section>
      <Badge color="pink" variant="light">
        3.00 CEU
      </Badge>

      <Text style={{ marginTop: 10, marginBottom: 5 }}>
        2017 APA Annual Meeting
      </Text>
      <Group  mb={5}>
        <IconCalendar size={14} />
        <Text size="sm">November 7-9, 2017</Text>
      </Group>
      <Group  mb={5}>
        <IconUser size={14} />
        <Text size="sm">Speaker: George Abels</Text>
      </Group>
      <Group  mb={5}>
        <IconBuildingBank size={14} />
        <Text size="sm">Sponsor: ABC Company</Text>
      </Group>
      
      <Text size="sm" style={{ color: 'dimmed', lineHeight: 1.5 }}>
        We are pleased to invite you to attend the 2017 Annual Meeting of the American Professionals Association (APA) at the Convention Center in downtown Washington, DC. The APA Annual Meeting is the premier educational event in our industry...
        <br />
        <a href="#more">View More</a>
      </Text>

      

      <Button variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }} fullWidth style={{ marginTop: 14 }}>
        Join Now
      </Button>
    </Card>
    </div>
  );
};

export default EventDetailsCard;
