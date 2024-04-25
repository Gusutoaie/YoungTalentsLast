import React from 'react';
import classes from './TrendingPostsComponent.module.css';
import { TrendingPostsEvent } from '../interfaces/TrendingPostsEvent';
import {TrendingPostModule} from './TrendingPostsModule';




const TrendingPosts: React.FC = () => {
  return (
    <div className={classes.TrendingPosts}>
      <div className={classes.TrendingPostsHeader}>Trending posts</div>
      {TrendingPostsEvent.map((event) => (
        <TrendingPostModule key={event.id} event={event} />
      ))}
    </div>
  );
};



export default TrendingPosts;