import dynamic from "next/dynamic";

const WiwaClub = dynamic(() => import("src/components/wiwaClub/WiwaClub"), { ssr: false });

export default function Page() {
  return <WiwaClub />;
}

