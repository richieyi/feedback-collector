import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';

class Payments extends Component {
	render() {
		return (
			<StripeCheckout
				name="FeedbackCollector"
				amount={500}
				description="$5.00 for 5 email credits"
				token={token => console.log(token)}
				stripeKey={process.env.REACT_APP_STRIPE_KEY}
			>
				<button className="btn">Add Credits</button>
			</StripeCheckout>
		);
	}
}

export default Payments;
