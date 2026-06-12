import dynamic from "next/dynamic";

const DepartmentCivilEngeneering = dynamic(() => import("src/components/department/departmentCivilEngeneering/DepartmentCivilEngeneering"), { ssr: false });

export default function Page() {
  return <DepartmentCivilEngeneering />;
}

