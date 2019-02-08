import { composeReducer } from 'redux-compose-reducer';
import uniqid from 'uniqid';
import data from '../data.json';

const { activeIndex, categories } = data;

const initialState = {
    categories,
    activeIndex,
    reservedCategory: {
        name: '',
        list: []
    },
    reservedToDoItem: {
        name: '',
        done: false
    }
}

function changeCategory(state, { index }) {
    return {
        ...state,
        activeIndex: index
    }
}

function toggleTodoItem(state, { id, activeIndex }) {
    const updCategory = { ...state.categories[activeIndex] };
    const updList = updCategory.list.map(item => ({
        ...item,
        done: item.id === id ? !item.done : item.done
    }));
    const updCategories = state.categories.map((categ, index) => ({
        ...categ,
        list: index === activeIndex ? updList : categ.list
    }));
    return {
        ...state,
        categories: updCategories
    }
}

function changeTaskTitle(state, { id, activeIndex, title}) {
    const updCategory = { ...state.categories[activeIndex] };
    const updList = updCategory.list.map(item => ({
        ...item,
        name: item.id === id ? title : item.name
    }));
    const updCategories = state.categories.map((categ, index) => ({
        ...categ,
        list: index === activeIndex ? updList : categ.list
    }));
    return {
        ...state,
        categories: updCategories
    }
}

function setCategoryName(state, { name }) {
    return {
        ...state,
        reservedCategory: {
            ...state.reservedCategory,
            name
        }
    }
}

function resetReservedCategory(state) {
    return {
        ...state,
        reservedCategory: {
            ...state.reservedCategory,
            name: ''
        }
    }
}

function saveReservedCategory(state, { reservedCategory }) {
    return {
        ...state,
        categories: [
            ...state.categories,
            {
                ...reservedCategory,
                id: uniqid()
            }
        ]
    }
}

function setItemName(state, { name }) {
    return {
        ...state,
        reservedToDoItem: {
            ...state.reservedToDoItem,
            name,
        }
    }
}

function resetReservedTodoItem(state) {
    return {
        ...state,
        reservedToDoItem: {
            ...state.reservedToDoItem,
            name: ''
        }
    }
}

function saveReservedTodoItem(state, { reservedToDoItem, activeIndex }) {
    const updCategories = state.categories.map((categ, index) => ({
        ...categ,
        list: index === activeIndex ?
        [...categ.list, {
            ...reservedToDoItem,
            id: uniqid()
        }] :
        categ.list
    }));
    return {
        ...state,
        categories: updCategories
    }
}

export default composeReducer(
    'todoList',
    {
        changeCategory,
        toggleTodoItem,
        changeTaskTitle,
        setCategoryName,
        resetReservedCategory,
        saveReservedCategory,
        setItemName,
        saveReservedTodoItem,
        resetReservedTodoItem
    },
    initialState
);