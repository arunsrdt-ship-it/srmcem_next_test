import dynamic from "next/dynamic";

const Clubs = dynamic(() => import("src/components/clubs/Clubs"), { ssr: false });

export default function Page() {
  return <Clubs />;
}

