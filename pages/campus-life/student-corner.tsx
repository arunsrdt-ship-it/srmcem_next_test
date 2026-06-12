import dynamic from "next/dynamic";

const CampusLife = dynamic(() => import("src/components/campus/CampusLife"), { ssr: false });

export default function Page() {
  return <CampusLife />;
}

