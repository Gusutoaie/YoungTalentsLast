import React, { useEffect, useState, useRef } from 'react';
import JobCard from '../../components/JobCard/JobCard';
import classes from './Jobs.module.css';
import Job from '../../Interfaces/Job';
import { TextInput, TextInputProps, ActionIcon, useMantineTheme, rem } from '@mantine/core';
import { IconSearch, IconArrowRight } from '@tabler/icons-react';
import SearchBarCard from '../../components/searchBar/searchBar';

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
  const [citySuggestions, setCitySuggestions] = useState<string[]>([
    'București', 'Cluj-Napoca', 'Timișoara', 'Iași', 'Constanța', 'Brașov', 'Sibiu', 'Oradea', 'Arad', 'Pitești'
  ]);
  const [cityFilter, setCityFilter] = useState('');
  const [showCitySuggestions, setShowCitySuggestions] = useState(false);
  const cityInputRef = useRef<HTMLDivElement>(null);

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

  const handleCityInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCityFilter(e.target.value);
    if (e.target.value) {
      setShowCitySuggestions(true);
    } else {
      setShowCitySuggestions(false);
    }
  };

  const handleCityClick = (city: string) => {
    setCityFilter(city);
    setShowCitySuggestions(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (cityInputRef.current && !cityInputRef.current.contains(event.target as Node)) {
      setShowCitySuggestions(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.topHeader}>
        <div className={classes.header}>
          <div className={classes.search}>
            <SearchBarCard />
          </div>
        </div>
      </div>
      <div className={classes.mainBody}>
        <div className={classes.leftSide}>
          <div className={classes.filter}>
            <div className={classes.filterBody}>
              <h3>Orașe</h3>
              <div className={classes.cityInput} ref={cityInputRef}>
                <input
                  type="text"
                  value={cityFilter}
                  onChange={handleCityInputChange}
                  placeholder="ex: București"
                />
                {showCitySuggestions && (
                  <ul className={classes.suggestions}>
                    {citySuggestions.filter(city =>
                      city.toLowerCase().includes(cityFilter.toLowerCase())
                    ).slice(0, 5).map((city, index) => (
                      <li key={index} onClick={() => handleCityClick(city)}>
                        {city}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            <div className={classes.filterBody}>
              <h3>Vechime anunț</h3>
              <div className={classes.filterOptions}>
                <div className={classes.scrollableOptions}>
                  {['Ultimele 24h', 'Ultimele 3 zile', 'Ultimele 7 zile', 'Ultima lună', 'Ultimele 6 luni', 'Ultimul an'].map(option => (
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
