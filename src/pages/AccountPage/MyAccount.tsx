import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../hookt';
import { IconSettings } from '@tabler/icons-react';
import classes from './MyAccount.module.css';
import { updateUser } from '../../slices/userSlice'; // Import the updateUser action

const MyAccount: React.FC = () => {
    const user = useAppSelector((state) => state.user); // Fetch user data from Redux store
    const dispatch = useAppDispatch();
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [avatar, setAvatar] = useState(user.profilePicturePath);
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        username: user.username,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        birthDate: user.birthDate,
        phoneNumber: user.phoneNumber,
        faculty: '',
        yearOfStudy: user.yearOfStudy,
        password: '',
    });

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            setAvatar(URL.createObjectURL(file));
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const updatedUser = {
            ...user,
            ...formData,
            faculty: {
                id: 1,
                name: 'Faculty of ',
            },
            profilePicturePath: avatar,
        };
        dispatch(updateUser(updatedUser)); // Dispatch updateUser action with form data
        setIsEditing(false);
    };

    return (
        <div className={classes.container}>
            <div className={classes.subContainer}>
                <div className={classes.header}>
                    <span className={classes.headerPicture}>
                        <a href="/" className={classes.link}>Home</a>
                    </span>
                    <div className={classes.UserHeader}>
                        <div className={classes.userAvatar}>
                            <img src={avatar} alt="User avatar" />
                            <input
                                type="file"
                                accept="image/*"
                                className={classes.avatarUpload}
                                onChange={handleAvatarChange}
                            />
                        </div>
                        <div className={classes.userDetails}>
                            <span className={classes.userName}>{user.username}</span>
                        </div>
                        <div className={classes.userActions}>
                            <IconSettings onClick={toggleDropdown} className={classes.userIcon} />
                            {dropdownVisible && (
                                <div className={classes.dropdownMenu}>
                                    <button type="button" className={classes.link} onClick={() => setIsEditing(true)}>Edit Profile</button>
                                    <a href="/logout" className={classes.link}>Logout</a>
                                </div>
                            )}
                        </div>  
                    </div>
                </div>

                <div className={classes.content}>
                    <div className={classes.contentHeader}>
                        <nav className={classes.contentHeaderNav}>
                            <a href="#" className={classes.link}>About</a>
                            <a href="#" className={classes.link}>Posts</a>
                            <a href="#" className={classes.link}>Comments</a>
                        </nav>
                    </div>

                    <form onSubmit={handleSubmit} className={classes.userProperties}>
                        <div className={classes.userProperty}>
                            <label className={classes.userPropertyTitle}>Username:</label>
                            <input
                                className={classes.userPropertyValue}
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                readOnly={!isEditing}
                            />
                            <label className={classes.userPropertyTitle}>Email:</label>
                            <input
                                className={classes.userPropertyValue}
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                readOnly={!isEditing}
                            />
                            <label className={classes.userPropertyTitle}>First Name:</label>
                            <input
                                className={classes.userPropertyValue}
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                readOnly={!isEditing}
                            />
                            <label className={classes.userPropertyTitle}>Last Name:</label>
                            <input
                                className={classes.userPropertyValue}
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                readOnly={!isEditing}
                            />
                            <label className={classes.userPropertyTitle}>Birth Date:</label>
                            <input
                                className={classes.userPropertyValue}
                                name="birthDate"
                                value={formData.birthDate}
                                onChange={handleChange}
                                readOnly={!isEditing}
                            />
                            <label className={classes.userPropertyTitle}>Phone Number:</label>
                            <input
                                className={classes.userPropertyValue}
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                readOnly={!isEditing}
                            />
                            <label className={classes.userPropertyTitle}>Faculty:</label>
                            <input
                                className={classes.userPropertyValue}
                                name="faculty"
                                value={"Faculty of "}
                                onChange={handleChange}
                                readOnly={!isEditing}
                            />
                            <label className={classes.userPropertyTitle}>Year of Study:</label>
                            <input
                                className={classes.userPropertyValue}
                                name="yearOfStudy"
                                value={formData.yearOfStudy}
                                onChange={handleChange}
                                readOnly={!isEditing}
                            />
                            {isEditing && (
                                <>
                                    <label className={classes.userPropertyTitle}>Password:</label>
                                    <input
                                        type="password"
                                        className={classes.userPropertyValue}
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                    />
                                    <button type="submit" className={classes.submitButton}>Submit</button>
                                </>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MyAccount;
