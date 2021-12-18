import React from 'react';
import useScreenSizeHook from './hook/useScreenSizeHook';

const LayoutOne = () => {
    const onSmallScreen = useScreenSizeHook(800);
    return (
        <div>
            <h1>
                screen size
                {' '}
                {onSmallScreen ? 'small' : 'large' }
            </h1>
        </div>
    );
};

export default LayoutOne;
