import { createColumnHelper } from "@tanstack/react-table";
import { Button, Card, Checkbox } from "flowbite-react";
import { HiDownload, HiPlus, HiTrash } from "react-icons/hi";
import { Link } from "react-router-dom";
import Input from "../../../components/atoms/Input";
import Table from "../../../components/organisms/Table";

type TUser = {
  id: string | number;
  checked: boolean;
  name: string;
  email: string;
  active: boolean;
};

const data: TUser[] = [
  {
    id: 1,
    checked: false,
    name: "Admin",
    email: "admin@galeri24.co.id",
    active: false,
  },
  {
    id: 2,
    checked: false,
    name: "Direksi",
    email: "direksi@galeri24.co.id",
    active: true,
  },
];

const User = () => {
  const columnHelper = createColumnHelper<TUser>();

  const columns = [
    columnHelper.accessor("checked", {
      cell: (info) => (
        <div className="text-center">
          <Checkbox defaultChecked={info.getValue()} />
        </div>
      ),
    }),
    columnHelper.accessor("name", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Name",
    }),
    columnHelper.accessor("email", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Email",
    }),
    columnHelper.accessor("active", {
      cell: (info) => (
        <div className="text-center">
          <Checkbox defaultChecked={info.getValue()} />
        </div>
      ),
    }),
  ];

  return (
    <div className="p-6">
      <Card>
        <div className="flex justify-between">
          <Input name="search" placeholder="Search Here" />
          <Button.Group className="justify-end">
            <Button as={Link} to={"/user/new"} size="sm">
              <HiPlus size={20} /> New
            </Button>
            <Button color="failure" size="sm">
              <HiTrash size={20} />
              Delete
            </Button>
            <Button color="dark" size="sm">
              <HiDownload size={20} />
              Export
            </Button>
          </Button.Group>
        </div>
        <Table data={data} columns={columns} />
      </Card>
    </div>
  );
};

export default User;
