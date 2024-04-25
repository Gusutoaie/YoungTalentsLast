import React from 'react';
import { events } from '../interfaces/Event';
import { EventComponent } from './EventComponent';
import classes from './CalendarComponent.module.css';

const CalendarComponent: React.FC = () => {
  return (
    <div className={classes.calendar}>
      <div className={classes.calendarHeader}>Upcoming events</div>
      {events.map((event) => (
        <EventComponent key={event.id} event={event} />
      ))}
    </div>
  );
};

export default CalendarComponent;