import dynamic from "next/dynamic";

const AdmissionDashboard = dynamic(() => import("src/components/admission-deashboard/AdmissionDashboard"), { ssr: false });

export default function Page() {
  return <AdmissionDashboard />;
}

