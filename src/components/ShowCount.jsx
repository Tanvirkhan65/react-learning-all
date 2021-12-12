import React from 'react';

// eslint-disable-next-line react/prop-types
const ShowCount = ({ count }) => {
    console.log('show count');
    return (
        <div>
            <h1>{count}</h1>
        </div>
    );
};

export default React.memo(ShowCount);
