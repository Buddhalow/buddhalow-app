import React from 'react'
import PropTypes from 'prop-types';
import numeral from 'numeral';


export class EnumeratedNumber extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			number: 0
		}
	}
	componentDidMount() {
		var g = setInterval(
			() => {
				if (this.state.number > this.props.number) {
					clearInterval(g)
					this.setState({number: this.props.number});
				}
				let number = this.state.number + this.props.number / 100;
				this.setState({number});
			}, 
			100 / this.props.number
		);
	}
	render() {
		return (
			<div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
				<h1>{numeral(this.state.number).format('0,0')}</h1>
				<p>{this.props.text}</p>
			</div>
		)
	}
}

EnumeratedNumber.propTypes = {
	number: PropTypes.number.isRequired,
	text: PropTypes.string.isRequired
}

export default EnumeratedNumber;