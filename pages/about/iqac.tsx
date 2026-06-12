import dynamic from "next/dynamic";

const IQAC = dynamic(() => import("src/components/iqac/IQAC"), { ssr: false });

export default function Page() {
  return <IQAC />;
}

