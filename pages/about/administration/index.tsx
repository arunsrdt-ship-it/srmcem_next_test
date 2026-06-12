import dynamic from "next/dynamic";

const Administration = dynamic(() => import("src/components/administration/Administration"), { ssr: false });

export default function Page() {
  return <Administration />;
}

