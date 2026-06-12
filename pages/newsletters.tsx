import dynamic from "next/dynamic";

const Newsletters = dynamic(() => import("src/components/newsletters/Newsletters"), { ssr: false });

export default function Page() {
  return <Newsletters />;
}

