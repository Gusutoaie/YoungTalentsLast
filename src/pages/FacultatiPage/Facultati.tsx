import React, { useState } from 'react';
import classes from './Facultati.module.css';

interface Faculty {
    name: string;
    link: string;
    img: string;
}

const Facultati: React.FC = () => {
    const [selectedFaculty, setSelectedFaculty] = useState<Faculty | null>(null);

    const faculties: Faculty[] = [
        { name: "ARTE", link: "/arte", img: "src/assets/facultati/Arte-05.png" },
        { name: "CBG", link: "/cbg", img: "src/assets/facultati/CBG-03.png" },
        { name: "DREPT", link: "/drept", img: "src/assets/facultati/DREPT-03.png" },
        { name: "FEAA", link: "/feaa", img: "src/assets/facultati/FEAA-03.png" },
        { name: "FEFS", link: "/fefs", img: "src/assets/facultati/FEFS-03.png" },
        { name: "FIZICĂ", link: "/fizica", img: "src/assets/facultati/FIZICA-03.png" },
        { name: "FMI", link: "/fmi", img: "src/assets/facultati/FMI-12.png" },
        { name: "FMT", link: "/fmt", img: "src/assets/facultati/FMT-03.png" },
        { name: "LIT", link: "/lit", img: "src/assets/facultati/LIT-03.png" },
        { name: "FSP", link: "/fsp", img: "src/assets/facultati/FSP-03.png" },
        { name: "PFC", link: "/pfc", img: "src/assets/facultati/PFC-03.png" }
    ];

    const handleFacultyClick = (faculty: Faculty) => {
        setSelectedFaculty(faculty);
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
                            <div className={classes.facultyName}>{faculty.name}</div>
                        </div>
                    ))}
                </div>
                {selectedFaculty && (
                    <div className={classes.selectedFaculty}>
                        <a href={selectedFaculty.link} className={classes.facultyLink}>
                            {selectedFaculty.name}
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Facultati;
