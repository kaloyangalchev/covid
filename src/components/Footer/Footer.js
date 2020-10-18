import React, { PureComponent } from 'react';

import './styles.scss';

class Footer extends PureComponent {
	render() {
		return (
			<div className = "footer">
				<div className = "footer__content">
					<span className = "footer__label">
						Copyrights 2020
					</span>
				</div>
			</div>
		);
	}
}

export default Footer;
