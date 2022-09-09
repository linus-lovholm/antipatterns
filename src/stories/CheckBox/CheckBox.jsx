import React from 'react';
import PropTypes from 'prop-types';

/**
 * Primary UI component for user interaction
 */
export const CheckBox = ({ primary, backgroundColor, size, label, ...props }) => {
	return (
		<div>
			<input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" style={{ width: '4px' }}></input>
			<label for="answer"> I have read and accept the terms and conditions</label>
			<br></br>
			<h1>Terms of conditions see link https://www.apple.com/legal/internet-services/itunes/</h1>
			<div></div>
		</div>
	);
};
