import React from "react";
import cn from 'classnames';
import styles from './background.module.scss'

export interface BackgroundPropsTypes {
    className?: string;
    background: 'black' | 'white';
    children: any;
}

const Background: React.FC<BackgroundPropsTypes> = props => {
    const { background, children } = props;

    const backgroundColor = cn(styles.backgroundWrapper, {
        [styles.black]: background === 'black',
        [styles.white]: background === 'white',
    });

    return (
        <div className={backgroundColor}>
            {children}
        </div>
    )
}

export default Background;
