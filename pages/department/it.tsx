import dynamic from "next/dynamic";

const DepartmentInformationTechnology = dynamic(() => import("src/components/department/departmentInformationTechnology/DepartmentInformationTechnology"), { ssr: false });

export default function Page() {
  return <DepartmentInformationTechnology />;
}

