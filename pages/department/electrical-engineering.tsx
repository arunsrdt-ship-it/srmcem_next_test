import dynamic from "next/dynamic";

const DepartmentElectricalEngineering = dynamic(() => import("src/components/department/departmentElectricalEngineering/DepartmentElectricalEngineering"), { ssr: false });

export default function Page() {
  return <DepartmentElectricalEngineering />;
}

