import dynamic from "next/dynamic";

const Admissions = dynamic(() => import("src/components/admissions/Admissions"), { ssr: false });

export default function Page() {
  return <Admissions />;
}

