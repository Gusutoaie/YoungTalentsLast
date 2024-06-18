import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import classes from './FacultyPage.module.css';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';

interface Faculty {
    name: string;
    description: string;
    dean: { firstName: string; lastName: string } | null;
    proDean: { firstName: string; lastName: string } | null;
}

const FacultyPage: React.FC = () => {
    const { facultyName } = useParams<{ facultyName: string }>();
    const [content, setContent] = useState<Faculty | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchFacultyContent = async () => {
            try {
                const response = await axios.get<Faculty>(`http://localhost:8090/api/faculties/${facultyName}`);
                setContent(response.data);
            } catch (err) {
                setError('Failed to fetch faculty content');
            } finally {
                setLoading(false);
            }
        };

        fetchFacultyContent();
    }, [facultyName]);

    const breadcrumbItems = [
        { title: 'Acasa', href: '/' },
        { title: 'Facultati', href: '/facultati' },
        { title: content?.name ? (content.name.length > 30 ? `${content.name.substring(0, 27)}...` : content.name) : 'Loading...', href: `/faculty/${facultyName}` }
    ];

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className={classes.container}>
            <div className={classes.title}>
                <h2>{content?.name}</h2>
            </div>
            <div className={classes.subContainer}>
                <BreadCrumbs items={breadcrumbItems} />
                <p className={classes.description}>{content?.description}</p>
                <div className={classes.deans}>
                    <div className={classes.dean}>
                        <div className={classes.decanPicture}>
                            <img src="https://via.placeholder.com/150" alt="Dean" />
                        </div>
                        <div className={classes.decanTitle}>
                            <h2>DECAN,</h2>
                            <p>{content?.dean ? `${content.dean.firstName} ${content.dean.lastName}` : 'Prof. Univ. Dr. Dana PETCU'}</p>
                        </div>
                        <div className={classes.decanButton}>
                            <button className={classes.eventButton}>Evenimente</button>
                        </div>
                    </div>
                    <div className={classes.decanFooter}>
                        <p>Poti descoperi mai multe informatii accesând pagina web a facultății <a href="https://www.info.uvt.ro/" target="_blank" rel="noopener noreferrer">https://www.info.uvt.ro/</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FacultyPage;
