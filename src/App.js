import "./App.css";
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login"
import Registration from "./pages/Registration";
import BookList from "./pages/Booklist";
import About from "./pages/About";
import Home from "./pages/Home"
import Footer from "./components/Footer";

import UserHome from "./pages/UserHome";

function App() {
	return (
		<div>
			<Navbar />
			<div>
				<Routes>
					<Route path="/login" element={<Login />} />
					<Route path="/registration" element={<Registration />} />
					<Route path="/booklist" element={<BookList />} />
					<Route path="/about" element={<About />} />
					<Route path="/home" element={<Home />} />
					<Route path="/assign-act/" element={<Home />} />
					<Route path="/" element={<Home />} />
					<Route path="/userhome" element={<UserHome />} />
				</Routes>
			</div>
			<Footer />
		</div>
	);
}

export default App;
