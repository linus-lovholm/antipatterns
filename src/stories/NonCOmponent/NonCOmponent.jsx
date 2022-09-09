import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { ChildNonComp } from './ChildNonComp';

/**
 * Primary UI component for user interaction
 */
export const NonCOmponent = ({ primary, backgroundColor, size, label, ...props }) => {
	const [whatEver, setWhatEver] = useState(1);

	const addNew = () => {
		setAlphaArray([...alphaArray, whatEver]);
		setWhatEver(whatEver + 1);
		/* setAll(all + letter); */
	};

	const [alphaArray, setAlphaArray] = useState([0]);
	/* const [all, setAll] = useState(''); */

	return (
		<div>
			<b>...............seLect NAme</b>

			<div style={{ width: '100%', display: 'flex', flexWrap: 'wrap' }}>
				{alphaArray.map((Child2, index) => (
					<ChildNonComp key={Child2} addNew={addNew} />
				))}
			</div>

			{/* <input type="text" disabled value={all} /> */}
		</div>
	);
};
