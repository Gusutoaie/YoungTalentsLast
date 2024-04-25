import classes from './HomePage.module.css';
import CalendarComponent from '../../components/card/CalendarComponent';
import TrendingPosts from '../../components/card/TrendingPostsComponent';
import NavbarNested from '../../components/leftSide/NavbarNested';
import { AddNewButton } from '../../components/AddButton/AddNewButon';
interface Props { }

import {
    IconSearch,
} from '@tabler/icons-react';
import { Outlet } from 'react-router';


const HomePage = (props: Props) => {
    return (
        <div className={classes.container}>

            <div className={classes.mainSection}>
                <div className={classes.searchContainer}>
                    <div className={classes.centerWrapper}>
                        <div className={classes.searchBar}>
                            <IconSearch className={classes.searchLupa} />
                            <input className={classes.search} type="text" placeholder="Search..." />
                        </div>
                    </div>
                    <div className={classes.addPost}>
                        <AddNewButton />
                    </div>
                </div>
                <Outlet />

            </div>

            <div className={classes.leftSection}>
                <NavbarNested />
            </div>

            <div className={classes.rightSection}>
                <CalendarComponent />
                <br></br>
                <TrendingPosts />
            </div>
        </div>
    );
};

export default HomePage;