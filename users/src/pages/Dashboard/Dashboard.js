import React, { useState} from "react";
import "./Dashboard.css";
import {Routes, Route, Link} from "react-router-dom";
import Profile from "../../Dashboard_Pages/Profile/Profile"
import Payment from "../../Dashboard_Pages/Payment/Payment"
import Request from "../../Dashboard_Pages/Request/Request"
import Logo from "../../assets/SideNav/utidia_logo1_adobe_express (1).svg"
import User from "../../assets/SideNav/icons8-customer (1).svg"
import message from "../../assets/SideNav/message.svg"
import pie_chart from "../../assets/SideNav/pie-chart.svg"
import logout from "../../assets/SideNav/logout.svg"

const Dashboard = () => {
	const [Expanded, setExpandedState] = useState(false);

	let userDetails = JSON.parse( sessionStorage.getItem("userLoginDetails"))

	const redirect = () =>{
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
				<div className="nav-menu">
					
					<Link to="/profile"
						onClick={() => setExpandedState(!Expanded)}
						className={Expanded ? "menu-item" : "menu-item menu-item-NX"}
						
					>
						<img className="menu-item-icon" src={User}  alt="message-icon" />
						{Expanded && <p>{"Profile"}</p>}
					</Link>

					<Link to="/request"
						onClick={() => setExpandedState(!Expanded)}
						className={Expanded ? "menu-item" : "menu-item menu-item-NX"}
						
					>
						<img className="menu-item-icon" src={message}  alt="message-icon" />
						{Expanded && <p>{"Request"}</p>}
					</Link>

					<Link to="/payment"
						onClick={() => setExpandedState(!Expanded)}
						className={Expanded ? "menu-item" : "menu-item menu-item-NX"}
						
					>
						<img className="menu-item-icon" src={pie_chart}  alt="message-icon" />
						{Expanded && <p>{"Payment"}</p>}
					</Link>
					
				</div>
			</div>
			<div className="nav-footer">
				{Expanded && (
					<div className="nav-details">
						<div className="nav-footer-info">
							<p className="nav-footer-user-name">{userDetails.email}</p>
						</div>
					</div>
				)}
				<img className="logout-icon" 
					src={logout} 
					alt="" srcset="" 
					onClick={redirect}
				 />
			</div>


		</div>

			{/* PAGE ROUTING */}
			<div>
				<Routes>
					<Route path="profile/*" element={<Profile />} />
					<Route path="payment/*" element={<Payment />} />
					<Route path="request/*" element={<Request />} />
				</Routes>
			</div>
		</div>
		
		
	);
};

export default Dashboard;
