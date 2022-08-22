import Dashboard from "./pages/Dashboard/Dashboard";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import Login from "./pages/Login/Login";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";


function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route element={<ProtectedRoute />} >
						<Route path="/*" element={<Dashboard />} />
					</Route>				
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
