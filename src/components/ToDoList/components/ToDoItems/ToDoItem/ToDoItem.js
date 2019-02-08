import React, { Component } from 'react';
import cx from 'classnames';
import Input from '../../../../UI/Input/Input';

import styles from './ToDoItem.module.scss';

class ToDoItem extends Component {
    shouldComponentUpdate(nextProps){
        const { done, title } = this.props;
        return done !== nextProps.done || title !== nextProps.title;
    }
    onToggleTodoItem = () => {
        const { toggleTodoItem, id } = this.props;
        toggleTodoItem(id);
    }
    onChangeTitle = ({target: { value }}) => {
        const { changeTaskTitle, id } = this.props;
        changeTaskTitle(id, value);
    }
    render() {
        const { id, title, done } = this.props;
        console.log(title);
        return (
            <div className={styles.ToDoItem}>
                <label
                    className={cx(styles.CheckboxLabel, { [styles.Active]: done } )}
                    htmlFor={id}
                    onClick={this.onToggleTodoItem}
                />
                <Input
                    name={id}
                    type="checkbox"
                    clsName={styles.Checkbox}
                    value={done}
                />
                <Input
                    name={`${id}-${title}`}
                    type="text"
                    value={title}
                    clsName={styles.ToDoName}
                    changeValue={this.onChangeTitle}
                />
            </div>
        );
    }
}

export default ToDoItem;