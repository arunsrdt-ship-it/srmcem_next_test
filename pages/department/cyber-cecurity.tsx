import dynamic from "next/dynamic";

const CyberSecurity = dynamic(() => import("src/components/cse/CyberSecurity"), { ssr: false });

export default function Page() {
  return <CyberSecurity />;
}

