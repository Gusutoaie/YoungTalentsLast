import React from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './Facultati.module.css';

interface Faculty {
    name: string;
    img: string;
}

const Facultati: React.FC = () => {
    const navigate = useNavigate();

    const faculties: Faculty[] = [
        { name: "Facultatea de Arte și Design", img: "src/assets/facultati/Arte-05.png" },
        { name: "Facultatea de Chimie, Biologie, Geografie", img: "src/assets/facultati/CBG-03.png" },
        { name: "Facultatea de Drept", img: "src/assets/facultati/DREPT-03.png" },
        { name: "Facultatea de Economie și de Administrare a Afacerilor", img: "src/assets/facultati/FEAA-03.png" },
        { name: "Facultatea de Educație Fizică și Sport", img: "src/assets/facultati/FEFS-03.png" },
        { name: "Facultatea de Fizică", img: "src/assets/facultati/FIZICA-03.png" },
        { name: "Facultatea de Litere, Istorie și Teologie", img: "src/assets/facultati/LIT-03.png" },
        { name: "Facultatea de Matematică și Informatică", img: "src/assets/facultati/FMI-12.png" },
        { name: "Facultatea de Muzică și Teatru", img: "src/assets/facultati/FMT-03.png" },
        { name: "Facultatea de Sociologie și Psihologie", img: "src/assets/facultati/FSP-03.png" },
        { name: "Facultatea de Științe Politice, Filosofie și Științe ale Comunicării", img: "src/assets/facultati/PFC-03.png" }
    ];

    const handleFacultyClick = (faculty: Faculty) => {
        navigate(`/faculty/${encodeURIComponent(faculty.name)}`);
    };

    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <p style={{ fontWeight: 400 }}>
                    <span style={{ color: '#000000' }}>
                        <em>
                            <strong>Universitatea de Vest</strong> este mai puternică datorită rezultatelor remarcabile ce au scris istorie de-a lungul generațiilor!
                        </em>
                    </span>
                </p>
                <p style={{ fontWeight: 400 }}>
                    <span style={{ color: '#000000' }}>
                        <em>
                            Comunitatea <strong>ALUMNI a Universității de Vest</strong> se menține strânsă, pentru ca împreună să ne păstrăm pasiunea de a ne urma visele.
                        </em>
                    </span>
                </p>
                <p style={{ fontWeight: 400 }}>
                    <span style={{ color: '#000000' }}>
                        <strong>
                            <em>Împreună valorificăm performanța, împreună descoperim excelența pe care o viață împlinită ne-o aduce!</em>
                        </strong>
                    </span>
                </p>
            </div>
            <div className={classes.content}>
                <div className={classes.grid}>
                    {faculties.map((faculty, index) => (
                        <div 
                            key={index} 
                            className={classes.facultyItem} 
                            onClick={() => handleFacultyClick(faculty)}
                        >
                            <div 
                                className={classes.facultyImage} 
                                style={{ backgroundImage: `url(${faculty.img})` }}
                            ></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Facultati;
