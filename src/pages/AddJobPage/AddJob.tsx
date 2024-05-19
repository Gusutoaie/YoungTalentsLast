import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import classes from './AddJob.module.css';
import Job from '../../Interfaces/Job';

const JobForm: React.FC = () => {
  const [jobDetails, setJobDetails] = useState<Omit<Job, 'id' | 'date'>>({
    title: '',
    company: '',
    location: '',
    description: '',
    responsibilities: '',
    mandatorySkills: '',
    niceToHaveSkills: '',
    logoUrl: null,
    user: undefined,
  });

  const handleChange = (name: string, value: any) => {
    setJobDetails({ ...jobDetails, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setJobDetails({ ...jobDetails, logoUrl: e.target.files[0] });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('job', JSON.stringify({
      title: jobDetails.title,
      company: jobDetails.company,
      location: jobDetails.location,
      description: jobDetails.description,
      responsibilities: jobDetails.responsibilities,
      mandatorySkills: jobDetails.mandatorySkills,
      niceToHaveSkills: jobDetails.niceToHaveSkills,
    }));
    if (jobDetails.logoUrl) {
      formData.append('logo', jobDetails.logoUrl);
    }

    try {
      const response = await axios.post('http://localhost:8090/job', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Job added successfully:', response.data);
    } catch (error) {
      console.error('Error adding job:', error);
    }
  };

  return (
    <div className={classes.formContainer}>
      <form onSubmit={handleSubmit} className={classes.form}>
        <div className={classes.formGroup}>
          <label htmlFor="title" className={classes.label}>Job Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={jobDetails.title}
            onChange={(e) => handleChange('title', e.target.value)}
            required
            className={classes.input}
          />
        </div>

        <div className={classes.formGroup}>
          <label htmlFor="company" className={classes.label}>Company Name</label>
          <input
            type="text"
            id="company"
            name="company"
            value={jobDetails.company}
            onChange={(e) => handleChange('company', e.target.value)}
            required
            className={classes.input}
          />
        </div>

        <div className={classes.formGroup}>
          <label htmlFor="location" className={classes.label}>Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={jobDetails.location}
            onChange={(e) => handleChange('location', e.target.value)}
            required
            className={classes.input}
          />
        </div>

        <div className={classes.formGroup}>
          <label htmlFor="description" className={classes.label}>Job Description</label>
          <ReactQuill
            theme="snow"
            value={jobDetails.description}
            onChange={(value) => handleChange('description', value)}
            className={classes.quill}
          />
        </div>

        <div className={classes.formGroup}>
          <label htmlFor="responsibilities" className={classes.label}>Responsibilities</label>
          <ReactQuill
            theme="snow"
            value={jobDetails.responsibilities}
            onChange={(value) => handleChange('responsibilities', value)}
            className={`${classes.quill} ${classes.quillLarge}`}
          />
        </div>

        <div className={classes.formGroup}>
          <label htmlFor="mandatorySkills" className={classes.label}>Mandatory Skills Description</label>
          <ReactQuill
            theme="snow"
            value={jobDetails.mandatorySkills}
            onChange={(value) => handleChange('mandatorySkills', value)}
            className={classes.quill}
          />
        </div>

        <div className={classes.formGroup}>
          <label htmlFor="niceToHaveSkills" className={classes.label}>Nice-to-Have Skills</label>
          <ReactQuill
            theme="snow"
            value={jobDetails.niceToHaveSkills}
            onChange={(value) => handleChange('niceToHaveSkills', value)}
            className={classes.quill}
          />
        </div>

        <div className={classes.formGroup}>
          <label htmlFor="logo" className={classes.label}>Company Logo</label>
          <input
            type="file"
            id="logo"
            name="logo"
            onChange={handleFileChange}
            accept="image/*"
            className={classes.input}
          />
        </div>

        <button type="submit" className={classes.button}>Submit</button>
      </form>
    </div>
  );
};

export default JobForm;
