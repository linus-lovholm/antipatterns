import React from 'react';

import { NonCOmponent } from './NonCOmponent';

export default {
  title: 'Example/NonCOmponent',
  component: NonCOmponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <NonCOmponent {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'NonCOmponent',
};

