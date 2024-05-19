import React, { useEffect, useState } from 'react';
import JobCard from '../../components/JobCard/JobCard';
import classes from './Jobs.module.css';
import Job from '../../Interfaces/Job';

const JobsPage: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch('http://localhost:8090/job');
        const contentType = response.headers.get('content-type');

        if (contentType && contentType.includes('application/json')) {
          const data = await response.json();
          console.log('Data:', data);
          
          setJobs(data);
        } else {
          const text = await response.text();
          setError('Received an unexpected response from the server');
          console.error('Unexpected response:', text);
        }
      } catch (error) {
        setError('Error fetching jobs');
        console.error('Error fetching jobs:', error);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <h1>Jobs Page</h1>
      </div>
      {error && <div className={classes.error}>{error}</div>}
      <div className={classes.jobsContainer}>
        {jobs.map((job) => (
          <JobCard
            key={job.id}
            image={typeof job.logoUrl === 'string' ? job.logoUrl : null} // Ensure this is the correct field
            title={job.title}
            author={job.user?.username || 'Anonymous'}
            date={job.date}
            company={job.company}
            location={job.location}
            link={`/jobs/${job.id}`}
          />
        ))}
      </div>
    </div>
  );
};

export default JobsPage;
