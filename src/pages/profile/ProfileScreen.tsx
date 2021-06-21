import { Footer } from "../../components/ui/footer/Footer";
import "./ProfileScreen.css";
import { MoreInfoComponent } from "../../components/more-info/MoreInfoComponent";
import { useEffect } from "react";

export const ProfileScreen = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="animate__animated animate__fadeIn">
			<section className="profile-main-container">
				<div className="grid-container profile-container ">
					<div className="profile-image-container">
						<img src="./assets/img/francisferri.jpg" alt="" />
					</div>
					<div>
						<h2>Thank you for your time!</h2>
						<p>
							My name is Francis Ferri. Among my main interests are Cloud
							Computing and Artificial intelligence. I have knowledge of DevOps,
							Scrum, Web Development (MERN), Machine Learning and more.
							Currently I am looking to work on a job in which I can apply most
							of my knowledge to reinforce it, so that in the future I will have
							the necessary skills to start my own startup. I am Ecuadorian and
							I am 23 years old. I am a student of Computer Science in Escuela
							Politécnica Nacional. I am currently finishing my thesis about
							Gesture Recognition with Deep Learning and improving my knowledge
							in my free time.
						</p>
					</div>
				</div>
			</section>
			<section className="profile-main-experience">
				<div className="grid-container">
					<h3>Experience</h3>
					<div className="experience-main-container">
						<article className="job-container">
							<h4>Laboratory assistant in Lab-FIS</h4>

							<img src="./assets/img/Lab-FIS.png" alt="cosa2" />
							<p>
								During the time I did my internships. I learned about server and
								network configuration to manage the infrastructure of different
								classrooms with different software. Mostly you had to configure
								Linux environments through docker or virtual machines and assign
								different roles and permissions. I also used to install and
								configure web servers and Data Science tools.
							</p>
						</article>
						<article className="job-container">
							<h4>Assistant in Alan Turing AI Lab</h4>
							<img src="./assets/img/Lab-Alan-Turing.jpg" alt="cosa1" />
							<p>
								As a researcher at the "Alan Turing" Laboratory for Research in
								Intelligence and Artificial Vision, I assisted in Gesture
								Recognition research with Machine Learning techniques, in
								addition to data collection, data cleaning and generation of
								models for the recognition of hand gestures. To create these
								models I have used Matlab and parallel processing to speed up
								the process.
							</p>
						</article>
						<article className="job-container">
							<h4>Computer Science student (EPN)</h4>
							<img src="./assets/img/sistemas-epn.png" alt="cosa3" />
							<p>
								I am an Ecuadorian university student finishing his thesis,
								during my major I have learned about Networks, Databases,
								Artificial Intelligence, Programming, etc. I have learned to use
								a wide range of tools and have worked in groups during all my
								major. I usually expand my knowledge with online courses and
								workshops.
							</p>
						</article>
					</div>
				</div>
			</section>
			<MoreInfoComponent />
			<Footer />
		</div>
	);
};
