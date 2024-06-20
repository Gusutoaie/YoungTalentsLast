import React, { useState } from 'react';
import Papa from 'papaparse';
import axios from 'axios';

const CsvUpload: React.FC = () => {
    const [file, setFile] = useState<File | null>(null);
    const [emails, setEmails] = useState<string[]>([]);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setFile(event.target.files[0]);
        }
    };

    const handleFileParse = () => {
        if (file) {
            Papa.parse(file, {
                complete: (result) => {
                    const parsedEmails = result.data
                        .map((row: any) => row[0])
                        .filter((email: string) => email && email.trim() !== '');
                    setEmails(parsedEmails);
                }
            });
        }
    };

    const handleSubmit = async () => {
        try {
            await axios.post('http://localhost:8090/api/admin/create-accounts', emails);
            alert('Accounts created successfully!');
        } catch (error) {
            console.error('Error creating accounts:', error);
            alert('Failed to create accounts.');
        }
    };

    return (
        <div>
            <input type="file" accept=".csv" onChange={handleFileChange} />
            <button onClick={handleFileParse}>Parse CSV</button>
            <button onClick={handleSubmit}>Submit</button>
            {emails.length > 0 && (
                <div>
                    <h3>Emails to be submitted:</h3>
                    <ul>
                        {emails.map((email, index) => (
                            <li key={index}>{email}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default CsvUpload;
