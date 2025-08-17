import React, { useState } from "react";
import { InputField } from "./components/InputField/InputField";
import { DataTable } from "./components/DataTable/DataTable";
import type { Column } from "./types/table";

type User = { id: number; name: string; email: string };

const columns: Column<User>[] = [
  { key: "id", header: "ID" },
  { key: "name", header: "Name" },
  { key: "email", header: "Email" },
];

const mock: User[] = [
  { id: 1, name: "Ashu", email: "ashu@mail.com" },
  { id: 2, name: "Pandit", email: "pandit@mail.com" },
  { id: 3, name: "Chaubey", email: "chaubey@mail.com" },
];

export default function App() {
  const [value, setValue] = useState("");

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-10 px-6">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <header className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
            React UI Assignment
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Demo of <span className="font-semibold">InputField</span> &
            <span className="font-semibold"> DataTable</span> with Tailwind and Storybook
          </p>
        </header>

        {/* InputField Showcase */}
        <section className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-6 space-y-6">
          <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
            InputField Showcase
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <InputField
              label="Name"
              placeholder="Enter your name"
              value={value}
              onChange={(e) => setValue((e.target as HTMLInputElement).value)}
              helperText="This is helper text"
              variant="outlined"
              size="md"
              clearable
            />
            <InputField
              label="Password"
              placeholder="Enter your password"
              value=""
              type="password"
              variant="filled"
              size="md"
            />
            <InputField label="Disabled" disabled variant="ghost" />
            <InputField
              label="Invalid"
              errorMessage="This field is required"
              invalid
            />
          </div>
        </section>

        {/* DataTable Showcase */}
        <section className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-6 space-y-6">
          <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
            DataTable Showcase
          </h2>
          <DataTable<User>
            data={mock}
            columns={columns}
            selectable
            onRowSelect={(rows) => console.log(rows)}
          />
        </section>
      </div>
    </div>
  );
}
