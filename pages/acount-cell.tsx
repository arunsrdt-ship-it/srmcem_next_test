import dynamic from "next/dynamic";

const AcountCell = dynamic(() => import("src/components/acountCell/AcountCell"), { ssr: false });

export default function Page() {
  return <AcountCell />;
}

