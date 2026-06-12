import dynamic from "next/dynamic";

const TermCondition = dynamic(() => import("src/components/footer/TermCondition"), { ssr: false });

export default function Page() {
  return <TermCondition />;
}

