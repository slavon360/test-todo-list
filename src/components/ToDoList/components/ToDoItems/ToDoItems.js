import React from 'react';
import PropTypes from 'prop-types';
import ToDoItem from '../ToDoItems/ToDoItem/ToDoItem';
import Button from '../../../UI/Button/Button';

import styles from './ToDoItems.module.scss';

const ToDoItems = ({
    activeCategoryTitle,
    todoItems,
    toggleTodoItem,
    changeTaskTitle,
    showHideToDoItemModal
}) => (
        <div className={styles.ToDoItems}>
            <div className={styles.Head}>
                <h1>{activeCategoryTitle}</h1>
                <Button
                    clsName={styles.AddToDoItem}
                    clickHandler={showHideToDoItemModal}
                >+</Button>
            </div>
            <div className={styles.ItemsArea}>
                {todoItems.map((item) => (
                    <ToDoItem
                        key={item.id}
                        id={item.id}
                        title={item.name}
                        done={item.done}
                        toggleTodoItem={toggleTodoItem}
                        changeTaskTitle={changeTaskTitle}
                    />
                ))}
            </div>
        </div>
    );

ToDoItems.propTypes = {
    todoItems: PropTypes.array
}
ToDoItems.defaultProps = {
    todoItems: []
}

export default ToDoItems;