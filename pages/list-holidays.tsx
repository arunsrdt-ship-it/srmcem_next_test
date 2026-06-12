import dynamic from "next/dynamic";

const ListOfHolidays = dynamic(() => import("src/components/holidays/ListOfHolidays"), { ssr: false });

export default function Page() {
  return <ListOfHolidays />;
}

