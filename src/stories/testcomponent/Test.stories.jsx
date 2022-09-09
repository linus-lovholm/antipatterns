import Test from "./Test";

export default {
  title: "testcomponent/Test",
  component: Test,
  argTypes: {
    backgroundColor: { control: "color" },
    color: { control: "color" },
    padding: { control: "number", defaultValue: 5 },
  },
};

export const Component = (args) => <Test {...args} />;
