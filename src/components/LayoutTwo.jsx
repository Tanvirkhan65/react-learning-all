import React from 'react';
import useScreenSizeHook from './hook/useScreenSizeHook';

const LayoutTwo = () => {
    const onSmallScreen = useScreenSizeHook(900);
    return (
        <div>
            <h1>
                layout two
                {' '}
                {onSmallScreen ? 'small 2' : 'large 2' }
            </h1>
        </div>
    );
};

export default LayoutTwo;
