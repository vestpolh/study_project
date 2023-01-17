import { useState } from 'react';

export const withActiveFlag = (Component: any) => function (props: any) {
    const [isActive, setActive] = useState(false);
    return (
        <Component {...props} isActive={isActive} onActiveChange={() => setActive(prev => !prev)}/>
    );
}