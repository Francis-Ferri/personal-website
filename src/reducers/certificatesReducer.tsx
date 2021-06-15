import { actionTypes } from "../types/actionTypes";
import { Certificate } from "../types/certificate";

const initialState = {
	certificates: [],
	loaded: false
};

interface Action {
	type: string;
	payload: Certificate[];
}

export const certificatesReducer = (state = initialState, action: Action) => {
	switch (action.type) {
		case actionTypes.certsAdd:
			return { ...state, certificates: action.payload, loaded: true };
		default:
			return state;
	}
};
