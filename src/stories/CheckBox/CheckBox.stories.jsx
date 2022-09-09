


import React from 'react';

import { CheckBox } from './CheckBox';

export default {
  title: 'Example/CheckBox',
  component: CheckBox,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <CheckBox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'CheckBox',
};