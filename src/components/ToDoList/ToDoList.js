import React from 'react';
import PropTypes from 'prop-types';
import SideNav from './components/SideNav/SideNav';
import ToDoItems from './components/ToDoItems/ToDoItems';
import Modal from '../UI/Modal/Modal';
import ModalToDoItem from '../UI/Modal/ModalToDoItem/ModalToDoItem';
import ModalCategory from '../UI/Modal/ModalCategory/ModalCategory';

import styles from './ToDoList.module.scss';

const ToDoList = ({
    categories,
    activeIndex,
    changeCategory,
    toggleTodoItem,
    changeTaskTitle,
    showToDoItemModal,
    showCategoryModal,
    reservedCategory,
    setItemName,
    setCategoryName,
    showHideToDoItemModal,
    showHideCategoryModal,
    makeModalHide,
    saveReservedCategory,
    reservedToDoItem,
    saveReservedTodoItem
}) => {
    const activeCategory = categories[activeIndex];
    const { list, name } = activeCategory;
    let content;
    if (showToDoItemModal) {
        content = <ModalToDoItem
            reservedToDoItem={reservedToDoItem}
            setItemName={setItemName}
            saveReservedTodoItem={saveReservedTodoItem}
            cancelToDoItem={makeModalHide}
            categoryName={name}
        />
    }
    if (showCategoryModal) {
        content = <ModalCategory
            saveReservedCategory={saveReservedCategory}
            reservedCategory={reservedCategory}
            setCategoryName={setCategoryName}
            cancelCategory={makeModalHide}
        />
    }
    return (
        <div className={styles.ToDoList}>
            <div className={styles.SideNav}>
                <SideNav
                    changeCategory={changeCategory}
                    categories={categories}
                    activeIndex={activeIndex}
                    showHideCategoryModal={showHideCategoryModal}
                />
            </div>
            <div className={styles.ToDoItems}>
                <ToDoItems
                    toggleTodoItem={toggleTodoItem}
                    todoItems={list}
                    activeCategoryTitle={name}
                    changeTaskTitle={changeTaskTitle}
                    showHideToDoItemModal={showHideToDoItemModal}
                />
            </div>
            <Modal
                show={showToDoItemModal || showCategoryModal}
                modalClosed={makeModalHide}
            >
                {content}
            </Modal>
        </div>
    );
}

export default ToDoList;

ToDoList.propTypes = {
    categories: PropTypes.array,
    activeIndex: PropTypes.number
}
ToDoList.defaultProps = {
    categories: []
}