import dynamic from "next/dynamic";

const WoodedCampusAll = dynamic(() => import("src/components/facilities/WoodedCampusAll"), { ssr: false });

export default function Page() {
  return <WoodedCampusAll />;
}

