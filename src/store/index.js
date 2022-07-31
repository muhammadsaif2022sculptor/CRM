import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import reducer from './reducers'
import rootSaga from './saga'
import createSagaMiddleware from '@redux-saga/core'


const initializeStore = (preloadedState = {}) => {

    const sagaMW = createSagaMiddleware()

  const store = configureStore({
    reducer,
    preloadedState,
    middleware: [...getDefaultMiddleware(), sagaMW]
  })

  sagaMW.run(rootSaga)

  return store
}

export default initializeStore