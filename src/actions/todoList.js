import { createTypes } from 'redux-compose-reducer';

const TYPES = createTypes('todoList', [
    'changeCategory',
    'toggleTodoItem',
    'changeTaskTitle',
    'setCategoryName',
    'setItemName'
]);

export const changeCategory = (index) => ({
    type: TYPES.changeCategory,
    index
});

export const toggleTodoItem = (id) => (dispatch, getState) => {
    const { activeIndex } = getState().todoList;
    dispatch({ type: TYPES.toggleTodoItem, id, activeIndex })
}

export const changeTaskTitle = (id, title) => (dispatch, getState) => {
    const { activeIndex } = getState().todoList;
    dispatch({ type: TYPES.changeTaskTitle, id, title, activeIndex });
}

export const setCategoryName = ({ target: { value }}) => ({
    type: TYPES.setCategoryName,
    name: value
})

export const setItemName = ({ target: { value }}) => ({
    type: TYPES.setItemName,
    name: value
})