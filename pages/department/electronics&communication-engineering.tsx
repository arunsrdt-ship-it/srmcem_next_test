import dynamic from "next/dynamic";

const DepartmentElectronicsAndComm = dynamic(() => import("src/components/department/departmentElectronics&Comm/DepartmentElectronicsAndComm"), { ssr: false });

export default function Page() {
  return <DepartmentElectronicsAndComm />;
}

