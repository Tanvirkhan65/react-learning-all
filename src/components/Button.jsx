import React from 'react';

const Button = ({ incrementBy, children }) => {
    console.log('button');
    return (
        <div>
            <button type="button" onClick={incrementBy}>{children}</button>
        </div>
    );
};

export default React.memo(Button);
