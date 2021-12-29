/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const ReviewImage = ({ file }) => {
    const [preview, setPreview] = useState(null);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        setPreview(reader.result);
    };
    return (
        <div>
            {preview ? <img src={preview} height="300px" width="300px" alt="preview" /> : 'loading...'}
        </div>

    );
};

export default ReviewImage;
