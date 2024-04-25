import React from 'react';

interface Props {
    title: string;
}

const YourContacts: React.FC<Props> = ({title}) => {
    return (
        <div>
            <h1>Your Contacts</h1>
        </div>
    );
}

export default YourContacts;