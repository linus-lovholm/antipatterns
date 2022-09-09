import React from 'react';

import { AnTIrESPOnsIVE } from './AnTIrESPOnsIVE/AnTIrESPOnsIVE';

export default {
	title: 'TheSignUpForm',
	component: AnTIrESPOnsIVE,
};

const Template = (args) => <AnTIrESPOnsIVE {...args}>Hello world</AnTIrESPOnsIVE>;

export const Primary = Template.bind({});
Primary.args = {};
