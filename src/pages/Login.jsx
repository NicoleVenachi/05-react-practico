import React, { useRef } from 'react';
import '@styles/Login.scss';

import logoYard from "@logos/logo_yard_sale.svg"

const Login = () => {
	const form = useRef(null);

	//funcion para onSubmit
	const handleSubmit = (event) => {
		//prevengo deafult, para no recargar, ni mandar 
		//datos del form en URL
		event.preventDefault();

		//creo el objeto de formdata, y le paso el valor de la referencia
		const formData = new FormData(form.current);

		//simulamos tx al Bend, simplemente validadmos
		const data = {
			username: formData.get('email'),
			password: formData.get('password'),
		}

		console.log(data);
	}
	return (
		<div className="Login">
			<div className="Login-container">
				<img src={logoYard} alt="logo" className="logo" />
				<form action="/" className="form" ref={form}>
					<label htmlFor="email" className="label">Email address</label>
					<input type="text" name='email' id="email" placeholder="platzi@example.cm" className="input input-email" />
					<label htmlFor="password" className="label">Password</label>
					<input type="password" name='password' id="password" placeholder="*********" className="input input-password" />
					<button
						type="submit"
						className="primary-button login-button"
						onClick={handleSubmit}
					>	Login </button>
					<a href="/">Forgot my password</a>
				</form>
				<button
					className="secondary-button signup-button"
				>Sign up</button>
			</div>
		</div>
	);
}

export { Login };
