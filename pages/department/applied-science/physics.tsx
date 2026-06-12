import dynamic from "next/dynamic";

const DeapartmentPhysics = dynamic(() => import("src/components/department/departmentPhysics/DeapartmentPhysics"), { ssr: false });

export default function Page() {
  return <DeapartmentPhysics />;
}

