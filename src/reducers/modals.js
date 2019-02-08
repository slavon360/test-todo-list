import { composeReducer } from 'redux-compose-reducer';

const initialState = {
    showToDoItemModal: false,
    showCategoryModal: false,
    showModal: false
}

function showHideToDoItemModal(state, { data }){
    return {
        ...state,
        showToDoItemModal: data
    }
}

function showHideCategoryModal(state, { data }){
    return {
        ...state,
        showCategoryModal: data
    }
}

function hideModal(state){
    return {
        ...state,
        showModal: false
    }
}


export default composeReducer(
    'modals',
    {
        showHideToDoItemModal,
        showHideCategoryModal,
        hideModal
    },
    initialState
);