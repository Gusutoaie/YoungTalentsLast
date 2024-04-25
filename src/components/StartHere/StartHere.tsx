import React from 'react';

interface StartHereProps {
    title: string;
}

const StartHere: React.FC<StartHereProps> = (title) => {
    return (
        <div>
            Start Here
        </div>
    );
}

export default StartHere;