import React, { PureComponent } from 'react';
import propTypes from 'prop-types';
import moment from 'moment';

import ListItem from '../ListItem';

import './styles.scss';

class CountryHistory extends PureComponent {
	constructor(props) {
		super(props);

		this.renderHistoryList = this.renderHistoryList.bind(this);
	}

	renderHistoryList() {
		const {
			history,
		} = this.props;

		return history.length > 0 ? (
			<>
				<h3 className = "country-history__country">
					{history[0].Country}
				</h3>
				<ul className = "country-history__list">
					{history.map((item, index) => (
						<li
							key = {`history-${index}`}
							className = "country-history__item"
						>
							<ListItem
								name = {moment(item.Date).format('DD.MM.YYYY')}
								count = {item.Cases}
							/>
						</li>
					))}
				</ul>
			</>
		) : (
			<span className = "country-history__empty-message">
				No history data
			</span>
		)
	}

	render() {
		return (
			<div className = "country-history">
				{this.renderHistoryList()}
			</div>
		);
	}
}

CountryHistory.propTypes = {
	history: propTypes.array.isRequired,
}

export default CountryHistory;
