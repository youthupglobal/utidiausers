import Dashboard from "./pages/Dashboard/Dashboard";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import Login from "./pages/Login/Login";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/*" element={<Dashboard />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
