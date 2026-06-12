import dynamic from "next/dynamic";

const Facilities = dynamic(() => import("src/components/facilities/Facilities"), { ssr: false });

export default function Page() {
  return <Facilities />;
}

