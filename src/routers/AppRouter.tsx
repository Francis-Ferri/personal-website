import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from "react-router-dom";
import { Navbar } from "../components/ui/navbar/Navbar";
import { HomeScreen } from "../pages/home/HomeScreen";
import { ProfileScreen } from "../pages/profile/ProfileScreen";
import { KnowledgeScreen } from "../pages/knowledge/KnowledgeScreen";
import { CertificateScreen } from "../pages/certificate/CertificateScreen";

export const AppRouter = () => {
	return (
		<Router>
			<div>
				<Navbar />

				{/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
				<Switch>
					<Route exact path="/">
						<HomeScreen />
					</Route>
					<Route exact path="/profile">
						<ProfileScreen />
					</Route>
					<Route exact path="/knowledge">
						<KnowledgeScreen />
					</Route>
					<Route exact path="/certificate">
						<Redirect to="/knowledge" />
					</Route>
					<Route exact path="/certificate/:certId">
						<CertificateScreen />
					</Route>

					<Redirect to="/" />
				</Switch>
			</div>
		</Router>
	);
};
