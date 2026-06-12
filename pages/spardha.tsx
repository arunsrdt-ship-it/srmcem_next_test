import dynamic from "next/dynamic";

const Spardha = dynamic(() => import("src/components/spardhaFest/Spardha"), { ssr: false });

export default function Page() {
  return <Spardha />;
}

