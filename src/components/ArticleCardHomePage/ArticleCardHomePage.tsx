import React from 'react';
import { Card, Image, Avatar, Text, Group } from '@mantine/core';
import Article from '../../Interfaces/Article';
import classes from './ArticleCardHomePage.module.css';

const baseURL = 'http://localhost:8090/'; // Replace with your backend base URL

interface ArticleCardHomePageProps {
  article: Article;
}

export function ArticleCardHomePage({ article }: ArticleCardHomePageProps) {
  return (
    <Card withBorder radius="md" p={0} className={classes.card}>
      <Group wrap="nowrap" gap={0} className={classes.group}>
        <Image
          className={classes.ArticleImage}
          src={`${baseURL}${article.image}` || "https://via.placeholder.com/150"}
          height={160}
        />
        <div className={classes.body}>
          <Text tt="uppercase" c="dimmed" fw={700} size="xs">
            {article.title || "general"}
          </Text>
          <Text mt="xs" mb="md" className={classes.description}>
            {article.description}
          </Text>
          <Group wrap="nowrap" gap="xs">
            <Group gap="xs" wrap="nowrap">
              <Avatar
                size={20}
                src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
              />
              <Text size="xs">{article.date || "Unknown"}</Text>
            </Group>
            <Text size="xs" c="dimmed">
              •
            </Text>
            <Text size="xs" c="dimmed">
              {article.date}
            </Text>
          </Group>
        </div>
      </Group>
    </Card>
  );
}
