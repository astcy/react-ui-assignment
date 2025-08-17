import type { Meta, StoryObj } from "@storybook/react";
import { DataTable } from "./DataTable";
import type { Column } from "../../types/table";
import React from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

const columns: Column<User>[] = [
  { key: "id", header: "ID" },
  { key: "name", header: "Name" },
  { key: "email", header: "Email" },
];

const data: User[] = [
  { id: 1, name: "Alice", email: "alice@mail.com" },
  { id: 2, name: "Bob", email: "bob@mail.com" },
  { id: 3, name: "Charlie", email: "charlie@mail.com" },
];

// Wrapper to satisfy Storybook generics
const DataTableUser = (args: React.ComponentProps<typeof DataTable<User>>) => (
  <DataTable<User> {...args} />
);

const meta: Meta<typeof DataTableUser> = {
  title: "Components/DataTable",
  component: DataTableUser,
  args: {
    data,
    columns,
    selectable: true,
  },
};
export default meta;

type Story = StoryObj<typeof DataTableUser>;

export const Default: Story = {};
export const Loading: Story = { args: {
  loading: false,
  selectable: false
} };
export const Empty: Story = { args: { data: [] } };
