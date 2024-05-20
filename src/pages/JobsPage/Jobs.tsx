import React, { useEffect, useState } from 'react';
import JobCard from '../../components/JobCard/JobCard';
import classes from './Jobs.module.css';
import Job from '../../Interfaces/Job';
import { TextInput, TextInputProps, ActionIcon, useMantineTheme, rem } from '@mantine/core';
import { IconSearch, IconArrowRight } from '@tabler/icons-react';

const JobsPage: React.FC = (props: TextInputProps) => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [error, setError] = useState<string | null>(null);
  const theme = useMantineTheme();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch('http://localhost:8090/job');
        const contentType = response.headers.get('content-type');

        if (contentType && contentType.includes('application/json')) {
          const data = await response.json();
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
      <div className={classes.topHeader}>


        <div className={classes.header}>
          <div className={classes.search}>
          <TextInput
      radius="xl"
      size="md"
      placeholder="Cuvinte cheie"
      rightSectionWidth={42}
      leftSection={<IconSearch style={{ width: rem(18), height: rem(18) }} stroke={1.5} />}
      rightSection={
        <ActionIcon size={32} radius="xl" color={theme.primaryColor} variant="filled">
          <IconArrowRight style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
        </ActionIcon>
      }
      {...props}
    />
          </div>
        </div>
      </div>
      <div className={classes.mainBody}>
        <div className={classes.leftSide}>

          <div className={classes.filter}>
            <div className={classes.filterBody}>


              <h3>Vechime anunț</h3>
              <div className={classes.filterOptions}>
                <div>
                  <input type="checkbox" />
                  <label>Ultimele 24h</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label>Ultimele 3 zile</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label>Ultimele 7 zile</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label>Ultima lună</label>
                </div>
              </div>
            </div>

            <div className={classes.filterBody}>
                <h3>Tip ofertă</h3>
                <div className={classes.filterOptions}>
                  <div>
                    <input type="checkbox" />
                    <label>Job</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label>Internship</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label>Summer Practice 2024</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label>Academy Programs</label>
                  </div>
                </div>
              </div>
              <div className={classes.filterBody}>
                <h3>Remote</h3>
                <div className={classes.filterOptions}>
                  <div>
                    <input type="checkbox" />
                    <label>Da</label>
                    </div>
                </div>
              </div>

              <div className={classes.filterBody}>
                <h3>Experiență</h3>
                <div className={classes.filterOptions}>
                  <div>
                    <input type="checkbox" />
                    <label>Fără experiență</label>
                  </div>

                  <div>
                    <input type="checkbox" />
                    <label>0 - 1 an</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label>{'>'} 1 an</label>
                  </div>
                </div>
              </div>
          </div>
        </div>

        <div className={classes.rightSide}>
          {error && <div className={classes.error}>{error}</div>}
          <div className={classes.jobsContainer}>
            {jobs.map((job) => (
              <JobCard
                key={job.id}
                image={job.logoUrl} // Ensure this is a URL string
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
      </div>


    </div>
  );
};

export default JobsPage;
