import {
    TextInput,
    Code,
    UnstyledButton,
    Badge,
    rem,
  } from '@mantine/core';
  import { IconBulb, IconUser, IconCheckbox, IconSearch, IconPlus,  IconHeart, IconStar, IconMessage,IconUsersGroup} from '@tabler/icons-react';
  import classes from './AccountPage.module.css';
  import { UserButton } from './UserButton';
    import { useNavigate } from 'react-router';
import { Outlet } from 'react-router-dom';
  const links = [
    { icon: IconHeart, label: 'Liked Posts', notifications: 3 },
    { icon: IconStar, label: 'Saved Posts', notifications: 4 },
    { icon: IconMessage, label: 'Your Comments', notifications: 5 },
    { icon: IconUsersGroup, label: 'Contacts' },
    { icon: IconCheckbox, label: 'Tasks' },
    { icon: IconBulb, label: 'Ideas' },
    { icon: IconUser, label: 'Profile' },
  ];
  


  export default function AccountPage() {
  const navigate = useNavigate();

    const mainLinks = links.map((link) => (
      <UnstyledButton  key={link.label} className={classes.mainLink}  onClick={(
        link.label === 'Liked Posts' ? () => navigate('/account/liked-posts') :
        link.label === 'Saved Posts' ? () => navigate('/account/saved-posts') :
        link.label === 'Your Comments' ? () => navigate('/account/comments') :
        link.label === 'Contacts' ? () => navigate('/account/contacts') :
        link.label === 'Tasks' ? () => navigate('/account/tasks') :
        link.label === 'Ideas' ? () => navigate('/account/ideas') :
        link.label === 'Profile' ? () => navigate('/account/profile') :
         () => {}
      )}> 
        <div className={classes.mainLinkInner}>
          <link.icon size={20} className={classes.mainLinkIcon} stroke={1.5} />
          <span>{link.label}</span>
        </div>
        {link.notifications && (
          <Badge size="sm" variant="filled" className={classes.mainLinkBadge}>
            {link.notifications}
          </Badge>
        )}
      </UnstyledButton>
    ));
  
  
  
    return (
        <div className={classes.container}> 

      <nav className={classes.navbar}>
        <div className={classes.section}>
            <UserButton />
        </div>
        <TextInput
          placeholder="Search"
          size="xs"
          leftSection={<IconSearch style={{ width: rem(12), height: rem(12) }} stroke={1.5} />}
          rightSectionWidth={70}
          rightSection={<Code className={classes.searchCode}>Ctrl + K</Code>}
          styles={{ section: { pointerEvents: 'none' } }}
          mb="sm"
        />
  
        <div className={classes.section}>
          <div className={classes.mainLinks}>{mainLinks}</div>
        </div>
  
        <div className={classes.section}>
            
        </div>
      </nav>

        <div className={classes.content}>
            <Outlet />
        </div>

      </div>
    );
  }