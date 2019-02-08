import React from 'react';
import cx from 'classnames';

import styles from './Input.module.scss';

const Input = ({ type, value, placeholder, clsName, name, changeValue }) => (
    <input
        className={cx(styles.Input, clsName)}
        type={type}
        value={value}
        placeholder={placeholder}
        name={name}
        onChange={changeValue}
    />
    );

export default Input;