import dynamic from "next/dynamic";

const DepartmentComputerApplication = dynamic(() => import("src/components/department/departmentComputerApplication/DepartmentComputerApplication"), { ssr: false });

export default function Page() {
  return <DepartmentComputerApplication />;
}

