import React from 'react';

import { UnclickableButton } from './UnclickableButton';

export default {
	title: 'Example/Button (Cant touch this)',
	component: UnclickableButton,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
};

const Template = (args) => (
	<div>
		<UnclickableButton {...args} />
	</div>
);

export const Primary = Template.bind({});
Primary.args = {
	primary: true,
	label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
	label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
	size: 'large',
	label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
	size: 'small',
	label: 'Button',
};
