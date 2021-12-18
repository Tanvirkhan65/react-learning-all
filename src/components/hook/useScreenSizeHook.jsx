import React, { useCallback, useEffect } from 'react';

const useScreenSizeHook = (size) => {
    const [onSmallScreen, setScreen] = React.useState(false);
    const checkScreen = useCallback(() => {
        if (window.innerWidth < size) {
            setScreen(true);
        } else {
            setScreen(false);
        }
    }, [size]);
    useEffect(() => {
        checkScreen();
        window.addEventListener('resize', checkScreen);
        return () => window.removeEventListener('resize', checkScreen);
    }, [checkScreen]);
    return onSmallScreen;
};

export default useScreenSizeHook;
