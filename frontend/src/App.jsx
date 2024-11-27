import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./landing_page/Navbar";
import HomePage from "./landing_page/home/HomePage";
import SignupForm from "./landing_page/signup/SignupForm";
import Login from "./landing_page/signup/Login";
import ProductPage from "./landing_page/products/ProductsPage";
import AboutPage from "./landing_page/about/AboutPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import SupportPage from "./landing_page/support/SupportPage";
import NotFound from "./landing_page/NotFound";
import Footer from "./landing_page/Footer";
import { useState } from "react";

function App() {
    const [user, setUser] = useState(localStorage.getItem("user"));
	return (
		<BrowserRouter>
			<Navbar user={user} setUser={setUser} />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/signup" element={<SignupForm />} />
				<Route
					path="/login"
					element={<Login user={user} setUser={setUser} />}
				/>
				<Route path="/about" element={<AboutPage />} />
				<Route path="/product" element={<ProductPage />} />
				<Route path="/pricing" element={<PricingPage />} />
				<Route path="/support" element={<SupportPage />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			<br></br> <br></br> <br></br> <br></br> <br></br>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
