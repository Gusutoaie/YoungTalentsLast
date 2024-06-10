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
  import { IconHeart, IconBookmark, IconShare } from '@tabler/icons-react';
  import classes from './ArticleCard.module.css';
  import uvtEvent1 from '../../assets/images/uvtEvent1.jpeg';
  export default function ArticleCard() {
    const theme = useMantineTheme();
  
    return (
      <Card withBorder padding="lg" radius="md" className={classes.card}>
        <Card.Section mb="sm">
          <Image
            src={uvtEvent1}
            alt="Top 50 underrated plants for house decoration"
            height={180}
          />
        </Card.Section>
  
        <Badge w="fit-content" variant="light">
          UVT
        </Badge>
  
        <Text fw={700} className={classes.title} mt="xs">
        Premiul Miniștrilor CEEPUS 2024, câștigat de rețeaua „CEEPUS RO – 0814 Red de Hispanistas de Europa Central”, coordonată de conf. univ. dr. Ilinca Țăranu, din cadrul Facultății de Litere, Istorie și Teologie a UVT
        </Text>
  
        <Group mt="lg">
          <Avatar
            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png"
            radius="sm"
          />
          <div>
            <Text fw={500}>Elsa Gardenowl</Text>
            <Text fz="xs" c="dimmed">
              posted 34 minutes ago
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
  }