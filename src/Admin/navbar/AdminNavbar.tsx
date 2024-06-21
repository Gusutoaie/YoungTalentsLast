import React, { useState } from 'react';
import { Group, Code } from '@mantine/core';
import {
  IconBellRinging,
  IconUsersGroup,
  IconTimelineEvent,
  IconBrandHipchat,
  IconBriefcase2,
  IconSettings,
  IconSwitchHorizontal,
  IconLogout,
  IconChartInfographic,
} from '@tabler/icons-react';
import classes from './AdminNavbar.module.css';
import logooooo from '../../assets/images/logoooo.png';

const data = [
  {link: 'stats', label: 'Stats', icon: IconChartInfographic},
  { link: 'notifications', label: 'Notifications', icon: IconBellRinging },
  { link: 'members', label: 'Members', icon: IconUsersGroup },
  { link: 'events', label: 'Events & Articles', icon: IconTimelineEvent },
  { link: 'chats', label: 'Chats', icon: IconBrandHipchat },
  { link: 'jobs', label: 'Jobs', icon: IconBriefcase2 },
  { link: 'otherSettings', label: 'Other Settings', icon: IconSettings },
];

interface NavbarSimpleProps {
  onLinkClick?: (link: string) => void;
}

export function NavbarSimple({ onLinkClick = () => {} }: NavbarSimpleProps) {
  const [active, setActive] = useState('billing');

  const links = data.map((item) => (
    <a
      className={classes.link}
      data-active={item.label === active || undefined}
      href="#"
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
        onLinkClick(item.link); // Notify parent component
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Group className={classes.header} justify="space-between">
          <div className={classes.logoContainer}>
            <img src={logooooo} alt="logo" className={classes.logo} />
          </div>
          <Code fw={700}>v0.0.1</Code>
        </Group>
        {links}
      </div>

      <div className={classes.footer}>
        <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
          <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
          <span>Change account</span>
        </a>

        <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </a>
      </div>
    </nav>
  );
}
