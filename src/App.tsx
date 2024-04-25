import './App.css'
import '@mantine/core/styles.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import Articles from './components/article/Articles';
import Events from './components/events/Events';
import AccountPage from './pages/AccountPage/AccountPage';
import LikedPosts from './components/likedPosts/LikedPosts';
import YourComments from './components/YourComments/YourComments';
import SavedPosts from './components/SavedPosts/SavedPosts';
import Contacts from './components/YourContacts/YourContacts';
import Ideas from './components/YourIdea/YourIdea';
import Profile from './components/YourProfile/YourProfile';
import Tasks from './components/YourTasks/YourTasks';
import StartHere from './components/StartHere/StartHere';
import Introduction from './components/Introduction/Introduction';
import AboutPage from './pages/AboutPage/AboutPage';
import  EventDetailsCard from './components/EventComponent/EventComponent';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<HomePage />}


          >
            <Route index element={<Articles title="Home" />} />
            <Route path="events" element={<Events title="Events" />} />
            <Route path="event/:id" element={<EventDetailsCard  />} />
          
            <Route path="articles" element={<Articles title="Articles" />} />
            <Route path='announcements' element={<Articles title="Announcements" />} />
            <Route path='introduction' element={<Introduction title="Introduction" />} />
            <Route path='start' element={<StartHere title="Start Here" />} />



          </Route>
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="Account" element={<AccountPage />}
            > 
            <Route path="liked-posts" element={<LikedPosts title="Liked Posts" />} />
            <Route path="saved-posts" element={<SavedPosts title="Saved Posts" />} />
            <Route path="comments" element={<YourComments title="Your Comments" />} />
            <Route path="contacts" element={<Contacts title="Contacts" />} />
            <Route path="tasks" element={<Tasks title="Tasks" />} />
            <Route path="ideas" element={<Ideas title="Ideas" />} />
            <Route path="profile" element={<Profile title="Profile" />} />

          
          </Route>

        <Route path='About' element={<AboutPage  />}/>


        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
