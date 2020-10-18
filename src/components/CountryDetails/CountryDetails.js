import React, { PureComponent } from 'react';
import propTypes from 'prop-types';

import './styles.scss';

class CountryDetails extends PureComponent {
	render() {
		const {
			selectedCountry,
			selectCountry,
			newConfirmed,
			newRecovered,
			newDeaths,
			totalConfirmed,
			totalRecovered,
			totalDeaths,
		} = this.props;

		return (
			<div className = "country-details">
				<h3 className = "country-details__heading">
					{selectedCountry}
				</h3>
				{typeof selectCountry === 'function' && (
					<button
						className = "country-details__close-button"
						onClick = {() => {selectCountry()}}
					>
						X
					</button>
				)}
				<div className = "country-details__data">
					<span className = "country-details__data-item">
						New confirmed: {newConfirmed}
					</span>
					<span className = "country-details__data-item">
						New recovered: {newRecovered}
					</span>
					<span className = "country-details__data-item">
						New deaths: {newDeaths}
					</span>
					<span className = "country-details__data-item">
						Total confirmed: {totalConfirmed}
					</span>
					<span className = "country-details__data-item">
						Total recovered: {totalRecovered}
					</span>
					<span className = "country-details__data-item">
						Total deaths: {totalDeaths}
					</span>
				</div>
			</div>
		);
	}
}

CountryDetails.propTypes = {
	selectedCountry: propTypes.string.isRequired,
	selectCountry: propTypes.func,
	newConfirmed: propTypes.number,
	newRecovered: propTypes.number,
	newDeaths: propTypes.number,
	totalConfirmed: propTypes.number,
	totalRecovered: propTypes.number,
	totalDeaths: propTypes.number,
};

export default CountryDetails;
