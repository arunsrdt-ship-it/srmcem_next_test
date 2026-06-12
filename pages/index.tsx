import dynamic from "next/dynamic";

const Home = dynamic(() => import("src/components/home/Home"), { ssr: false });

export default function Page() {
  return <Home />;
}

