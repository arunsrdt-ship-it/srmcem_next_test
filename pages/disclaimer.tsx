import dynamic from "next/dynamic";

const Disclaimer = dynamic(() => import("src/components/footer/Disclaimer"), { ssr: false });

export default function Page() {
  return <Disclaimer />;
}

