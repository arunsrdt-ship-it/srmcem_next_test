import dynamic from "next/dynamic";

const Abhivyakti = dynamic(() => import("src/components/abhivyakti/Abhivyakti"), { ssr: false });

export default function Page() {
  return <Abhivyakti />;
}

