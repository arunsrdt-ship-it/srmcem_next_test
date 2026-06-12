import dynamic from "next/dynamic";

const Visitors = dynamic(() => import("src/components/visitors/Visitors"), { ssr: false });

export default function Page() {
  return <Visitors />;
}

