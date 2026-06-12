import dynamic from "next/dynamic";

const Events = dynamic(() => import("src/components/events/Events"), { ssr: false });

export default function Page() {
  return <Events />;
}

