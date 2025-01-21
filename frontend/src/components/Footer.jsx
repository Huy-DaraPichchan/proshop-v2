import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
	const getCurrentYear = new Date().getFullYear();
	return (
		<footer>
			<Container>
				<Row>
					<Col className="text-center py-3">
						<p>MeyShop &copy; {getCurrentYear}</p>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;
