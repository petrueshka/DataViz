import { createStore, compose } from "redux";
import rootReducer from "./reducers";

export default function configureStore(initialState) {
  const composeEnhancers =
    window.__REUDX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(rootReducer, initialState, composeEnhancers());
}
