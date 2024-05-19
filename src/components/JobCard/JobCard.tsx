import { Card, Image, Avatar, Text, Group } from '@mantine/core';
import { Link } from 'react-router-dom';
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
  return (
    <Card withBorder radius="md" p={0} className={classes.card}>
      <Group wrap="nowrap" gap={0}>
        {image ? (
          <Image src={image} height={160} width={160} />
        ) : (
          <div className={classes.placeholderImage}></div>
        )}
        <div className={classes.body}>
          <Text tt="uppercase" c="dimmed" fw={700} size="xs">
            {company}
          </Text>
          <Text className={classes.title} mt="xs" mb="md">
            <Link to={link} className={classes.titleLink}>
              {title}
            </Link>
          </Text>
          <Group wrap="nowrap" gap="xs">
            <Group gap="xs" wrap="nowrap">
              <Avatar size={20} src={image || undefined} />
              <Text size="xs">{author}</Text>
            </Group>
            <Text size="xs" c="dimmed">
              •
            </Text>
            <Text size="xs" c="dimmed">
              {date}
            </Text>
            <Text size="xs" c="dimmed">
              •
            </Text>
            <Text size="xs" c="dimmed">
              {location}
            </Text>
          </Group>
        </div>
      </Group>
    </Card>
  );
};

export default JobCard;
