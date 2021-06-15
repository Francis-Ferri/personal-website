import { actionTypes } from "../types/actionTypes";
import { loadCertificates } from "../helpers/loadCertificates";
import { Certificate } from "../types/certificate";

export const startLoadingCerts = () => {
	return async (dispatch: Function) => {
		let certs: Certificate[] = await loadCertificates();
		dispatch(setCerts(certs));
	};
};

const setCerts = (certs: Certificate[]) => ({
	type: actionTypes.certsAdd,
	payload: certs
});
