import dynamic from "next/dynamic";

const Abhivyakti2026 = dynamic(() => import("src/components/abhivyakti/Abhivyakti2026"), { ssr: false });

export default function Page() {
  return <Abhivyakti2026 />;
}

