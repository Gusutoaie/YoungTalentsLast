import React from 'react';
import {
    Card,
    Image,
    ActionIcon,
    Group,
    Text,
    Avatar,
    Badge,
    useMantineTheme,
    rem,
} from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { IconHeart, IconBookmark, IconShare } from '@tabler/icons-react';
import classes from './ArticleCard.module.css';
import Article from '../../Interfaces/Article';

interface ArticleCardProps extends Article {}

const ArticleCard: React.FC<ArticleCardProps> = ({ id, title, image, location, date }) => {
    const theme = useMantineTheme();
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/event/${id}`);
    };

    const baseURL = 'http://localhost:8090/';
    const imageURL = `${baseURL}${image}`;

    return (
        <Card withBorder padding="lg" radius="md" className={classes.card}>
            <Card.Section mb="sm" onClick={handleCardClick} style={{ cursor: 'pointer' }}>
                <Image
                    src={imageURL}
                    alt={title}
                    height={180}
                />
            </Card.Section>

            <Badge w="fit-content" variant="light">
                UVT
            </Badge>

            <Text fw={700} className={classes.title} mt="xs" onClick={handleCardClick} style={{ cursor: 'pointer' }}>
                {title}
            </Text>

            <Group mt="lg">
                <Avatar
                    src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png"
                    radius="sm"
                />
                <div>
                    <Text fw={500}>{location}</Text>
                    <Text fz="xs" c="dimmed">
                        posted {date}
                    </Text>
                </div>
            </Group>

            <Card.Section className={classes.footer}>
                <Group justify="space-between">
                    <Text fz="xs" c="dimmed">
                        733 people liked this
                    </Text>
                    <Group gap={0}>
                        <ActionIcon variant="subtle" color="gray">
                            <IconHeart
                                style={{ width: rem(20), height: rem(20) }}
                                color={theme.colors.red[6]}
                                stroke={1.5}
                            />
                        </ActionIcon>
                        <ActionIcon variant="subtle" color="gray">
                            <IconBookmark
                                style={{ width: rem(20), height: rem(20) }}
                                color={theme.colors.yellow[6]}
                                stroke={1.5}
                            />
                        </ActionIcon>
                        <ActionIcon variant="subtle" color="gray">
                            <IconShare
                                style={{ width: rem(20), height: rem(20) }}
                                color={theme.colors.blue[6]}
                                stroke={1.5}
                            />
                        </ActionIcon>
                    </Group>
                </Group>
            </Card.Section>
        </Card>
    );
};

export default ArticleCard;
