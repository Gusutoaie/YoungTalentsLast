import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import classes from './Job.module.css';
import { IconMapPin, IconBriefcase, IconFileDescription, IconUserQuestion } from '@tabler/icons-react';

interface Job {
    id: string;
    title: string;
    company: string;
    location: string;
    description: string;
    responsibilities: string;
    mandatorySkills: string;
    niceToHaveSkills: string;
}

const Job: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [jobDetails, setJobDetails] = useState<Job | null>(null);

    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');
    const [cv, setCv] = useState<File | null>(null);

    useEffect(() => {
        if (id) {
            fetch(`http://localhost:8090/job/${id}`)
                .then(response => response.json())
                .then(data => setJobDetails(data))
                .catch(error => console.error('Error fetching job details:', error));
        } else {
            console.error('Invalid job ID');
            console.error('id:', id);
        }
    }, [id]);

    const handleCvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setCv(e.target.files[0]);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!cv) {
            console.error('No CV file selected');
            return;
        }

        const formData = new FormData();
        formData.append('subject', subject);
        formData.append('body', body);
        formData.append('cv', cv);

        try {
            const response = await fetch(`http://localhost:8090/apply/${id}`, {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                console.log('Application submitted successfully');
            } else {
                console.error('Error submitting application:', response.statusText);
            }
        } catch (error) {
            console.error('Error submitting application:', error);
        }
    };

    if (!jobDetails) {
        return <div>Loading...</div>;
    }

    return (
        <div className={classes.container}>
            <div className={classes.splitter}>
                <div className={classes.formContainer}>
                    <div className={classes.formHeader}>
                        <span className={classes.title}>{jobDetails.title}</span>
                        <span className={classes.company}>
                            <IconBriefcase size={20} />
                            {jobDetails.company}
                        </span>
                        <span className={classes.location}>
                            <IconMapPin size={20} />
                            {jobDetails.location}
                        </span>
                    </div>
                    <div>
                        <h3><IconFileDescription /> Job Description</h3>
                        <ReactQuill value={jobDetails.description} readOnly={true} theme="bubble" className={classes.quill} />
                    </div>
                    <div>
                        <h3><IconUserQuestion /> Responsibilities</h3>
                        <ReactQuill value={jobDetails.responsibilities} readOnly={true} theme="bubble" className={classes.quill} />
                    </div>
                    <div>
                        <h3>Mandatory Skills Description</h3>
                        <ReactQuill value={jobDetails.mandatorySkills} readOnly={true} theme="bubble" className={classes.quill} />
                    </div>
                    <div>
                        <h3>Nice-to-Have Skills</h3>
                        <ReactQuill value={jobDetails.niceToHaveSkills} readOnly={true} theme="bubble" className={classes.quill} />
                    </div>
                </div>

                <div className={classes.rightSide}>
                    <h2>Apply for this Job</h2>
                    <form onSubmit={handleSubmit} className={classes.applyForm}>
                        <div className={classes.formGroup}>
                            <label htmlFor="subject">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                required
                            />
                        </div>
                        <div className={classes.formGroup}>
                            <label htmlFor="body">Body</label>
                            <ReactQuill
                                value={body}
                                onChange={setBody}
                                theme="snow"
                                className={`${classes.quill} ${classes.quillEditor}`}
                            />
                        </div>
                        <div className={classes.formGroup}>
                            <label htmlFor="cv">Attach CV</label>
                            <input
                                type="file"
                                id="cv"
                                onChange={handleCvChange}
                                accept=".pdf,.doc,.docx"
                                required
                            />
                        </div>
                        <button type="submit" className={classes.submitButton}>Apply</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Job;
