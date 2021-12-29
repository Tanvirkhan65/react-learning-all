/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const Preview = ({ file }) => {
    const [view, setView] = useState(null);
    const load = new FileReader();
    load.readAsDataURL(file);
    load.onload = () => {
        setView(load.result);
    };
    return (
        <div>
            {view ? <img src={view} height="300px" width="300px" alt="preview" /> : 'loading...'}
        </div>
    );
};

export default Preview;
