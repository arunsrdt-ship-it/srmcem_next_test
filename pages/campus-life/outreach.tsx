import dynamic from "next/dynamic";

const OutReach = dynamic(() => import("src/components/outreach/OutReach"), { ssr: false });

export default function Page() {
  return <OutReach />;
}

