import dynamic from "next/dynamic";

const DepartmentMathmetics = dynamic(() => import("src/components/department/departmentMathmetics/DepartmentMathmetics"), { ssr: false });

export default function Page() {
  return <DepartmentMathmetics />;
}

