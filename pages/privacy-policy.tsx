import dynamic from "next/dynamic";

const PrivacyPolicy = dynamic(() => import("src/components/footer/PrivacyPolicy"), { ssr: false });

export default function Page() {
  return <PrivacyPolicy />;
}

