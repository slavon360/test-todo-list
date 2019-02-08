import { connect } from 'react-redux';
import ToDoList from '../../components/ToDoList/ToDoList';
import {
    changeCategory,
    toggleTodoItem,
    changeTaskTitle,
    setCategoryName,
    setItemName
} from '../../actions/todoList';
import {
    showHideCategoryModal,
    showHideToDoItemModal,
    makeModalHide,
    saveReservedCategory,
    saveReservedTodoItem
} from '../../actions/modals';

const mapStateToProps = ({
    todoList: { activeIndex, categories, reservedCategory, reservedToDoItem },
    modals: { showToDoItemModal, showCategoryModal }
}) => {
    return {
        categories,
        activeIndex,
        showToDoItemModal,
        showCategoryModal,
        reservedCategory,
        reservedToDoItem
    }
};

const mapDispatchToProps = {
    changeCategory,
    toggleTodoItem,
    changeTaskTitle,
    showHideToDoItemModal,
    showHideCategoryModal,
    makeModalHide,
    setCategoryName,
    saveReservedCategory,
    setItemName,
    saveReservedTodoItem
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);