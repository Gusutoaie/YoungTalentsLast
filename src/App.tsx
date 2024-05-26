import './App.css'
import '@mantine/core/styles.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout/Layout';
import Register from './pages/RegisterPage/Register';
import HomePage from './pages/HomePage/HomePage';
import Login from './pages/LoginPage/Login';
import Noutati from './pages/NoutatiEvenimentePage/Noutati';
import JobsPage from './pages/JobsPage/Jobs';
import Job from './pages/JobsPage/Job';
import JobForm from './pages/AddJobPage/AddJob';
import About from './pages/AboutPage/About';
import Members from './pages/MembersPage/Members';
import MyAccount from './pages/AccountPage/MyAccount';
import Facultati from './pages/FacultatiPage/Facultati';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="noutati-evenimente" element={<Noutati />} />
          <Route path="jobs" element={<JobsPage />} />
          <Route path="jobs/:id" element={<Job />} />
          <Route path="add-job" element={<JobForm />} />
          <Route path="despre-noi" element={<About />} />
          <Route path="members" element={<Members />} />
          <Route path="my-account" element={<MyAccount />} />
          <Route path="facultati" element={<Facultati />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App
