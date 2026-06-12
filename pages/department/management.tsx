import dynamic from "next/dynamic";

const ManagementDepartment = dynamic(() => import("src/components/department/management/ManagementDepartment"), { ssr: false });

export default function Page() {
  return <ManagementDepartment />;
}

