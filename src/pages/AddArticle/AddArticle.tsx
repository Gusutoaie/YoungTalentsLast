import React, { useState } from 'react';
import { useForm } from '@mantine/form';
import { Group, TextInput, Textarea, Button, Image } from '@mantine/core';
import classes from './AddArticle.module.css';
import Article from '../../Interfaces/Article';

const AddArticle: React.FC = () => {
    const [image, setImage] = useState<File | null>(null);
    const form = useForm<Article>({
        initialValues: {
            id: 0,
            title: '',
            description: '',
            date: '',
            location: '',
            image: '',
        },
    });

    const handleSubmit = (values: Article) => {
        const formData = new FormData();
        formData.append('title', values.title);
        formData.append('description', values.description);
        formData.append('date', values.date);
        formData.append('location', values.location);
        if (image) {
            formData.append('image', image);
        }

        fetch('http://localhost:8090/articles', {
            method: 'POST',
            body: formData,
        }).then(response => {
            if (response.ok) {
                alert('Article added successfully');
            } else {
                alert('Failed to add article');
            }
        });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            setImage(file);
        }
    };

    return (
        <div className={classes.container}>
            <form onSubmit={form.onSubmit(handleSubmit)}>
                <div className={classes.pathFile}>
                    <p>EȘTI AICI: Acasa {'>'} UVT {'>'} Adaugă un articol</p>
                </div>
                <div className={classes.ArticleDetailContainer}>
                    <div className={classes.header}>
                        <TextInput
                            className={classes.input}
                            placeholder="Title"
                            {...form.getInputProps('title')}
                        />
                        <div className={classes.border} />
                        <div className={classes.dateTime}>
                            <TextInput
                                className={classes.input}
                                placeholder="Date"
                                {...form.getInputProps('date')}
                            />
                            <TextInput
                                className={classes.input}
                                placeholder="Location"
                                {...form.getInputProps('location')}
                            />
                        </div>
                    </div>
                    <div className={classes.ArticleHeader}>
                        <div className={classes.socialNetwork}>
                            <div className={classes.socialButtons}>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                    className={classes.fileInput}
                                />
                                {image && (
                                    <Image
                                        src={URL.createObjectURL(image)}
                                        alt="Header"
                                        className={classes.headerImage}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                    <Textarea
                        placeholder="Write your article here..."
                        className={classes.textarea}
                        {...form.getInputProps('description')}
                    />
                    <Group mt="md">
                        <Button type="submit">Add Article</Button>
                    </Group>
                </div>
            </form>
        </div>
    );
};

export default AddArticle;
