import dynamic from "next/dynamic";

const DepartmentPharmacy = dynamic(() => import("src/components/department/pharmacy/DepartmentPharmacy"), { ssr: false });

export default function Page() {
  return <DepartmentPharmacy />;
}

