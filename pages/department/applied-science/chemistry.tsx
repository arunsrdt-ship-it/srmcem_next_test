import dynamic from "next/dynamic";

const DepartmentChemistry = dynamic(() => import("src/components/department/departmentChemistry/DepartmentChemistry"), { ssr: false });

export default function Page() {
  return <DepartmentChemistry />;
}

