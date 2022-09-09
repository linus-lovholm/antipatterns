import React from 'react';

import { AnTIrESPOnsIVE } from './AnTIrESPOnsIVE/AnTIrESPOnsIVE';
import { NonCOmponent } from './NonCOmponent/NonCOmponent';
import { UnclickableButton } from './UnclickableButton/UnclickableButton';
import { CheckBox } from './CheckBox/CheckBox';

export default {
	title: 'TheSignUpForm',
	component: AnTIrESPOnsIVE,
};

const Template = (args) => (
	<AnTIrESPOnsIVE {...args}>
		<h1>Welcome!</h1>
		<p>Please (try to) sign up for Amplify. Good luck!</p>
		<hr />
		<NonCOmponent />
		<hr />
		<CheckBox />
		<hr />
		<UnclickableButton label="Skicka in" backgroundColor="yellow" />
	</AnTIrESPOnsIVE>
);

export const Primary = Template.bind({});
Primary.args = {};
