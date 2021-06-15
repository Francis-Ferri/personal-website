import { db } from "../firebase/firebaseConfig";
import { Certificate } from "../types/certificate";

export const loadCertificates = async () => {
	const certsSnap = await db.collection("/certificates").get();
	const certificates: Certificate[] = [];

	certsSnap.forEach((certSnap) => {
		const data = certSnap.data();
		certificates.push({
			id: certSnap.id,
			title: data.title,
			description: data.description,
			url: data.url,
			tags: data.tags
		});
	});
	return certificates;
};
