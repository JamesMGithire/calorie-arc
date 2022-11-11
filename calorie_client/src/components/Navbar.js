import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';
import './Navbar.css';

function Navbar({ button }) {
	const [toggle, setToggle] = useState(false);
	const [mobileView, setMobileView] = useState(false);

	window.addEventListener('resize', () => {
		if (window.innerWidth < 480) {
			setMobileView(true);
			setToggle(false);
		} else {
			setMobileView(false);
		}
	});

	return (
		<div className="wrapper">
			<nav className="navbar">
				<div className="logo">
					<NavLink to="/">Calorie-Arc</NavLink>
					<span></span>
				</div>
				<FaBars className="toggle" onClick={() => setToggle(!toggle)} />
				<ul
					className="menu"
					style={mobileView ? { display: toggle ? 'flex' : 'none' } : {}}
					onClick={() => setToggle(!toggle)}
				>
					<li>
						<NavLink to="/login">LogIn</NavLink>
					</li>
					<li>
						<NavLink to="/Mealplan">Meal Plan</NavLink>
					</li>
					<li>
						<NavLink to="/signup">Sign Up</NavLink>
					</li>
					<li>
						<NavLink to="/contactus">Contact Us</NavLink>
					</li>
					<li>{button}</li>
				</ul>
			</nav>
		</div>
	);
}

export default Navbar;