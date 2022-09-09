import React from 'react';

import { AnTIrESPOnsIVE } from './AnTIrESPOnsIVE/AnTIrESPOnsIVE';

export default {
	title: 'TheSignUpForm',
	component: AnTIrESPOnsIVE,
};

const Template = (args) => (
	<AnTIrESPOnsIVE {...args}>
		<b>Welcome!</b>
		<p>Please (try to) sign up for Amplify. Good luck!</p>
	</AnTIrESPOnsIVE>
);

export const Primary = Template.bind({});
Primary.args = {};
