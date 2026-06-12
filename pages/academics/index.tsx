import dynamic from "next/dynamic";

const Academics = dynamic(() => import("src/components/academics/Academics"), { ssr: false });

export default function Page() {
  return <Academics />;
}

