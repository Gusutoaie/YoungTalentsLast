import React from 'react';
import classes from './IntroductionComponent.module.css';

interface IntroductionComponentProps {
    // define your props here
}

const IntroductionComponent: React.FC<IntroductionComponentProps> = (props) => {
    return (
        <div className={classes.container}>
          <div className={classes.title}>
            <span className={classes.postLogo}></span>
            <span className={classes.postHeader}>
                <div className={classes.postTitle}>
                    <a href="" className={classes.postTitleText}>Probleme/Recomandari Software</a>
                </div>
                <div className={classes.startedBy}>
                    <span className={classes.startedByText}>Started by  
                     <a href="#"> Ovidiu Marius</a>
                     </span>
                </div>
            </span>
          </div>
          <div className={classes.replies}>
            <span className={classes.repliesCount}>
                <div className={classes.repliesCountNumber}>16187</div>
                <div className={classes.repliesCountText}>replies</div>
            </span>
            
          </div>
          <div className={classes.person}>
                <span className={classes.personName}>
                    <div className={classes.personNameText}>
                        <a href="#">Ovidiu Marius</a>
                    </div>
                    <div className={classes.personDate}>19/04/2024 - 23:00:48</div>

                </span>
          </div>
        </div>
    );
}

export default IntroductionComponent;