import React, { useEffect, useState } from 'react';
import { AreaChart } from '@mantine/charts';
import { fetchUserData, processUserData } from '../services/usersService'; // Update the path as needed
import classes from './statsCards.module.css';
interface RoleCountsByDate {
  date: string;
  'Total Users': number;
  'Simple Users': number;
  'UVT Admins': number;
  Partners: number;
  Decans: number;
  'Pro Decans': number;
}

const statsCards: React.FC = () => {
  const [data, setData] = useState<RoleCountsByDate[]>([]);

  useEffect(() => {
    const getData = async () => {
      const users = await fetchUserData();
      const processedData = processUserData(users);
      setData(processedData);
    };

    getData();
  }, []);
  console.log(data);

  const dataTest = [
    { date: '2021-01-01', 'Total Users': 100, 'Simple Users': 80, 'UVT Admins': 10, Partners: 5, Decans: 3, 'Pro Decans': 2 },
    { date: '2021-01-02', 'Total Users': 120, 'Simple Users': 90, 'UVT Admins': 15, Partners: 10, Decans: 3, 'Pro Decans': 2 },
    { date: '2021-01-03', 'Total Users': 130, 'Simple Users': 100, 'UVT Admins': 15, Partners: 10, Decans: 3, 'Pro Decans': 2 },
    { date: '2021-01-04', 'Total Users': 140, 'Simple Users': 110, 'UVT Admins': 15, Partners: 10, Decans: 3, 'Pro Decans': 2 },
    { date: '2021-01-05', 'Total Users': 150, 'Simple Users': 120, 'UVT Admins': 15, Partners: 10, Decans: 3, 'Pro Decans': 2 },
    { date: '2021-01-06', 'Total Users': 160, 'Simple Users': 130, 'UVT Admins': 15, Partners: 10, Decans: 3, 'Pro Decans': 2 },
    { date: '2021-01-07', 'Total Users': 170, 'Simple Users': 140, 'UVT Admins': 15, Partners: 10, Decans: 3, 'Pro Decans': 2 },
    { date: '2021-01-08', 'Total Users': 180, 'Simple Users': 150, 'UVT Admins': 15, Partners: 10, Decans: 3, 'Pro Decans': 2 },
    { date: '2021-01-09', 'Total Users': 190, 'Simple Users': 160, 'UVT Admins': 15, Partners: 10, Decans: 3, 'Pro Decans': 2 },
    { date: '2021-01-10', 'Total Users': 200, 'Simple Users': 170, 'UVT Admins': 15, Partners: 10, Decans: 3, 'Pro Decans': 2 },
  ];

  return (
    <AreaChart
      className={classes.chart}
      h={200}
      data={dataTest}
      dataKey="date"
      series={[
        { name: 'Total Users', color: 'blue.6' },
        { name: 'Simple Users', color: 'green.6' },
        { name: 'UVT Admins', color: 'red.6' },
        { name: 'Partners', color: 'yellow.6' },
        { name: 'Decans', color: 'purple.6' },
        { name: 'Pro Decans', color: 'orange.6' },
      ]}
      curveType="linear"
    />
  );
};

export default statsCards;
