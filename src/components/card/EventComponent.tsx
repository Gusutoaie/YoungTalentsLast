import {Event} from '../interfaces/TypeEvent';
import classes from './CalendarComponent.module.css';
interface EventComponentProps {
    event: Event;
}

export const EventComponent: React.FC<EventComponentProps> = ({ event }) => {
    return (
      <div className={classes.event}>
        <div className={classes.eventDate}>{event.date}</div>
        <div className={classes.eventTitle}>{event.title}</div>
        <div className="event-description">{event.description}</div>
      </div>
    );
  };