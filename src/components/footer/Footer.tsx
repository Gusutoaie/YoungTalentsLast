import { Text, Container, ActionIcon, Group, rem } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
import classes from './Footer.module.css';
import logooo from './../../assets/images/logoooo.png'

const data = [
  {
    title: 'Afla Mai Multe',
    links: [
      { label: 'Despre noi', link: '/despre-noi' },
      { label: 'Evenimente', link: '/noutati-evenimente' },
      { label: 'Noutati', link: '/noutati-evenimente' },
      { label: 'Forums', link: '/forum' },
    ],
  },
  {
    title: 'Utile',
    links: [
      { label: 'Suport', link: '/contact' },
      { label: 'Implică-te în comunitate!', link: '/register' },
      { label: 'Vreau sa devin mentor', link: '/register' },
      { label: 'Cariere', link: '/jobs' },
      { label: 'Parteneriate', link: '/parteneriate' },
    ],
  },
  {
    title: 'Recomandari',
    links: [
      { label: 'UVT', link: 'https://www.uvt.ro/' },
      { label: 'Admitere UVT', link: 'https://admitere.uvt.ro/' },
      { label: 'Studenti UVT', link: 'https://studenti.uvt.ro/' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { label: '(00) 0256592292', link: 'tel:+000256592292' },
      { label: 'alumni@e-uvt.ro', link: 'mailto:alumni@e-uvt.ro' },
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
          <img src={logooo} alt="Logo" />
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text c="dimmed" size="sm">
          © 2024 Ovidiu Gusutoaie
        </Text>

        <Group gap={0} className={classes.social} justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" color="gray" variant="subtle" component="a" href="https://twitter.com">
            <IconBrandTwitter style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle" component="a" href="https://youtube.com">
            <IconBrandYoutube style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle" component="a" href="https://instagram.com">
            <IconBrandInstagram style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
}
