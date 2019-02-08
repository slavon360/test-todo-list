import React from 'react';
import Button from '../../Button/Button';
import Input from '../../Input/Input';

import styles from './ModalCategory.module.scss';

const ModalCategory = ({
    setCategoryName,
    saveReservedCategory,
    cancelCategory,
    reservedCategory: { name }
}) => {
    return (
        <div className={styles.ModalCategory}>
            <div className={styles.CategoryName}>Category Name: </div>
            <div className={styles.CategoryInputWrp}>
                <Input
                    clsName={styles.CategoryInput}
                    type="text"
                    value={name}
                    changeValue={setCategoryName}
                />
            </div>
            <div className={styles.Controls}>
                <Button
                    clsName={styles.Save}
                    clickHandler={saveReservedCategory}
                >Save</Button>
                <Button
                    clsName={styles.Cancel}
                    clickHandler={cancelCategory}
                >Cancel</Button>
            </div>
        </div>
    );
};

export default ModalCategory;