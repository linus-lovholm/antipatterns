import React from 'react';

import { AnTIrESPOnsIVE } from './AnTIrESPOnsIVE/AnTIrESPOnsIVE';
import { NonCOmponent } from './NonCOmponent/NonCOmponent';
import { UnclickableButton } from './UnclickableButton/UnclickableButton';
import { CheckBox } from './CheckBox/CheckBox';
import { Emailinput } from './Emailinput/Emailinput';
import { Button } from './Button/Button';
import Test from './testcomponent/Test';

export default {
	title: 'TheSignUpForm',
	component: AnTIrESPOnsIVE,
};

const Template = (args) => (
	<AnTIrESPOnsIVE {...args}>
		<Test backgroundColor="yellow" padding={0} color="black" />
		<p>Please (try to) sign up for Amplify. Lycka till!</p>
		<hr />
		<NonCOmponent />
		<hr />
		<Emailinput />
		<hr />
		<CheckBox />
		<hr />
		<UnclickableButton label="Skicka in" backgroundColor="yellow" />
		<hr />
		<Button label="Logga in instead" backgroundColor="purple" />
	</AnTIrESPOnsIVE>
);

export const Unusable = Template.bind({});
Unusable.args = {};

export const Clean = Template.bind({});
Clean.args = { clean: true };
