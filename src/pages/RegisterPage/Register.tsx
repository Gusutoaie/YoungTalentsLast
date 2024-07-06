import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../utils/registerUser';
import { FormData } from '../../Interfaces/FormData';
import classes from './Register.module.css';
import Nume from '../../components/RegisterComponents/Nume';
import Prenume from '../../components/RegisterComponents/Prenume';
import Username from '../../components/RegisterComponents/Username';
import Parola from '../../components/RegisterComponents/Parola';
import Email from '../../components/RegisterComponents/Email';
import JobActual from '../../components/RegisterComponents/JobActual';
import CompanieActuala from '../../components/RegisterComponents/CompanieActuala';
import FacultateaAbsolvita from '../../components/RegisterComponents/FacultateaAbsolvita';
import AnulAbsolvirii from '../../components/RegisterComponents/AnulAbsolvirii';
import DomeniuProfesional from '../../components/RegisterComponents/DomeniuProfesional';
import DevinoMentor from '../../components/RegisterComponents/DevinoMentor';
import Buttoane from '../../components/RegisterComponents/Buttoane';
import TermsAndConditions from '../../components/RegisterComponents/TermsAndContitions';

export default function Register() {
  const navigate = useNavigate();
  const [showTerms, setShowTerms] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    username: '',
    emailAddress: '',
    password: '',
    actualJob: '',
    actualCompany: '',
    professionalDomain: '',
    faculty: '',
    yearOfStudy: '',
    mentor: '',
  });

  const handleChange = (field: keyof FormData) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [field]: event.currentTarget.value,
    });
  };

  const handleSelectChange = (field: keyof FormData) => (value: string) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleCheckboxChange = (field: keyof FormData) => (value: string) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await registerUser(formData);
      alert('User registered successfully');
      console.log(response);
    } catch (error) {
      console.error('Error registering user:', error);
      alert('Failed to register user');
    }
  };

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <div className={classes.container} style={{ height: showTerms ? 'auto' : '100%' }}>
      <div className={classes.title}>
        <h2>Register Page</h2>
      </div>
      <div className={classes.forms}>
        <div className={classes.formsContainer}>
          <Nume value={formData.lastName} onChange={handleChange('lastName')} />
          <Prenume value={formData.firstName} onChange={handleChange('firstName')} />
          <Username value={formData.username} onChange={handleChange('username')} />
          <Parola value={formData.password} onChange={handleChange('password')} />
          {/* <ConfirmareParola value={formData.confirmPassword} onChange={handleChange('confirmPassword')} /> */}
          <Email value={formData.emailAddress} onChange={handleChange('emailAddress')} />
          <JobActual value={formData.actualJob} onChange={handleChange('actualJob')} />
          <CompanieActuala value={formData.actualCompany} onChange={handleChange('actualCompany')} />
          <FacultateaAbsolvita value={formData.faculty} onChange={handleSelectChange('faculty')} />
          <AnulAbsolvirii value={formData.yearOfStudy} onChange={handleChange('yearOfStudy')} />
          <DomeniuProfesional value={formData.professionalDomain} onChange={handleChange('professionalDomain')} />
          <DevinoMentor value={formData.mentor} onChange={handleCheckboxChange('mentor')} />
          <div className={classes.termsLink} onClick={() => setShowTerms(!showTerms)}>
            {showTerms ? 'Ascunde' : 'Arată termenii şi condiţiile'}
          </div>
          {showTerms && <TermsAndConditions />}
          <Buttoane onSubmit={handleSubmit} onLogin={handleLogin} />
        </div>
      </div>
    </div>
  );
}
