import React from 'react';

import { Emailinput } from './Emailinput';

export default {
  title: 'Example/Emailinput',
  component: Emailinput,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Emailinput {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Emailinput',
};


