import dynamic from "next/dynamic";

const Notice = dynamic(() => import("src/components/notice/Notice"), { ssr: false });

export default function Page() {
  return <Notice />;
}

