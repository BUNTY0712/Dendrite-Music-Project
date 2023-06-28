import React, { useState, useEffect } from 'react';
import Keycloak from 'keycloak-js';
import keycloakConfig from '../keycloakConfig';

function AuthPage() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [keycloak, setKeycloak] = useState(null);

	useEffect(() => {
		const initKeycloak = async () => {
			const keycloak = Keycloak(keycloakConfig);
			await keycloak.init({ onLoad: 'login-required' });
			setKeycloak(keycloak);
		};

		initKeycloak();
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (keycloak) {
			keycloak.login();
		}
	};

	return (
		<div>
			<h1>User Authorization</h1>
			<form onSubmit={handleSubmit}>
				<label>
					Email:
					<input
						type='email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</label>
				<br />
				<label>
					Password:
					<input
						type='password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</label>
				<br />
				<button type='submit'>Log In</button>
			</form>
		</div>
	);
}

export default AuthPage;
