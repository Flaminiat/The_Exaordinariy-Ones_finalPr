import React from "react";
import "./About.css";
import { NavLink } from "react-router-dom";
const About = ()=>(
	<>
		<h1>On the ground around the world</h1>
		<br />
		<div>
			<div className="image-container">
				<img src="https://2.bp.blogspot.com/-CT-wzQgbXHo/W8w8iJFSjLI/AAAAAAAAxxE/Vd7g942qcHEL7m-Af6nK1MoNjWgVhlongCLcBGAs/s1600/cq5dam.thumbnail.cropped.1000.563.jpeg" />
			</div>
		</div>
		<br /><br />
		<p>Caritas Internationalis is confederation of over 160 members who are working at the grassroots in almost every country of the world. When a crisis hits, Caritas is already on the ground. The diverse members give us our strength – from small groups of volunteers to some of the biggest global charities. Inspired by Catholic faith, Caritas is the helping hand of the Church – reaching out to the poor, vulnerable and excluded, regardless of race or religion, to build a world based on justice and fraternal love.

Caritas Internationalis has its headquarters in Rome – co-ordinating emergency operations, formulating development policy and advocating for a better world for everyone. All national Caritas organisations are members of their own regional Caritas networks and the international confederation.

From the founding of the first Caritas in Germany in 1897, to the setting up of Caritas Internationalis in 1951, until today, Caritas has a rich history of listening respectfully to the suffering of the poor and giving them the tools to transform their own lives. The deep moral and spiritual principles of dignity, justice, solidarity and stewardship still guide Caritas today.</p>
		<br /> <br />

		<div className="container">
			<NavLink className="btn btn-danger" to="/">
            Where we are
			</NavLink>
		</div>
	</>

);



export default About;