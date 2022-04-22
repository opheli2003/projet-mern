import Home from "./pages/Home";
import Topbar from "./components/topbar/Topbar.jsx";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleTicket from "./components/singleTicket/SingleTicket";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				{/* <Topbar /> */}
				<Route path="/write" element={<Write />} />
				<Route path="/ticket/:id" element={<SingleTicket />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
