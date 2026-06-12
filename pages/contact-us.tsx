import dynamic from "next/dynamic";

const ContactUs = dynamic(() => import("src/components/contact/ContactUs"), { ssr: false });

export default function Page() {
  return <ContactUs />;
}

