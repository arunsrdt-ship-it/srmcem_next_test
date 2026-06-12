import dynamic from "next/dynamic";

const DepartmentHumanities = dynamic(() => import("src/components/department/departmentHumanities/DepartmentHumanities"), { ssr: false });

export default function Page() {
  return <DepartmentHumanities />;
}

