import dynamic from "next/dynamic";

const DataSceince = dynamic(() => import("src/components/cse/DataSceince"), { ssr: false });

export default function Page() {
  return <DataSceince />;
}

