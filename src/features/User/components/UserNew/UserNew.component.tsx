import { createColumnHelper } from "@tanstack/react-table";
import { Button, Card, Checkbox } from "flowbite-react";
import CustomSelect from "../../../../components/atoms/CustomSelect";
import Input from "../../../../components/atoms/Input";
import Table from "../../../../components/organisms/Table";

const POSITION = [
  { label: "Admin", value: "admin" },
  { label: "Direksi", value: "direksi" },
];

const DEPARTMENT = [
  { label: "IT", value: "it" },
  { label: "HR", value: "hr" },
];

const ROLES = [
  {
    name: "Admin",
    descritpion: "Admin Role",
    active: false,
  },
  {
    name: "Direksi",
    descritpion: "Direksi",
    active: false,
  },
];

const UserNew = () => {
  const columnHelper = createColumnHelper<(typeof ROLES)[0]>();

  const columns = [
    columnHelper.accessor("name", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Name",
    }),
    columnHelper.accessor("descritpion", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Description",
    }),
    columnHelper.accessor("active", {
      cell: (info) => (
        <div className="text-center">
          <Checkbox defaultChecked={info.getValue()} />
        </div>
      ),
      header: "Active",
    }),
  ];

  return (
    <div className="p-6">
      <Card>
        <p className="text-xl">Create New User</p>
        <form className="grid gap-4">
          <Input name="name" label="Name" />
          <Input name="email" label="Email" />
          <Input name="password" label="Password" />
          <Input name="nik" label="NIK" />
          <CustomSelect name="position" label="Position" options={POSITION} />
          <CustomSelect name="department" label="HR" options={DEPARTMENT} />

          <div className="flex flex-col gap-2">
            <p>Roles</p>
            <Table data={ROLES} columns={columns} />
          </div>

          <div className="flex justify-end">
            <Button>Submit</Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default UserNew;
