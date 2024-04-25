import { Group, Code, ScrollArea, rem } from '@mantine/core';
import {
  IconNotes,
  IconCalendarStats,
  IconUsers,
  IconHome,

} from '@tabler/icons-react';
import { LinksGroup } from './NavbarLinksGroup';
import classes from './NavbarNested.module.css';

const mockdata = [
  { label: 'Home', icon: IconHome },
  {
    label: 'Get Started',
    icon: IconNotes,
    initiallyOpened: true,
    links: [
      { label: 'Start Here', link: '/start' },
      { label: 'Introductions', link: '/introduction' },
    
    ],
  },
  {
    label: 'Course',
    icon: IconCalendarStats,
    initiallyOpened: true,
    links: [
      { label: 'Lessons', link: '/lessons' },
      { label: 'Live sessions', link: '/live-sessions' },
      { label: 'Discussions', link: '/discussions' },
    ],
  },

  {
    label: 'Membership',
    initiallyOpened: true,
    icon: IconUsers,
    links: [
      { label: 'Group coaching', link: '/coaching' },
      { label: 'Find a mentor', link: '/find-mentor' },
      { label: 'Private events', link: '/private-events' },
    ],
  },
];




export default function NavbarNested() {
  const links = mockdata.map((item) => <LinksGroup {...item} key={item.label} />);

  return (
    <nav className={classes.navbar}>
        <div className={classes.header}>
        <Group justify="space-between">
          <Code  fw={700}>YoungTalents</Code>
        </Group>
      </div>
     

      <ScrollArea className={classes.links}>
        <div className={classes.linksInner}>{links}</div>
      </ScrollArea>
     
      
    </nav>
  );
}