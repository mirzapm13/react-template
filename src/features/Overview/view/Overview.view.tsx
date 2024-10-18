import clsx from "clsx";
import { Card } from "flowbite-react";
import Subheader from "../../../components/organisms/Subheader/Subheader.component";
import s from "./Overview.module.css";

const Overview = () => {
  return (
    <>
      <Subheader />

      <div className="ModuleContainer">
        <div className={clsx(s.Container)}>
          <div>Overview Test</div>
          <div className={clsx(s.Overview)}>
            <Card className="col-start-1 col-end-3">Card 1</Card>
            <Card className="col-start-3 col-end-6">Card 2</Card>
            <Card className="col-start-1 col-end-2">Card 2</Card>
            <Card className="col-start-2 col-end-4">Card 2</Card>
            <Card className="col-start-4 col-end-6">Card 2</Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
