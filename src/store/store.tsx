import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { certificatesReducer } from "../reducers/certificatesReducer";
// Reducers

// Configuracion

const reducers = combineReducers({
	certs: certificatesReducer
});

export const store = createStore(
	reducers,
	composeWithDevTools(applyMiddleware(thunk))
);
