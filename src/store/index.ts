import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from "redux-saga";

import authReducer from '@/store/auth'
import someSaga from '@/store/saga'

const sagaMiddleware = createSagaMiddleware();
const middleware = (defaultMiddleware: () => any[]) => defaultMiddleware().concat(sagaMiddleware);


export const store = configureStore({
  reducer: {
    auth: authReducer
  },
  middleware
})

sagaMiddleware.run(someSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch