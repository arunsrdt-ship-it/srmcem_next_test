import dynamic from "next/dynamic";

const CentralLibrary = dynamic(() => import("src/components/centralLibrary/CentralLibrary"), { ssr: false });

export default function Page() {
  return <CentralLibrary />;
}

