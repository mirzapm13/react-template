import { createColumnHelper } from "@tanstack/react-table";
import { Button, Card, Checkbox } from "flowbite-react";
import { HiDownload, HiPlus, HiTrash } from "react-icons/hi";
import { Link } from "react-router-dom";
import Input from "../../../components/atoms/Input";
import Table from "../../../components/organisms/Table";

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

const Role = () => {
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
        <div className="flex justify-between">
          <Input name="search" placeholder="Search Here" />
          <Button.Group className="justify-end">
            <Button as={Link} to={"/role/new"} size="sm">
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

        <Table data={ROLES} columns={columns} />
      </Card>
    </div>
  );
};

export default Role;
