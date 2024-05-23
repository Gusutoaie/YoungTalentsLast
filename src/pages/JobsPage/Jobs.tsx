import React, { useEffect, useState } from 'react';
import JobCard from '../../components/JobCard/JobCard';
import classes from './Jobs.module.css';
import Job from '../../Interfaces/Job';
import { TextInput, TextInputProps, ActionIcon, useMantineTheme, rem } from '@mantine/core';
import { IconSearch, IconArrowRight } from '@tabler/icons-react';

type FilterType = 'date' | 'type' | 'remote' | 'experience';

const JobsPage: React.FC = (props: TextInputProps) => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState({
    date: new Set<string>(),
    type: new Set<string>(),
    remote: new Set<string>(),
    experience: new Set<string>(),
  });

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

  const handleFilterChange = (name: FilterType, value: string) => {
    setFilters((prevFilters) => {
      const newFilters = new Set(prevFilters[name]);
      if (newFilters.has(value)) {
        newFilters.delete(value);
      } else {
        newFilters.add(value);
      }
      return { ...prevFilters, [name]: newFilters };
    });
  };

  const filteredJobs = jobs.filter(job => {
    const matchDate = filters.date.size === 0 || Array.from(filters.date).some(filter => {
      if (filter === 'Ultimele 24h') return new Date(job.date) >= new Date(new Date().setDate(new Date().getDate() - 1));
      if (filter === 'Ultimele 3 zile') return new Date(job.date) >= new Date(new Date().setDate(new Date().getDate() - 3));
      if (filter === 'Ultimele 7 zile') return new Date(job.date) >= new Date(new Date().setDate(new Date().getDate() - 7));
      if (filter === 'Ultima lună') return new Date(job.date) >= new Date(new Date().setMonth(new Date().getMonth() - 1));
      return false;
    });

    const matchType = filters.type.size === 0 || filters.type.has(job.tipOferta);
    const matchRemote = filters.remote.size === 0 || filters.remote.has(job.remote);
    const matchExperience = filters.experience.size === 0 || filters.experience.has(job.experienta);
    return matchDate && matchType && matchRemote && matchExperience;
  });

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
                {['Ultimele 24h', 'Ultimele 3 zile', 'Ultimele 7 zile', 'Ultima lună'].map(option => (
                  <div key={option}>
                    <input
                      type="checkbox"
                      name="date"
                      value={option}
                      checked={filters.date.has(option)}
                      onChange={(e) => handleFilterChange('date', e.target.value as FilterType)}
                    />
                    <label>{option}</label>
                  </div>
                ))}
              </div>
            </div>

            <div className={classes.filterBody}>
              <h3>Tip ofertă</h3>
              <div className={classes.filterOptions}>
                {['Job', 'Internship', 'Summer Practice 2024', 'Academy Programs'].map(option => (
                  <div key={option}>
                    <input
                      type="checkbox"
                      name="type"
                      value={option}
                      checked={filters.type.has(option)}
                      onChange={(e) => handleFilterChange('type', e.target.value as FilterType)}
                    />
                    <label>{option}</label>
                  </div>
                ))}
              </div>
            </div>

            <div className={classes.filterBody}>
              <h3>Remote</h3>
              <div className={classes.filterOptions}>
                {['Da', 'Nu'].map(option => (
                  <div key={option}>
                    <input
                      type="checkbox"
                      name="remote"
                      value={option}
                      checked={filters.remote.has(option)}
                      onChange={(e) => handleFilterChange('remote', e.target.value as FilterType)}
                    />
                    <label>{option}</label>
                  </div>
                ))}
              </div>
            </div>

            <div className={classes.filterBody}>
              <h3>Experiență</h3>
              <div className={classes.filterOptions}>
                {['Fără experiență', '0 - 1 an', '> 1 an'].map(option => (
                  <div key={option}>
                    <input
                      type="checkbox"
                      name="experience"
                      value={option}
                      checked={filters.experience.has(option)}
                      onChange={(e) => handleFilterChange('experience', e.target.value as FilterType)}
                    />
                    <label>{option}</label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className={classes.rightSide}>
          {error && <div className={classes.error}>{error}</div>}
          <div className={classes.jobsContainer}>
            {filteredJobs.map((job) => (
              <JobCard
                key={job.id}
                image={job.logoUrl}
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
