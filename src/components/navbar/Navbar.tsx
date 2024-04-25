import cx from 'clsx';
import { clearUser } from '../../slices/userSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import {
  Container,
  Avatar,
  UnstyledButton,
  Group,
  Text,
  Menu,
  Tabs,
  Burger,
  rem,
  useMantineTheme,
  Button,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  IconLogout,
  IconHeart,
  IconStar,
  IconMessage,
  IconSettings,
  IconTrash,
  IconChevronDown,
} from '@tabler/icons-react';
import classes from './Navbar.module.css';
import YoungLogo from '../../assets/images/young.png';
import { useNavigate } from 'react-router';
import { useAppSelector } from '../../hookt';
import avatar from '../../assets/images/avatar.png';
// const user = {
//   name: 'Ovidiu Marius',
//   email: 'ovidiu.gusutoaie95@e-uvt.ro',
//   image: 'https://d38we5ntdyxyje.cloudfront.net/458865/profile/avatar_medium_square.jpg',
// };

const tabs = [
  'Home',
  'Events',
  'Articles',
  'Announcements',
  'Account',
  'About',
];

export default function Navbar() {


  const user = useAppSelector((state) => state.user);
  const dispatch = useDispatch();


  const navigate = useNavigate();
  const theme = useMantineTheme();
  const [opened, { toggle }] = useDisclosure(false);
  const [userMenuOpened, setUserMenuOpened] = useState(false);

  const items = tabs.map((tab) => (
    <Tabs.Tab value={tab} key={tab} onClick={(
      tab === 'Home' ? () => navigate('/') :
      tab === 'Events' ? () => navigate('/events') :
      tab === 'Articles' ? () => navigate('/articles') :
      tab === 'Announcements' ? () => navigate('/announcements') :
      tab === 'Account' ? () => navigate('/account/profile') :
      tab === 'About' ? () => navigate('/about') :
       () => {}
    )} >
      {tab}
    </Tabs.Tab>
  ));

  return (
    <div className={classes.header}>
      <Container className={classes.mainSection} size="md">
        <Group justify="space-between">
            <div className={classes.YoungLogo}>
                <img src={YoungLogo}/>
            </div>
          <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />


          {user.id === 0 ? <Group justify="center" grow pb="xl" px="md">
            <Button   style={{ width: '150px' }} onClick={()=>navigate("/login")}  variant="default">Log in</Button>
            <Button  style={{ width: '150px' }} onClick={()=>navigate("/register")}   >Sign up</Button>
          </Group>
          :
          <Menu
          width={260}
          position="bottom-end"
          transitionProps={{ transition: 'pop-top-right' }}
          onClose={() => setUserMenuOpened(false)}
          onOpen={() => setUserMenuOpened(true)}
          withinPortal
        >
          <Menu.Target>
            <UnstyledButton
              className={cx(classes.user, { [classes.userActive]: userMenuOpened })}
            >
              <Group gap={7}>
                <Avatar src={avatar} alt={avatar} radius="xl" size={20} />
                <Text fw={500} size="sm" lh={1} mr={3}>
                  {user.email}
                </Text>
                <IconChevronDown style={{ width: rem(12), height: rem(12) }} stroke={1.5} />
              </Group>
            </UnstyledButton>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item
              leftSection={
                <IconHeart
                  style={{ width: rem(16), height: rem(16) }}
                  color={theme.colors.red[6]}
                  stroke={1.5}
                />
              }
            >
              Liked posts
            </Menu.Item>
            <Menu.Item
              leftSection={
                <IconStar
                  style={{ width: rem(16), height: rem(16) }}
                  color={theme.colors.yellow[6]}
                  stroke={1.5}
                />
              }
            >
              Saved posts
            </Menu.Item>
            <Menu.Item
              leftSection={
                <IconMessage
                  style={{ width: rem(16), height: rem(16) }}
                  color={theme.colors.blue[6]}
                  stroke={1.5}
                />
              }
            >
              Your comments
            </Menu.Item>

            <Menu.Label>Settings</Menu.Label>
            <Menu.Item
             onClick={() => { navigate("/account")}}
              leftSection={
                <IconSettings style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
              }
            >
              Account settings
            </Menu.Item>
       
            <Menu.Item
            onClick={() => {dispatch(clearUser()); navigate("/login")}}

              leftSection={
                <IconLogout style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
              }
            >
              Logout
            </Menu.Item>

            <Menu.Divider />

            <Menu.Label>Danger zone</Menu.Label>
           
            <Menu.Item
              color="red"
              leftSection={<IconTrash style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
            >
              Delete account
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
        
        }

         

         




        </Group>
      </Container>
      <Container size="md">
        <Tabs
          defaultValue="Home"
          variant="outline"
          visibleFrom="sm"
          classNames={{
            root: classes.tabs,
            list: classes.tabsList,
            tab: classes.tab,
          }}
        >
          <Tabs.List>{items}</Tabs.List>
        </Tabs>
      </Container>
    </div>
  );
}