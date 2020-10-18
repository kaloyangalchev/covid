import React, { PureComponent } from 'react';

import './styles.scss';

class Header extends PureComponent {
	render() {
		return (
			<div className = "header">
				<div className = "header__content">
					<h1 className = "header__heading">
						COVID-19 Stats
					</h1>
					<p className = "header__subheading">
						Welcome to the COVID-19 Statistics tool. Here you can find the latest data about the pandemic worldwide.
					</p>
				</div>
			</div>
		);
	}
}

export default Header;
