import React from 'react';
import UserAreaChart from '../cards/statsCards'; // Ensure correct path
import classes from './stats.module.css';

const StatsPage: React.FC = () => {
  return (
    <div className={classes.statsContainer}>
      <div className={classes.cardRow}>
        <UserAreaChart />
      </div>
    </div>
  );
};

export default StatsPage;
