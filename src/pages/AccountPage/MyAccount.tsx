import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../hookt'; // Import the useAppSelector and useAppDispatch hooks
import { IconSettings, IconUpload } from '@tabler/icons-react';
import classes from './MyAccount.module.css';
import axios from 'axios';
import { updateUser } from '../../slices/userSlice'; // Import the updateUser action
import { IconUser, IconPencil, IconMessageCircle2Filled } from '@tabler/icons-react';
import UVTAlumni from '../../assets/images/UVTAlumni.png';
import User from '../../Interfaces/User'; // Import the User interface

const MyAccount: React.FC = () => {
    const user: User = useAppSelector((state) => state.user); // Fetch user data from Redux store
    const backendIp = 'http://localhost:8090'; // Adjust based on your backend IP
    const dispatch = useAppDispatch();
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [avatar, setAvatar] = useState(user.profilePicturePath);
    const [headerImage, setHeaderImage] = useState(UVTAlumni);
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        username: user.username,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        birthDate: user.birthDate,
        phoneNumber: user.phoneNumber,
        faculty: user.faculty?.name || '', // Adjust based on your logic
        facultyDescription: user.faculty?.description || '',
        facultyDean: user.faculty?.dean?.username || '',
        facultyProDean: user.faculty?.proDean?.username || '',
        yearOfStudy: user.yearOfStudy,
        password: '',
    });

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const handleAvatarChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            const formData = new FormData();
            formData.append('file', file);
            formData.append('userId', user.id.toString()); // Add userId to the form data

            try {
                const response = await axios.post('http://localhost:8090/user/upload-profile-picture', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                if (response.status === 200) {
                    const imageUrl = response.data.imageUrl; // Adjust based on your backend response
                    setAvatar(imageUrl);
                    await updateUserProfile({ profilePicturePath: imageUrl });
                }
            } catch (error) {
                console.error('Error uploading avatar:', error);
            }
        }
    };

    const handleHeaderImageChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            const formData = new FormData();
            formData.append('file', file);
            formData.append('userId', user.id.toString()); // Add userId to the form data

            // try {
            //     const response = await axios.post('http://localhost:8090/user/upload-header-image', formData, {
            //         headers: {
            //             'Content-Type': 'multipart/form-data',
            //         },
            //     });
            //     if (response.status === 200) {
            //         const imageUrl = response.data.imageUrl; // Adjust based on your backend response
            //         setHeaderImage(imageUrl);
            //         await updateUserProfile({ headerImagePath: imageUrl });
            //     }
            // } catch (error) {
            //     console.error('Error uploading header image:', error);
            // }
        }
    };

    const updateUserProfile = async (updateData: Partial<User>) => {
        const updatedUser = {
            ...user,
            ...updateData,
        };

        try {
            const response = await axios.put('http://localhost:8090/user/update', updatedUser, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response.status === 200) {
                dispatch(updateUser(updatedUser)); // Dispatch updateUser action with form data
                setIsEditing(false);
            } else {
                // Handle error
                console.error('Failed to update user');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await updateUserProfile({
            username: formData.username,
            email: formData.email,
            password: formData.password,
            firstName: formData.firstName,
            lastName: formData.lastName,
            birthDate: formData.birthDate,
            phoneNumber: formData.phoneNumber,
            yearOfStudy: formData.yearOfStudy,
            faculty: {
                ...user.faculty,
                name: formData.faculty,
                description: formData.facultyDescription,
                dean: { ...user.faculty?.dean, username: formData.facultyDean },
                proDean: { ...user.faculty?.proDean, username: formData.facultyProDean },
            },
        });
    };

    return (
        <div className={classes.container}>
            <div className={classes.subContainer}>
                <div className={classes.header}>
                    <span className={classes.headerPicture}>
                        <img src={headerImage} className={classes.headerPictureImg} alt="UVT Alumni" />
                        <div className={classes.headerPictureUpload}>
                            <IconUpload className={classes.uploadIcon} />
                            <input
                                type="file"
                                accept="image/*"
                                className={classes.headerPictureInput}
                                onChange={handleHeaderImageChange}
                            />
                        </div>
                    </span>
                    <div className={classes.UserHeader}>
                        <div className={classes.userAvatar}>


                            <img src={backendIp+avatar} alt="" />
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
                            <a href="#" className={classes.link}>
                                <IconUser className={classes.icon} />
                                About
                            </a>
                            <a href="#" className={classes.link}>
                                <IconPencil className={classes.icon} />
                                Posts
                            </a>
                            <a href="#" className={classes.link}>
                                <IconMessageCircle2Filled className={classes.icon} />
                                Comments
                            </a>
                            {user.role?.name === 'UVT Admin' && (
                                <a href="/admin" className={classes.link}>
                                    <IconSettings className={classes.icon} />
                                    Admin Panel
                                </a>
                            )}
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
                                value={formData.faculty}
                                onChange={handleChange}
                                readOnly={!isEditing}
                            />
                            <label className={classes.userPropertyTitle}>Faculty Description:</label>
                            <input
                                className={classes.userPropertyValue}
                                name="facultyDescription"
                                value={formData.facultyDescription}
                                onChange={handleChange}
                                readOnly={!isEditing}
                            />
                            <label className={classes.userPropertyTitle}>Dean:</label>
                            <input
                                className={classes.userPropertyValue}
                                name="facultyDean"
                                value={formData.facultyDean}
                                onChange={handleChange}
                                readOnly={!isEditing}
                            />
                            <label className={classes.userPropertyTitle}>Pro-Dean:</label>
                            <input
                                className={classes.userPropertyValue}
                                name="facultyProDean"
                                value={formData.facultyProDean}
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
