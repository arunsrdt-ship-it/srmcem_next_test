import dynamic from "next/dynamic";

const DepartmentMiscellaneous = dynamic(() => import("src/components/department/departmentMiscellaneous/DepartmentMiscellaneous"), { ssr: false });

export default function Page() {
  return <DepartmentMiscellaneous />;
}

