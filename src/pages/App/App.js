import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { Modal } from 'react-responsive-modal';

import * as actions from '../../store/actions';
import Header from '../../components/Header';
import CountriesList from '../../components/CountriesList';
import CountryDetails from '../../components/CountryDetails';
import CountryHistory from '../../components/CountryHistory';
import Footer from '../../components/Footer';

import 'react-responsive-modal/styles.css';
import './styles.scss';

class App extends PureComponent {
	constructor(props) {
		super(props);
		
		this.state = {
			selectedCountry: '',
			isModalOpened: false,
		}

		this.selectCountry = this.selectCountry.bind(this);
		this.toggleModal = this.toggleModal.bind(this);
	}

	selectCountry(country = '') {
		this.setState({
			selectedCountry: country,
		})
	}

	toggleModal() {
		this.setState({
			isModalOpened: !this.state.isModalOpened,
		})
	}

	render() {
		const {
			selectedCountry,
			isModalOpened,
		} = this.state;
		const {
			countries,
			history,
			fetchAllCountries,
			fetchAllHistory,
		} = this.props;
		const selectedCountryData = selectedCountry !== '' ?
			countries.find(country => country.Slug === selectedCountry) : {};

		return (
			<div className = "app">
				<Header/>
				<div className = "app__main-content">
					{countries.length > 0 ? (
						<>
							<div className = "app__list-container">
								<CountriesList
									countries = {countries}
									selectCountry = {this.selectCountry}
								/>
							</div>
							{selectedCountry !== '' && (
								<div className = "app__details-container">
									<CountryDetails
										selectedCountry = {selectedCountryData.Country || ''}
										selectCountry = {this.selectCountry}
										newConfirmed = {selectedCountryData.NewConfirmed || null}
										newRecovered = {selectedCountryData.NewRecovered || null}
										newDeaths = {selectedCountryData.NewDeaths || null}
										totalConfirmed = {selectedCountryData.TotalConfirmed || null}
										totalRecovered = {selectedCountryData.TotalRecovered || null}
										totalDeaths = {selectedCountryData.TotalDeaths || null}
									/>
									<button
										className = "app__history-button"
										onClick = {() => {
											fetchAllHistory(selectedCountry);
											this.toggleModal();
										}}
									>
										View history
									</button>
								</div>
							)}
						</>
					) : (
						<button
							className = "app__countries-button"
							onClick = {() => {fetchAllCountries()}}
						>
							Get latest data
						</button>
					)}
				</div>
				<Footer/>
				<Modal
					open = {isModalOpened}
					onClose = {() => {this.toggleModal()}}
					showCloseIcon = {false}
					center
				>
					<CountryHistory
						history = {history[selectedCountry] || []}
					/>
				</Modal>
			</div>
		);
	}
}

App.propTypes = {
	countries: propTypes.array.isRequired,
	history: propTypes.object.isRequired,
	fetchAllCountries: propTypes.func.isRequired,
	fetchAllHistory: propTypes.func.isRequired,
}

const mapStateToProps = state => {
    return {
		countries: state.toJS().countries.all,
		history: state.toJS().history.all,
    }
}

const mapDispatchToProps = dispatch => {
    return {
		fetchAllCountries: () => dispatch(actions.getCountriesRequest()),
		fetchAllHistory: (id) => dispatch(actions.getHistoryRequest(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
