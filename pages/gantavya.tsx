import dynamic from "next/dynamic";

const Gantvaya = dynamic(() => import("src/components/gantvaya/Gantvaya"), { ssr: false });

export default function Page() {
  return <Gantvaya />;
}

