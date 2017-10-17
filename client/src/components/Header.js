import React, { Component } from 'react';

class Header extends Component {
	render() {
		return (
			<nav>
				<div className="nav-wrapper">
					<a href="/" className="left brand-logo">
						FeedbackCollector
					</a>
					<ul className="right">
						<li>
							<a>Login With Google</a>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default Header;
