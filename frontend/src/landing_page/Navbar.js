import axios from "axios";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

const Navbar = ({ user, setUser }) => {
	// const [user, setUser] = useState(localStorage.getItem("user"));
	useEffect(() => {
		if (user) {
			setUser(user);
		} else {
			setUser(localStorage.getItem("user"));
		}
	}, [user]);

	const handleLogout = async () => {
		try {
			const res = await axios.post("http://localhost:3002/logout");
			toast.success(res.data.message);
			localStorage.removeItem("user");
			setUser(null); // Update the state to reflect logout
		} catch (e) {
			console.log(e);
			toast.error(
				"Some error occurred: " + e.response?.data?.message || "Unknown error"
			);
		}
	};

	const redirectToDashboard = () => {
		// Replace with the actual URL of your dashboard app
		window.location.href = "http://localhost:3001";
	};
	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom">
			<div className="container p-1">
				<Link className="navbar-brand" to="/">
					<img src="media/images/logo.svg " style={{ width: "21%" }} />
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<form className="d-flex" role="search">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<Link className="nav-link active" to="/about">
									About
								</Link>
							</li>

							<li className="nav-item">
								<Link className="nav-link active" to="/product">
									Products
								</Link>
							</li>

							<li className="nav-item">
								<Link className="nav-link active" to="/pricing">
									Pricing
								</Link>
							</li>

							<li className="nav-item">
								<Link className="nav-link active" to="/support">
									Support
								</Link>
							</li>

							{user ? (
								<>
									<li className="nav-item">
										<a
											className="nav-link active"
											aria-current="page"
											style={{
												border: "none",
												display: "flex",
												alignItems: "center",
											}}
											href="http://localhost:3001"
										>
											<i className="fa-solid fa-user"></i>&nbsp;&nbsp;Profile
										</a>
									</li>
									<li className="nav-item">
										<button
											className="nav-link active"
											aria-current="page"
											style={{
												border: "none",
												display: "flex",
												alignItems: "center",
											}}
											onClick={handleLogout}
										>
											{" "}
											LogOut
										</button>
									</li>
								</>
							) : (
								<>
									<li className="nav-item">
										<Link
											className="nav-link active"
											aria-current="page"
											to="/signup"
										>
											Signup
										</Link>
									</li>
									<li className="nav-item">
										<Link
											className="nav-link active"
											aria-current="page"
											to="/login"
										>
											Login
										</Link>
									</li>
								</>
							)}
						</ul>
					</form>
				</div>
			</div>
			<Toaster position="top-center"></Toaster>
		</nav>
	);
};

export default Navbar;
