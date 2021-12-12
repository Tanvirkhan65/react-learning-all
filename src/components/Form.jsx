import React from 'react';
import Input from './Input';

const Form = () => {
    const inputRef = React.useRef(null);
    React.useEffect(() => {
        inputRef.current.focus();
    }, []);
    return (
        <div>
            <Input placeholder="enter somthing" type="text" ref={inputRef} />
        </div>
    );
};

export default Form;
