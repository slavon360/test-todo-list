import React from 'react';
import cx from 'classnames';

import styles from './Button.module.scss';

const Button = ({ clickHandler, children, clsName }) => (
        <button
            className={cx(styles.Button, clsName)}
            onClick={clickHandler}
        >
            {children}
        </button>
    );

export default Button;