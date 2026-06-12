import dynamic from "next/dynamic";

const Download = dynamic(() => import("src/components/download/Download"), { ssr: false });

export default function Page() {
  return <Download />;
}

