import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import * as actions from '../../store/actions';
import Header from '../../components/Header';
import CountryHistory from '../../components/CountryHistory';
import Footer from '../../components/Footer';

import './styles.scss';

class History extends PureComponent {
	componentDidMount() {
		const { id } = this.props.match.params;

		this.props.fetchAllHistory(id);
	}

	render() {
		const {
			history,
			match: {
				params: {
					id,
				},
			},
		} = this.props;
		
		return (
			<div className = "history">
				<Header/>
				<div className = "history__main-content">
					<CountryHistory
						history = {history[id] || []}
					/>
				</div>
				<Footer/>
			</div>
		);
	}
}

History.propTypes = {
	history: propTypes.object.isRequired,
	fetchAllHistory: propTypes.func.isRequired,
}

const mapStateToProps = state => {
    return {
        history: state.toJS().history.all,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchAllHistory: (id) => dispatch(actions.getHistoryRequest(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(History);
