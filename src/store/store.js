import { createStore, applyMiddleware } from "redux";
import { customThunk } from "../middleware/custom-thunk";
import { customPromise } from "../middleware/custom-promise";
import { logger } from "../middleware/logger";
import rootReducer from "./reducers";

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(customPromise, logger)
  );
}
