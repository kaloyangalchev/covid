import React, { PureComponent } from 'react';
import propTypes from 'prop-types';

import './styles.scss';

class ListItem extends PureComponent {
	render() {
		const {
			name,
			slug,
			count,
			clickHandler,
		} = this.props;

		return (
			<div
				className = "list-item"
				onClick = {() => {clickHandler(slug)}}
			>
				<span className = "list-item__name">
					{name}
				</span>
				<span className = "list-item__count">
					{count}
				</span>
			</div>
		);
	}
}

ListItem.defaultProps = {
	clickHandler: () => {},
	slug: '',
}

ListItem.propTypes = {
	name: propTypes.string.isRequired,
	slug: propTypes.string.isRequired,
	count: propTypes.number.isRequired,
	clickHandler: propTypes.func.isRequired,
}

export default ListItem;
