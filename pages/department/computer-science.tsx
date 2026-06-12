import dynamic from "next/dynamic";

const DepartmentComputerScience = dynamic(() => import("src/components/department/departmentComputerScience/DepartmentComputerScience"), { ssr: false });

export default function Page() {
  return <DepartmentComputerScience />;
}

