import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import * as actions from '../../store/actions';
import Header from '../../components/Header';
import CountryDetails from '../../components/CountryDetails';
import Footer from '../../components/Footer';

import './styles.scss';

class Details extends PureComponent {
	componentDidMount() {
		const { id } = this.props.match.params;

		this.props.fetchCountryList(id);
	}

	render() {
		const {
			countryList,
			match: {
				params: {
					id,
				},
			},
		} = this.props;

		return (
			<div className = "details">
				<Header/>
				<div className = "details__main-content">
					{!!countryList[id] ? (
						<CountryDetails
							selectedCountry = {countryList[id].Country || ''}
							newConfirmed = {countryList[id].NewCases || null}
							newRecovered = {null}
							newDeaths = {countryList[id].NewDeaths || null}
							totalConfirmed = {countryList[id].TotalCases || null}
							totalRecovered = {null}
							totalDeaths = {countryList[id].TotalDeaths || null}
						/>
					) : (
						<span className = "details__empty-message">
							No data available
						</span>
					)}
				</div>
				<Footer/>
			</div>
		);
	}
}

Details.propTypes = {
	countryList: propTypes.object.isRequired,
	fetchCountryList: propTypes.func.isRequired,
}

const mapStateToProps = state => {
    return {
        countryList: state.toJS().country.all,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchCountryList: (id) => dispatch(actions.getCountryRequest(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Details);
