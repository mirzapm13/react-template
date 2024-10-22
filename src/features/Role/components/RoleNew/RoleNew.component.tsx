import { Card } from "flowbite-react";
import Input from "../../../../components/atoms/Input";
import TextArea from "../../../../components/atoms/TextArea";

const RoleNew = () => {
  return (
    <div className="p-6">
      <Card>
        <p className="text-xl">Create New Role</p>
        <form className="grid gap-4">
          <Input name="name" label="Admin" />
          <TextArea label="Description" name="description" />

          <div className="flex flex-col gap-2">
            <p>Roles</p>
            {/* <Table data={ROLES} columns={columns} /> */}
          </div>
        </form>
      </Card>
    </div>
  );
};

export default RoleNew;
