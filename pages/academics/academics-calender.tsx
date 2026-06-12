import dynamic from "next/dynamic";

const AcademicsCalender = dynamic(() => import("src/components/academicsCalender/AcademicsCalender"), { ssr: false });

export default function Page() {
  return <AcademicsCalender />;
}

