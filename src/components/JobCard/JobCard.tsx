import React from 'react';
import { Card, Image, Text, Group, Badge, Button } from '@mantine/core';
import { Link } from 'react-router-dom';
import { IconHeart, IconArrowRight } from '@tabler/icons-react';
import classes from './JobCard.module.css';

interface JobCardProps {
  image: string | null;
  title: string;
  author: string;
  date: string;
  company: string;
  location: string;
  link: string;
}

const JobCard: React.FC<JobCardProps> = ({
  image,
  title,
  author,
  date,
  company,
  location,
  link,
}) => {
  const imageUrl = image ? `http://localhost:8090/${image}` : null;

  return (
    <Card withBorder radius="md" p="md" className={classes.card}>
      <Group >
        {imageUrl ? (
          <Image src={imageUrl} height={80} width={80} radius="md" />
        ) : (
          <div className={classes.placeholderImage}></div>
        )}
        <div className={classes.body}>
          <Group  className={classes.groupClass}>
            <Text size="lg">
              <Link to={link} className={classes.titleLink}>
                {title}
              </Link>
            </Text>
            <Button className={classes.detaliiButton} variant="light">
              Detalii
            </Button>
          </Group>
          <Text size="sm" color="dimmed">
            {location} | {new Date(date).toLocaleDateString()}
          </Text>
          <Group mt="md">
            <Badge>{company}</Badge>
            <Text size="sm">Sursa: {author}</Text>
          </Group>
        </div>
      </Group>
    </Card>
  );
};

export default JobCard;
