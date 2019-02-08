import React from 'react';
import Button from '../../Button/Button';
import Input from '../../Input/Input';

import styles from './ModalToDoItem.module.scss';

const ModalToDoItem = ({ reservedToDoItem: { name }, setItemName, saveReservedTodoItem, cancelToDoItem, categoryName }) => (
        <div className={styles.ModalToDoItem}>
            <div className={styles.CategoryName}>{categoryName}</div>
            <div className={styles.ItemName}>Item Name: </div>
            <div className={styles.ItemInputWrp}>
                <Input
                    clsName={styles.ItemInput}
                    type="text"
                    value={name}
                    changeValue={setItemName}
                />
            </div>
            <div className={styles.Controls}>
                <Button
                    clsName={styles.Save}
                    clickHandler={saveReservedTodoItem}
                >Save</Button>
                <Button
                    clsName={styles.Cancel}
                    clickHandler={cancelToDoItem}
                >Cancel</Button>
            </div>
        </div>
    );

export default ModalToDoItem;