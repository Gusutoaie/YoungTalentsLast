import React, { useState, useEffect } from 'react';
import axios from 'axios';
import classes from './Members.module.css';
import User from '../../Interfaces/User';
import MembersSearch from '../../components/membersSearchBar/MembersSearch';
const Members: React.FC = () => {
  const [members, setMembers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const baseURL = 'http://localhost:8090'; // Replace with your backend base URL

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await axios.get<User[]>('http://localhost:8090/user/all'); // Replace with your API endpoint
        setMembers(response.data);
        setLoading(false);
      } catch (error) {
        setError(error as Error);
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const fallbackImage = 'https://via.placeholder.com/150'; // Add a fallback image URL

  return (
    <div className={classes.container}>

    
    <div className={`${classes['responsive-container-block']} ${classes['outer-container']}`}>
      <div className={`${classes['responsive-container-block']} ${classes['inner-container']}`}>
        <p className={`${classes['text-blk']} ${classes['section-head-text']}`}>
          Cunoasteti membrii comunitatii alumni?
        </p>
        <p className={`${classes['text-blk']} ${classes['section-subhead-text']}`}>
          <MembersSearch placeholder="Cauta membrii" />
        </p>
        <div className={classes['responsive-container-block']}>
          {members.map((member) => (
            <div key={member.id} className={`${classes['responsive-cell-block']} ${classes['wk-desk-3']} ${classes['wk-ipadp-3']} ${classes['wk-tab-6']} ${classes['wk-mobile-12']} ${classes['team-card-container']}`}>
              <div className={classes['team-card']}>
                <div className={classes['img-wrapper']}>
                  <img
                    className={classes['team-img']}
                    src={member.profilePicturePath ? `${baseURL}${member.profilePicturePath}` : fallbackImage}
                    alt={`${member.firstName} ${member.lastName}`}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = fallbackImage;
                      console.error(`Failed to load image: ${baseURL}${member.profilePicturePath}`);
                    }}
                  />
                </div>
                <p className={`${classes['text-blk']} ${classes['name']}`}>
                  {member.firstName} {member.lastName}
                </p>
                <p className={`${classes['text-blk']} ${classes['position']}`}>
                  {member.actualJob}
                </p>
                <div className={classes['social-media-links']}>
                  <a href={`mailto:${member.email}`} target="_blank" rel="noopener noreferrer">
                    <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-mail.svg" alt="Email" />
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-twitter.svg" alt="Twitter" />
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-fb.svg" alt="Facebook" />
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-insta.svg" alt="Instagram" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Members;
