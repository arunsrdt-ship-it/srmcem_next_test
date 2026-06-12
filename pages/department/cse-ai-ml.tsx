import dynamic from "next/dynamic";

const CseAiMl = dynamic(() => import("src/components/cse/CseAiMl"), { ssr: false });

export default function Page() {
  return <CseAiMl />;
}

