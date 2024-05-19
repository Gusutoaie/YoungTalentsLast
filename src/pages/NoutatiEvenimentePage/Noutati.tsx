import React from 'react';
import classes from './Noutati.module.css';
const Noutati: React.FC = () => {
    return (
        <div className={classes.container}>
            <div className={classes.title}>
                <h2>NOUTĂȚI & EVENIMENTE</h2>
            </div>
            <div className={classes.noutatiContainer}>
                

                <iframe className={classes.video} src= "https://www.uvt.ro/blog-pentru-uvterra/">
                </iframe>

            </div>

        </div>
    );
};

export default Noutati;