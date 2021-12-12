import React from 'react';

const Input = ({ type, placeholder }, ref) => (
    <div>
        <input ref={ref} type={type} placeholder={placeholder} />
    </div>
);

export default React.forwardRef(Input);
