import dynamic from "next/dynamic";

const Membership = dynamic(() => import("src/components/Membership/Membership"), { ssr: false });

export default function Page() {
  return <Membership />;
}

