import dynamic from "next/dynamic";

const CampusTour = dynamic(() => import("src/components/campusTour/CampusTour"), { ssr: false });

export default function Page() {
  return <CampusTour />;
}

