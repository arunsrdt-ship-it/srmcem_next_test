import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React from "react";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import Link from "next/link";
import { store } from "../src/store";
import { RouterRuntimeProvider, type RuntimeRouteMatch } from "../src/utils/next-router-compat";
import Classes from "../src/utils/styles/Global.module.css";
import "../src/index.css";
import "../src/App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Head from "next/head";


const Header = dynamic(() => import("../src/components/header/Header"), { ssr: false });
const Footer = dynamic(() => import("../src/components/footer/Footer"), { ssr: false });
const CopyrightFooter = dynamic(() => import("../src/components/footer/CopyrightFooter"), {
  ssr: false,
});

const normalizePath = (path: string) => {
  if (!path || path === "/") return "/";
  return `/${path}`.replace(/\/+/g, "/").replace(/\/$/, "");
};

const routeTitles: Record<string, string> = {
  "/": "Home",
  "/about": "About Us",
  "/about/message": "Message",
  "/about/administration": "Administration",
  "/about/administration/all": "Administration",
  "/about/iqac": "IQAC",
  "/about/membership": "Membership",
  "/about/achievements": "Achievements",
  "/about/visitors": "Visitor's Testimonial",
  "/academics": "Academics",
  "/academics/academics-calender": "Academic Calendar and Activity Planner",
  "/admissions/course-offered": "Admissions",
  "/admissions/how-to-apply": "How to Apply",
  "/contact-us": "Contact Us",
  "/department/applied-science": "Applied Sciences & Humanities",
  "/department/applied-science/chemistry": "Department of Chemistry",
  "/department/applied-science/miscellaneous": "Miscellaneous",
  "/department/applied-science/humanities": "Applied Sciences & Humanities",
  "/department/applied-science/mathmetics": "Mathematics",
  "/department/applied-science/physics": "Physics",
  "/department/cse-ai-ml": "Computer Science & Engineering - AI & ML",
  "/department/data-science": "Computer Science & Engineering - Data Science",
  "/department/iot": "Computer Science & Engineering - IOT",
  "/department/cyber-cecurity": "Computer Science & Engineering - Cyber Security",
  "/department/civil-engineering": "Department of Civil Engineering",
  "/department/computer-science": "Computer Science & Engineering",
  "/department/computer-application": "Master Of Computer Application",
  "/department/it": "Department of Information Technology",
  "/department/management": "Master Of Business Administration",
  "/department/mechanical-engineering": "Department of Mechanical Engineering",
  "/department/electrical-engineering": "Department of Electrical Engineering",
  "/department/electronics&communication-engineering": "Department of Electronics & Communication Engineering",
  "/department/pharmacy": "Department of Pharmacy",
  "/placements/training-placement": "Placement",
  "/campus-life/student-corner": "Student Corner",
  "/campus-life/outreach": "Outreach",
  "/campus-life/clubs": "Clubs",
  "/campus-life/entrepreneurship": "Innovation & Entrepreneurship Cell",
  "/campus-life/events": "Events",
  "/campus-life/campus-tour": "Campus Tour",
  "/facilities/academics": "Academic Facilities",
  "/facilities/academics/all": "Wooded Campus",
  "/facilities/other": "Other Facilities",
  "/wiwa-club": "WIWA Club",
  "/abhivyakti": "Abhivyakti",
  "/abhivyakti2026": "Abhivyakti 2026",
  "/gantavya": "Gantavya",
  "/spardha": "Spardha",
  "/library": "Central Library",
  "/library/central-library": "Central Library",
  "/career": "Career Page",
  "/uptac-2025": "UPTAC-2025",
  "/notice": "Notice Page",
  "/acount-cell": "Accounts Cell",
  "/imp-policies": "Important Policies",
  "/newsletters": "Newsletters",
  "/list-holidays": "List Of Holidays",
  "/download": "Download",
  "/enquiry-form": "Enquiry Form",
  "/privacy-policy": "Privacy Policy",
  "/disclaimer": "Disclaimer",
  "/T&C": "Terms and Condition",
};

const findRouteChain = (pathname: string) => {
  const normalizedPathname = normalizePath(pathname);
  const segments = normalizedPathname === "/" ? [] : normalizedPathname.slice(1).split("/");
  const matches: RuntimeRouteMatch[] = [
    { id: "/", pathname: "/", params: {}, data: undefined, handle: undefined },
  ];

  segments.reduce((base, segment) => {
    const nextPath = normalizePath(`${base}/${segment}`);
    if (routeTitles[nextPath]) {
      matches.push({ id: nextPath, pathname: nextPath, params: {}, data: undefined, handle: undefined });
    }
    return nextPath;
  }, "");

  return matches;
};

function Breadcrumbs({ pathname }: { pathname: string }) {
  const matches = findRouteChain(pathname);
  const currentTitle = routeTitles[pathname] ?? routeTitles[matches[matches.length - 1]?.pathname ?? "/"] ?? "Page";

  return (
    <section className={`banner-section ${pathname === "/abhivyakti" ? "abhivyakt" : ""} flex items-center`}>
      <div className={`${Classes["container"]}`}>
        <div className={`${Classes["page-title-content"]}`}>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb m-0 flex flex-wrap gap-[0.5rem]">
              <li className={`${Classes["breadcrumb-item"]} max-sm:text-[12px]`}>
                <Link href="/">Home</Link>
              </li>
              <li className={`${Classes["breadcrumb-item"]} max-sm:text-[12px]`}>
                <span className={Classes["active_breadcrumbs"]}>{currentTitle}</span>
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </section>
  );
}

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const pathname = normalizePath(router.asPath.split(/[?#]/)[0] || "/");
  const matches = findRouteChain(pathname);

  return (
    <Provider store={store}>
      <Head>
        <title>Shri Ramswaroop Memorial College of Engineering & Management | SRMCEM</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <RouterRuntimeProvider matches={matches} outlet={null}>
        <Header />
        <main className="mt-[51px]">
          {pathname !== "/" && <Breadcrumbs pathname={pathname} />}
          <Component {...pageProps} />
        </main>
        <Footer />
        <CopyrightFooter />
        <Toaster />
      </RouterRuntimeProvider>
    </Provider>
  );
}
