import React from 'react';

interface TagsProps {
    title: string;
}

const Tags: React.FC<TagsProps> = ({ title }) => {
    return (
        <span className='main__summary'>{title}</span>
    );
};


export default Tags;