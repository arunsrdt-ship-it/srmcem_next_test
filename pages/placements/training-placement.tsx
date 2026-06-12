import dynamic from "next/dynamic";

const TrainingPlacements = dynamic(() => import("src/components/trainingAndPlacement/TrainingPlacements"), { ssr: false });

export default function Page() {
  return <TrainingPlacements />;
}

