import dynamic from "next/dynamic";

const HowToApply = dynamic(() => import("src/components/apply/HowToApply"), { ssr: false });

export default function Page() {
  return <HowToApply />;
}

