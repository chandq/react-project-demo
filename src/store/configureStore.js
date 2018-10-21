import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from '../pages/portal/reducers'

export default function configureStore(preloadedState) {
  let middleware = [thunk];
  if(process.env.NODE_ENV !== 'production'){
    middleware.push(createLogger())
  }
  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(...middleware)
  );
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../pages/portal/reducers', () => {
      const nextRootReducer = require('../pages/portal/reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }
  return store
}
