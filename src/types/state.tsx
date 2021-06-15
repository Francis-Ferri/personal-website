import { Certificate } from "./certificate";

export interface AppState {
	certs: {
		certificates: Certificate[];
		loaded: boolean;
	};
}
