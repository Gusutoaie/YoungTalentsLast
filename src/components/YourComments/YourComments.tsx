import React from 'react';

interface Props {
    title: string;
}


const YourComments: React.FC<Props> = ({title}) => {
    return (
        <div>
            Your Comments Component
        </div>
    );
}

export default YourComments;