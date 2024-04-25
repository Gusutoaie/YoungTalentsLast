import React from 'react';

interface Props {
    title: string;
}
const SavedPosts: React.FC<Props> = ({ title }) => {
    return (
        <div>
            <h1>Saved Posts</h1>
        </div>
    );
}

export default SavedPosts;

