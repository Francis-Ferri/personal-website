import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./CertificateScreen.css";
import { AppState } from "../../types/state";
import { startLoadingCerts } from "../../actions/certificates";
import { MoreInfoComponent } from "../../components/more-info/MoreInfoComponent";
import { Footer } from "../../components/ui/footer/Footer";
import { useEffect } from "react";

export const CertificateScreen = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const { certId }: { certId: string } = useParams();

	const { certificates, loaded } = useSelector(
		(state: AppState) => state.certs
	);

	if (!loaded) {
		dispatch(startLoadingCerts());
		return (
			<div className="error-screen animate__animated animate__fadeIn">
				<div className="fa-3x">
					<i className="fas fa-spinner fa-spin"></i>
				</div>
			</div>
		);
	}

	const cert = certificates.find((cert) => cert.id === certId);

	return !cert ? (
		<div className="error-screen animate__animated animate__fadeIn">
			<h1>Certificate not found!</h1>
		</div>
	) : (
		<div className="animate__animated animate__fadeIn">
			<section className="certificate-main-container">
				<div className="grid-container">
					<h3>Certificate</h3>
					<article>
						<h1>{cert.title}</h1>
						<p>{cert.description}</p>
					</article>
				</div>
			</section>
			<section className="grid-container certificate-img-container">
				<img src={cert.url} alt={cert.title} />
			</section>
			<MoreInfoComponent />
			<Footer />
		</div>
	);
};
