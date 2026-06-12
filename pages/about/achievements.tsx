import dynamic from "next/dynamic";

const Achievements = dynamic(() => import("src/components/achievements/Achievements"), { ssr: false });

export default function Page() {
  return <Achievements />;
}

