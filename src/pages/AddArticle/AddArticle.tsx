import React, { useState } from 'react';
import { useForm } from '@mantine/form';
import { Group, TextInput, Button, Image } from '@mantine/core';
import { RichTextEditor, Link } from '@mantine/tiptap';
import { useEditor } from '@tiptap/react';
import Highlight from '@tiptap/extension-highlight';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import Superscript from '@tiptap/extension-superscript';
import SubScript from '@tiptap/extension-subscript';
import classes from './AddArticle.module.css';
import Article from '../../Interfaces/Article';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs'; // Adjust the import path as needed

const breadcrumbItems = [
    { title: 'Acasa', href: '/' },
    { title: 'Noutăți și Evenimente', href: '/noutati-evenimente' },
    { title: 'Adauga Noutăți și Evenimente', href: '/addArticle' }
];

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

    const editor = useEditor({
        extensions: [
            StarterKit,
            Underline,
            Link,
            Superscript,
            SubScript,
            Highlight,
            TextAlign.configure({ types: ['heading', 'paragraph'] }),
        ],
        content: '',
        onUpdate: ({ editor }) => {
            form.setFieldValue('description', editor.getHTML());
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

            <div className={classes.subContainer}>
                <div className={classes.content}>  
            <BreadCrumbs  items={breadcrumbItems}/>

            
            <form className={classes.addForm} onSubmit={form.onSubmit(handleSubmit)}>
                
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
                    <RichTextEditor editor={editor} className={classes.textarea}>
                        <RichTextEditor.Toolbar sticky stickyOffset={60}>
                            <RichTextEditor.ControlsGroup>
                                <RichTextEditor.Bold />
                                <RichTextEditor.Italic />
                                <RichTextEditor.Underline />
                                <RichTextEditor.Strikethrough />
                                <RichTextEditor.ClearFormatting />
                                <RichTextEditor.Highlight />
                                <RichTextEditor.Code />
                            </RichTextEditor.ControlsGroup>

                            <RichTextEditor.ControlsGroup>
                                <RichTextEditor.H1 />
                                <RichTextEditor.H2 />
                                <RichTextEditor.H3 />
                                <RichTextEditor.H4 />
                            </RichTextEditor.ControlsGroup>

                            <RichTextEditor.ControlsGroup>
                                <RichTextEditor.Blockquote />
                                <RichTextEditor.Hr />
                                <RichTextEditor.BulletList />
                                <RichTextEditor.OrderedList />
                                <RichTextEditor.Subscript />
                                <RichTextEditor.Superscript />
                            </RichTextEditor.ControlsGroup>

                            <RichTextEditor.ControlsGroup>
                                <RichTextEditor.Link />
                                <RichTextEditor.Unlink />
                            </RichTextEditor.ControlsGroup>

                            <RichTextEditor.ControlsGroup>
                                <RichTextEditor.AlignLeft />
                                <RichTextEditor.AlignCenter />
                                <RichTextEditor.AlignJustify />
                                <RichTextEditor.AlignRight />
                            </RichTextEditor.ControlsGroup>

                            <RichTextEditor.ControlsGroup>
                                <RichTextEditor.Undo />
                                <RichTextEditor.Redo />
                            </RichTextEditor.ControlsGroup>
                        </RichTextEditor.Toolbar>
                        <RichTextEditor.Content />
                    </RichTextEditor>
                    <Group mt="md">
                        <Button type="submit">Add Article</Button>
                    </Group>
                </div>
                </form>
            </div>
            </div>
        </div>
    );
};

export default AddArticle;
