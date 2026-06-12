import dynamic from "next/dynamic";

const Message = dynamic(() => import("src/components/Message/Message"), { ssr: false });

export default function Page() {
  return <Message />;
}

