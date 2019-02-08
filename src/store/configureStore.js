import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import rootReducer from '../reducers';
const middleware = [thunk];
const persistConfig = {
    key: 'to_do',
    storage,
    whitelist: ['todoList']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const createStoreWithMiddleware = composeEnhancers(applyMiddleware(...middleware))(createStore);

export default function configureStore(initialState) {
    const store = createStoreWithMiddleware(persistedReducer, initialState);
    const persistor = persistStore(store);

    return { store, persistor };
}