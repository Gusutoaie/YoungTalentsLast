import React from 'react';
import { Menu, Group, Center, Burger, Container } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown } from '@tabler/icons-react';
import classes from './Navbar.module.css';
import Logoooo from '../../assets/images/logoooo.png';
import { clearUser } from '../../slices/userSlice';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hookt';

const links = [
  { 
    link: '/', 
    label: 'Acasă',
    links: [
      { link: '/despre-noi', label: 'Despre noi' },
    ],
  },
  { 
    link: '/noutati-evenimente', 
    label: 'Noutăți & Evenimente', 
  },
  { 
    link: '/facultati', 
    label: 'Facultăți' 
  },
  {
    link: '#2',
    label: 'Carieră',
    links: [
      { link: '/faq', label: 'Interviu de cariera' },
      { link: '/jobs', label: 'Oportunități de job' },
      { link: '/forums', label: 'Forums' },
    ],
  },
  { 
    link: '/parteneriate', 
    label: 'Parteneriate' 
  },
];

export default function Navbar() {
  const user = useAppSelector((state:any) => state.user);
  const dispatch = useDispatch();
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link} component="a" href={item.link}>{item.label}</Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
          <Menu.Target>
            <a
              href={link.link}
              className={classes.link}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size="0.9rem" stroke={1.5} />
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
      >
        {link.label}
      </a>
    );
  });

  // Conditionally add "Contul meu" and "Admin Panel" links if user exists and has the role "UVT Admin"
  if (user) {
    items.push(
      <a
        key="contul-meu"
        href="/my-account"
        className={classes.link}
      >
        Contul meu
      </a>
    );
    console.log
    if (user.role === 'UVT Admin') {
      items.push(
        <a
          key="admin-panel"
          href="/admin"
          className={classes.link}
        >
          Admin Panel
        </a>
      );
    }
  }

  return (
    <header className={classes.header}>
      <Container size="md">
        <div className={classes.inner}>
          <div className={classes.uvtLogo}>
            <a href="/" className={classes.link}> <img src={Logoooo} alt="Logo" /> </a>
          </div>
          <Group gap={5} visibleFrom="sm">
            {items}
          </Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
        </div>
      </Container>
    </header>
  );
}
