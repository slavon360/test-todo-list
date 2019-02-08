import React from 'react';
import styles from './Backdrop.module.scss';

const Backdrop = ({show, clicked}) => (
    show ? <div
                    className={styles.Backdrop}
                    onClick={clicked}></div> : null
);

export default Backdrop;
