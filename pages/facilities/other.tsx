import dynamic from "next/dynamic";

const FacilitiesOther = dynamic(() => import("src/components/facilitiesOther/FacilitiesOther"), { ssr: false });

export default function Page() {
  return <FacilitiesOther />;
}

