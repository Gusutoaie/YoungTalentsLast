import React from 'react';
import { Menu, Group, Center, Burger, Container } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown } from '@tabler/icons-react';
import { useLocation } from 'react-router-dom';
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
];

const authenticatedLinks = [
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
      { link: '/forum', label: 'Forums' },
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
  const location = useLocation();

  const generateMenuItems = (menuLinks:any) => {
    return menuLinks.map((link:any) => {
      const menuItems = link.links?.map((item:any) => (
        <Menu.Item key={item.link} component="a" href={item.link}>{item.label}</Menu.Item>
      ));

      if (menuItems) {
        return (
          <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
            <Menu.Target>
              <a
                href={link.link}
                className={`${classes.link} ${location.pathname === '/404' ? classes.link404 : ''}`}
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
          className={`${classes.link} ${location.pathname === '/404' ? classes.link404 : ''}`}
        >
          {link.label}
        </a>
      );
    });
  };

  let items = generateMenuItems(links);

  if (user && user.token) {
    items = items.concat(generateMenuItems(authenticatedLinks));

    items.push(
      <a
        key="contul-meu"
        href="/my-account"
        className={`${classes.link} ${location.pathname === '/404' ? classes.link404 : ''}`}
      >
        Contul meu
      </a>
    );

    if (user.role === 'UVT Admin') {
      items.push(
        <a
          key="admin-panel"
          href="/admin"
          className={`${classes.link} ${location.pathname === '/404' ? classes.link404 : ''}`}
        >
          Admin Panel
        </a>
      );
    }
  }

  // Determine the navbar class based on the current location
  const navbarClass = location.pathname === '/404' ? `${classes.header} ${classes.header404}` : classes.header;

  return (
    <header className={navbarClass}>
      <Container size="md">
        <div className={classes.inner}>
          <div className={classes.uvtLogo}>
            <a href="/" className={classes.link}> <img src={Logoooo} alt="Logo" /> </a>
          </div>
          <Group gap={5} visibleFrom="sm" className={classes.desktopMenu}>
            {items}
          </Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
        </div>
        {opened && (
          <div className={classes.mobileMenu}>
            {items}
          </div>
        )}
      </Container>
    </header>
  );
}
