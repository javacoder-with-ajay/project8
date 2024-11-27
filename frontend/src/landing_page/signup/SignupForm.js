import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../service/Api";

const SignupForm = () => {
	const navigate = useNavigate();
	const {
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm();

	const [inpObj, setInpObj] = useState({
		username: "",
		name: "",
		email: "",
		password: "",
	});

	const handleChange = (e) => {
		setInpObj({ ...inpObj, [e.target.name]: e.target.value });
	};

	const onSubmit = async () => {
		try {
			const response = await signup(inpObj);
			if (response.status === 200 || response.status === 201) {
				toast.success("Signup successful!");
				setTimeout(() => {
					navigate("/login");
				}, 2000);
			}
		} catch (error) {
			// Show error toast
			toast.error("Signup failed. Please try again.");
		}
	};

	return (
		<div>
			<h2 style={{ textAlign: "center", margin: "2rem" }}>Sign Up</h2>
			<form className="row g-3" onSubmit={handleSubmit(onSubmit)}>
				<div className="offset-3 col-md-6">
					<label htmlFor="username" className="form-label">
						Username
					</label>
					<input
						type="text"
						name="username"
						value={inpObj.username}
						onChange={handleChange}
						id="username"
						placeholder="Enter your username"
						className="form-control"
						required
					/>
				</div>

				<div className="offset-3 col-md-6">
					<label htmlFor="name" className="form-label">
						Name
					</label>
					<input
						type="text"
						id="name"
						name="name"
						value={inpObj.name}
						onChange={handleChange}
						placeholder="Enter your name"
						className="form-control"
						required
					/>
				</div>

				<div className="offset-3 col-md-6">
					<label htmlFor="email" className="form-label">
						Email
					</label>
					<input
						type="email"
						id="email"
						name="email"
						value={inpObj.email}
						onChange={handleChange}
						placeholder="Enter your email"
						className="form-control"
						required
					/>
				</div>

				<div className="offset-3 col-md-6">
					<label htmlFor="password" className="form-label">
						Password
					</label>
					<input
						type="password"
						id="password"
						name="password"
						value={inpObj.password}
						onChange={handleChange}
						placeholder="Enter your password"
						className="form-control"
						required
					/>
				</div>

				<div className="offset-3 col-12">
					<button
						type="submit"
						disabled={isSubmitting}
						className="btn btn-primary"
					>
						{isSubmitting ? "Please wait..." : "Sign Up"}
					</button>
				</div>
			</form>
			<p style={{ textAlign: "center" }}>
				Already have an account? <Link to="/login">Login here</Link>
			</p>

			{/* Toast Container */}
			<Toaster position="top-center" />
		</div>
	);
};

export default SignupForm;
