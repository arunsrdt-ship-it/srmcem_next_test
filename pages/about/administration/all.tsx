import dynamic from "next/dynamic";

const AdministrationAll = dynamic(() => import("src/components/administration/AdministrationAll"), { ssr: false });

export default function Page() {
  return <AdministrationAll />;
}

