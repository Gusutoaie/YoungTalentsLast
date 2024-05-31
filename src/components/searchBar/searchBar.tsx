import React, { useState, useEffect, useRef } from 'react';
import { TextInput, TextInputProps, ActionIcon, useMantineTheme, rem } from '@mantine/core';
import { IconSearch, IconArrowRight } from '@tabler/icons-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Job from '../../Interfaces/Job'; // Adjust the import path as necessary

const SearchBarCard: React.FC<TextInputProps> = (props) => {
  const theme = useMantineTheme();
  const [suggestions, setSuggestions] = useState<Job[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (searchTerm) {
        try {
          const response = await axios.get<Job[]>(`http://localhost:8090/job/search`, {
            params: { query: searchTerm },
          });
          setSuggestions(response.data);
          setError('');
          setShowSuggestions(true);
        } catch (error) {
          console.error('Error fetching search suggestions', error);
          setError('Failed to fetch suggestions');
          setShowSuggestions(false);
        }
      } else {
        setSuggestions([]);
        setError('');
        setShowSuggestions(false);
      }
    };

    fetchSuggestions();
  }, [searchTerm]);

  const handleSuggestionClick = (id: string) => {
    navigate(`/jobs/${id}`);
    setShowSuggestions(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
      setShowSuggestions(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={wrapperRef} style={{ position: 'relative' }}>
      <TextInput
        radius="xl"
        size="md"
        placeholder="Search questions"
        rightSectionWidth={42}
        leftSection={<IconSearch style={{ width: rem(18), height: rem(18) }} stroke={1.5} />}
        rightSection={
          <ActionIcon size={32} radius="xl" color={theme.primaryColor} variant="filled" style={{ margin: rem(0) }}>
            <IconArrowRight style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
        }
        onChange={(event) => setSearchTerm(event.currentTarget.value)}
        {...props}
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {showSuggestions && suggestions.length > 0 && (
        <ul style={{
          listStyleType: 'none',
          padding: 0,
          marginTop: '10px',
          position: 'absolute',
          width: '100%',
          backgroundColor: 'white',
          boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
          zIndex: 10,
        }}>
          {suggestions.map((suggestion) => (
            <li
              key={suggestion.id}
              onClick={() => handleSuggestionClick(suggestion.id)}
              style={{ cursor: 'pointer', padding: '10px', borderBottom: '1px solid #ddd' }}
            >
              {suggestion.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBarCard;
