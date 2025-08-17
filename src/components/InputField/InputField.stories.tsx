import type { Meta, StoryObj } from "@storybook/react";
import { InputField } from "./InputField";

const meta: Meta<typeof InputField> = {
  title: "Components/InputField",
  component: InputField,
  args: {
    label: "Name",
    placeholder: "Enter your name",
    variant: "outlined",
    size: "md",
    value: "",
  },
  parameters: { controls: { sort: "requiredFirst" } },
};
export default meta;

type Story = StoryObj<typeof InputField>;

export const Default: Story = {};
export const Error: Story = { args: { errorMessage: "Required field", invalid: true } };
export const Disabled: Story = { args: { disabled: true } };
export const Loading: Story = { args: { loading: true } };
export const Password: Story = { args: { type: "password" } };
export const Clearable: Story = { args: { clearable: true, value: "Text" } };
export const Variants: Story = {
  render: (args) => (
    <div className="grid gap-4">
      <InputField {...args} variant="filled" label="Filled" />
      <InputField {...args} variant="outlined" label="Outlined" />
      <InputField {...args} variant="ghost" label="Ghost" />
    </div>
  ),
};
