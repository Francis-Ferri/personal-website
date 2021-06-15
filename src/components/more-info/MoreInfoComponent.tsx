import "./MoreInfoComponent.css";

export const MoreInfoComponent = () => {
	return (
		<section className="contact-main-container">
			<div>
				<a
					target="_blank"
					href="https://console.cloud.google.com/home/dashboard?project=francis-projects"
					rel="noreferrer"
				>
					<img src="/assets/svg/google-cloud.svg" alt="Google Cloud Platform" />
				</a>
				<div className="contact-left">
					<a
						target="_blank"
						href="https://console.cloud.google.com/home/dashboard?project=francis-projects"
						rel="noreferrer"
					>
						GCP Projects
					</a>
					<p>If you are interested, ask for permission.</p>
				</div>
			</div>
			<div>
				<a
					target="_blank"
					href="https://github.com/Francis-Ferri"
					rel="noreferrer"
				>
					<img src="/assets/svg/github.svg" alt="GitHub" />
				</a>
				<div className="contact-right">
					<a
						target="_blank"
						href="https://github.com/Francis-Ferri"
						rel="noreferrer"
					>
						GitHub profile
					</a>
					<p>Check some of my projects and code.</p>
				</div>
			</div>
		</section>
	);
};
