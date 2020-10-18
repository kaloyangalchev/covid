import React, { PureComponent } from 'react';
import classnames from 'classnames';
import propTypes from 'prop-types';

import ListItem from '../ListItem';

import './styles.scss';

class CountriesList extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			listSize: 10,
			isOrderDescending: true,
		}

		this.renderCountriesList = this.renderCountriesList.bind(this);
		this.increaseListSize = this.increaseListSize.bind(this);
		this.toggleListOrder = this.toggleListOrder.bind(this);
	}

	increaseListSize() {
		this.setState({
			listSize: this.state.listSize + 10,
		})
	}

	toggleListOrder() {
		this.setState({
			isOrderDescending: !this.state.isOrderDescending,
		})
	}

	renderCountriesList() {
		const {
			listSize,
			isOrderDescending,
		} = this.state;
		const {
			countries,
			selectCountry,
		} = this.props;
		const shouldRenderLoadMore = countries.length > listSize;
		const alternativeOrderType = isOrderDescending ? 'ascending' : 'descending';
		const orderedCountries = countries.sort((a, b) => {
			if(isOrderDescending) {
				return (a.TotalConfirmed < b.TotalConfirmed) ? 1 : -1;
			} else {
				return (a.TotalConfirmed > b.TotalConfirmed) ? 1 : -1;
			}
		})
		
		return orderedCountries.length > 0 ? (
			<>
				<button
					className = {classnames(
						"countries-list__order-button",
						`countries-list__order-button--${alternativeOrderType}`
					)}
					onClick = {() => {this.toggleListOrder()}}
				>
					switch to {alternativeOrderType}
				</button>
				<ul className = "countries-list__countries">
					{orderedCountries.slice(0, listSize).map((country, index) => (
						<li
							key = {index}
							className = "countries-list__country"
						>
								<ListItem
									name = {country.Country}
									slug = {country.Slug}
									count = {country.TotalConfirmed}
									clickHandler = {selectCountry}
								/>
						</li>
					))}
				</ul>
				{shouldRenderLoadMore && (
					<button
						className = "countries-list__load-more-button"
						onClick = {() => {this.increaseListSize()}}
					>
						Load more
					</button>
				)}
			</>
		) : (
			<span className = "countries-list__empty-message">
				No countries
			</span>
		)
	}

	render() {
		return (
			<div className = "countries-list">
				{this.renderCountriesList()}
			</div>
		);
	}
}

CountriesList.propTypes = {
	countries: propTypes.array.isRequired,
	selectCountry: propTypes.func.isRequired,
}

export default CountriesList;
