import { createTypes } from 'redux-compose-reducer';

const MODAL_TYPES = createTypes('modals', [
    'showHideToDoItemModal',
    'showHideCategoryModal',
    'hideModal',
]);

const TODO_TYPES = createTypes('todoList', [
    'resetReservedCategory',
    'saveReservedCategory',
    'saveReservedTodoItem',
    'resetReservedTodoItem'
]);

export const makeModalHide = () => (dispatch, getState) => {
    dispatch({ type: MODAL_TYPES.hideModal })
    dispatch({ type: MODAL_TYPES.showHideToDoItemModal, data: false });
    dispatch({ type: MODAL_TYPES.showHideCategoryModal, data: false });
    dispatch({ type: TODO_TYPES.resetReservedCategory });
    dispatch({ type: TODO_TYPES.resetReservedTodoItem });
};

export const showHideToDoItemModal = () => ({
    type: MODAL_TYPES.showHideToDoItemModal,
    data: true
});

export const showHideCategoryModal = () => ({
    type: MODAL_TYPES.showHideCategoryModal,
    data: true
});

export const saveReservedCategory = () => (dispatch, getState) => {
    const { reservedCategory } = getState().todoList;
    dispatch({ type: TODO_TYPES.saveReservedCategory, reservedCategory });
    dispatch({ type: MODAL_TYPES.hideModal });
    dispatch({ type: MODAL_TYPES.showHideCategoryModal, data: false });
    dispatch({ type: TODO_TYPES.resetReservedCategory });
};

export const saveReservedTodoItem = () => (dispatch, getState) => {
    const { reservedToDoItem, activeIndex } = getState().todoList;
    dispatch({ type: TODO_TYPES.saveReservedTodoItem, reservedToDoItem, activeIndex });
    dispatch({ type: MODAL_TYPES.hideModal });
    dispatch({ type: MODAL_TYPES.showHideToDoItemModal, data: false });
    dispatch({ type: TODO_TYPES.resetReservedTodoItem });
};