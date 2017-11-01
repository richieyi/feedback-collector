import React, { Component } from 'react';

class SurveyList extends Component {
	componentDidMount() {
		this.props.fetchSurveys();
	}
	renderSurveys() {
		return this.props.surveys.reverse().map(survey => {
			return (
				<div className="card blue-grey darken-1" key={survey._id}>
					<div className="card-content white-text">
						<span className="card-title">{survey.title}</span>
						<p>{survey.body}</p>
						<p className="right">
							Sent On:{' '}
							{new Date(survey.dateSent).toLocaleDateString()}
						</p>
					</div>
					<div className="card-action">
						<a>Yes: {survey.yes}</a>
						<a>No: {survey.no}</a>
					</div>
				</div>
			);
		});
	}
	render() {
		return <div>{this.renderSurveys()}</div>;
	}
}

export default SurveyList;
