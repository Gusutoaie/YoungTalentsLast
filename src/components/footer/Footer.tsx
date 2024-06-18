import { Text, Container, ActionIcon, Group, rem } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './Footer.module.css';
import logooo from './../../assets/images/logoooo.png'
const data = [
  {
    title: 'Afla Mai Multe',
    links: [
      { label: 'Despre noi', link: '#' },
      { label: 'Evenimente', link: '#' },
      { label: 'Noutati', link: '#' },
      { label: 'Forums', link: '#' },
    ],
  },
  {
    title: 'Utile',
    links: [
      { label: 'Suport', link: '#' },
      { label: 'Implică-te în comunitate!', link: '#' },
      { label: 'Vreau sa devin mentor', link: '#' },
      { label: 'Cariere', link: '#' },
      { label: 'Parteneriate', link: '#' },
    ],
  },
  {
    title: 'Recomandari',
    links: [
      { label: 'UVT', link: '#' },
      { label: 'Admitere UVT', link: '#' },
      { label: 'Studenti UVT', link: '#' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { label: '(00) 0256592292', link: '#' },
      { label: 'alumni@e-uvt.ro', link: '#' },
    ],
  },
];

export default function Footer() {
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<'a'>
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <div className={classes.container}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <img src={logooo}></img>
         
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text c="dimmed" size="sm">
          © 2024 Ovidiu Gusutoaie
        </Text>

        <Group gap={0} className={classes.social} justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandTwitter style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandYoutube style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandInstagram style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
}