import dynamic from "next/dynamic";

const ImpPolicies = dynamic(() => import("src/components/impPolicies/ImpPolicies"), { ssr: false });

export default function Page() {
  return <ImpPolicies />;
}

