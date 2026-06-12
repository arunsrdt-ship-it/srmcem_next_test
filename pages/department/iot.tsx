import dynamic from "next/dynamic";

const IOT = dynamic(() => import("src/components/cse/IOT"), { ssr: false });

export default function Page() {
  return <IOT />;
}

