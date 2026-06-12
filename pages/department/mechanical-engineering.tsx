import dynamic from "next/dynamic";

const DepartmentMechanicalEngineering = dynamic(() => import("src/components/departmentMechanicalEngineering/DepartmentMechanicalEngineering"), { ssr: false });

export default function Page() {
  return <DepartmentMechanicalEngineering />;
}

