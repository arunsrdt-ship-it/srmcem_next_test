import dynamic from "next/dynamic";

const Career = dynamic(() => import("src/components/career/Career"), { ssr: false });

export default function Page() {
  return <Career />;
}

