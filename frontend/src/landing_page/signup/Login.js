import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Login = ({user,setUser}) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	useEffect(()=>{
		if(user)
			navigate('/');
	})
	async function login(e) {
		
		e.preventDefault();
		try {
			const res = await axios.post("http://localhost:3002/login", {
				email,
				password,
			});
			localStorage.setItem("user", JSON.stringify(res.data.user));
			setUser(localStorage.getItem('user'));
			navigate("/");
		} catch (e) {
			console.log(e);
			toast.error(
				"Some error occurred: " + e.response?.data?.message || "Unknown error"
			);
		}
	}

	return (
		<div className="container mt-5">
			<h1 className="m-5" style={{ textAlign: "center" }}>
				Login
			</h1>
			<form onSubmit={login} className="row g-3">
				<div className="offset-3 col-md-6">
					<label htmlFor="email" className="form-label">
						Email
					</label>
					<input
						type="email"
						id="email"
						placeholder="Enter your email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className="form-control"
						required
					/>
				</div>

				<div className="offset-3 col-md-6">
					<label htmlFor="password" className="form-label">
						Password
					</label>
					<input
						className="form-control"
						type="password"
						id="password"
						placeholder="Enter your password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</div>

				<div className="offset-3 col-12">
					<button type="submit" className="btn btn-primary">
						Login
					</button>
				</div>
			</form>

			<p style={{ textAlign: "center" }}>
				Don't have an account? <Link to="/signup">Crate here</Link>
			</p>
			{/* Toast Container */}
			<Toaster position="top-center" />
		</div>
	);
};

export default Login;
