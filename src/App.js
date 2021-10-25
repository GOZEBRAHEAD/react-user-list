import Card from "./components/Card/Card";
import Container from "./components/Container/Container";
import CustomForm from "./components/CustomForm/CustomForm";
import { useState } from "react";
import "./App.css";

function App() {

	const [usuarios, setUsuarios] = useState([]);

	const submit = (usuario) => {

		setUsuarios([...usuarios, usuario]);
	};

	return (
		<Container>
			<div className="left">
				<div className="inputs">
					<Card>
						<CustomForm submit={ submit } />
					</Card>
				</div>

				<div className="socials">
					<div>
						<a href="https://github.com/GOZEBRAHEAD" aria-label="GitHub" target="_blank" rel="noreferrer">
							<i className="fab fa-github"></i>
						</a>
						<a href="https://www.linkedin.com/in/luciano-nieves/" aria-label="LinkedIn" target="_blank" rel="noreferrer">
							<i className="fab fa-linkedin"></i>
						</a>
						<a href="https://www.instagram.com/lucho_nieves/" aria-label="Instagram" target="_blank" rel="noreferrer">
							<i className="fab fa-instagram"></i>
						</a>
					</div>
				</div>
			</div>
			
			<div className="results">
				<Card>
					<ul>
						{
							usuarios.map(user => 
								<li key={ user.email }>
									{`- ${ user.name } ${ user.lastname } => ${ user.email }`}
								</li>
							)
						}
					</ul>
				</Card>
			</div>
		</Container>
	);
}

export default App;
