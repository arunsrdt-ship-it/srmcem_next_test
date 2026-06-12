import dynamic from "next/dynamic";

const EnquiryFormPage = dynamic(() => import("src/components/admissions/EnquiryFormPage"), { ssr: false });

export default function Page() {
  return <EnquiryFormPage />;
}

