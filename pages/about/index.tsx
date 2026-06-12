import dynamic from "next/dynamic";

const About = dynamic(() => import("src/components/about/About"), { ssr: false });

export default function Page() {
  return <About />;
}

