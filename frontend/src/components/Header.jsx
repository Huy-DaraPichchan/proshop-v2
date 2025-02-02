import React from "react";
import { Badge, Navbar, Nav, Container } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Logo from "../assets/logo.png";

const Header = () => {
	const { cartItems } = useSelector((state) => state.cart);
	return (
		<header>
			<Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
				<Container>
					<Nav.Link as={Link} to="/">
						<Navbar.Brand>
							<img src={Logo} alt="MeyShop logo" />
							MeyShop
						</Navbar.Brand>
					</Nav.Link>
					<Navbar.Toggle aria-controls="basic" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ms-auto">
							<Nav.Link as={Link} to="/cart">
								<FaShoppingCart /> Cart
								{cartItems.length > 0 && (
									<Badge
										pill
										bg="success"
										style={{ marginLeft: "5px" }}
									>
										{cartItems.reduce(
											(acc, item) => acc + item.qty,
											0
										)}
									</Badge>
								)}
							</Nav.Link>
							<Nav.Link as={Link} to="/login">
								<FaUser /> Sign In
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;
