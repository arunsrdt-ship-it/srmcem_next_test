import dynamic from "next/dynamic";

const Entrepreneurship = dynamic(() => import("src/components/entrepreneurship/Entrepreneurship"), { ssr: false });

export default function Page() {
  return <Entrepreneurship />;
}

