import React, { useState} from "react";
import "./Dashboard.css";
import {Routes, Route, Link} from "react-router-dom";
import Profile from "../../Dashboard_Pages/Profile/Profile"
import Payment from "../../Dashboard_Pages/Payment/Payment"
import Request from "../../Dashboard_Pages/Request/Request"
import Logo from "../../assets/SideNav/utidia_logo1_adobe_express (1).svg"
import User from "../../assets/SideNav/icons8-customer (1).svg"
import message from "../../assets/SideNav/message.svg"
import payment from "../../assets/SideNav/payment.svg"
import logout_icon from "../../assets/SideNav/logout.svg"

const Dashboard = () => {
	const [Expanded, setExpandedState] = useState(false);


	const logout = () =>{

		localStorage.removeItem("talent")
		window.location = "/"
	}

	return (
		<div>
			<div
			className={
				Expanded
				? "side-nav-container"
				: "side-nav-container side-nav-container-NX"
			}
		>
			<div className="nav-upper">
				<div className="nav-heading">
					{Expanded && (
						<div className="nav-brand">
							<img src={Logo} alt="logo"/>
						</div>
					)}
					<button
						className={
							Expanded ? "hamburger hamburger-in" : "hamburger hamburger-out"
						}
						onClick={() => setExpandedState(!Expanded)}
					>
						<span></span>
						<span></span>
						<span></span>
					</button>
				</div>
				<div className="nav-menu" 

					onClick={() => setExpandedState(false)}
				>
					
					<Link to="/dashboard/profile"
						className={Expanded ? "menu-item" : "menu-item menu-item-NX"}
						
					>
						<img className="menu-item-icon" src={User}  alt="message-icon" />
						{Expanded && <p>{"Profile"}</p>}
					</Link>

					<Link to="dashboard/request"
						className={Expanded ? "menu-item" : "menu-item menu-item-NX"}
						
					>
						<img className="menu-item-icon" src={message}  alt="message-icon" />
						{Expanded && <p>{"Request"}</p>}
					</Link>

					<Link to="dashboard/payment"
						className={Expanded ? "menu-item" : "menu-item menu-item-NX"}
						
					>
						<img className="menu-item-icon" src={payment}  alt="payment-icon" />
						{Expanded && <p>{"Payment"}</p>}
					</Link>
					
				</div>
			</div>
			<div className="nav-footer">
				{Expanded && (
					<div className="nav-details">
						<div className="nav-footer-info">
							<p className="nav-footer-user-name">Logout</p>
						</div>
					</div>
				)}
				<img className="logout-icon" 
					src={logout_icon} 
					alt="logout icon" 
					onClick={logout}
				 />
			</div>


		</div>

			{/* PAGE ROUTING */}
			<div>
				<Routes>
					<Route path="/dashboard/profile/*" element={<Profile />} />
					<Route path="/dashboard/payment/*" element={<Payment />} />
					<Route path="/dashboard/request/*" element={<Request />} />
				</Routes>
			</div>
		</div>
		
		
	);
};

export default Dashboard;
