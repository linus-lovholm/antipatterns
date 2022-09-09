import React from 'react';

import { AnTIrESPOnsIVE } from './AnTIrESPOnsIVE/AnTIrESPOnsIVE';
import { NonCOmponent } from './NonCOmponent/NonCOmponent';
import { UnclickableButton } from './UnclickableButton/UnclickableButton';

export default {
	title: 'TheSignUpForm',
	component: AnTIrESPOnsIVE,
};

const Template = (args) => (
	<AnTIrESPOnsIVE {...args}>
		<b>Welcome!</b>
		<p>Please (try to) sign up for Amplify. Good luck!</p>
		<NonCOmponent />
		<UnclickableButton label="Skicka in" backgroundColor="yellow" />
	</AnTIrESPOnsIVE>
);

export const Primary = Template.bind({});
Primary.args = {};
