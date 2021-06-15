import { Provider } from "react-redux";
import { AppRouter } from "./routers/AppRouter";
import "animate.css";

import { store } from "./store/store";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Provider store={store}>
				<AppRouter />
			</Provider>
		</div>
	);
}

export default App;
