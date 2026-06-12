import RectangleBG from "../assets/images/rectangle/RectangleBG.png";
import PdfImg from "../assets/images/campusTour/Pdf-img.png";
import { annualFestDataTypes } from "../types/event-data-types";
import { customTabDataTypes } from "../types/customDataTypes";
import evn1 from "../assets/pdf/academicCalendars/EvenSem/Academic_Calendar 2023-24 (Even Sem).pdf";
import evn2 from "../assets/pdf/academicCalendars/EvenSem/Academic_Calendar 2023-24 (Even Sem)_MCA  & B.Tech.pdf";
import evn3 from "../assets/pdf/academicCalendars/EvenSem/Academic_Calendar 2023-24 (Even Sem)_MCA.pdf";
import evn4 from "../assets/pdf/academicCalendars/EvenSem/Academic Calendar_2501_MBA 2 Year_03 September 2025.pdf";
import evn5 from "../assets/pdf/academicCalendars/EvenSem/Academic Calendar_2501_MBA I Year_25 August 2025.pdf";
import evn6 from "../assets/pdf/academicCalendars/EvenSem/Academic Calendar_2501_B. Tech. I Year_25 August 2025.pdf";
import evn7 from "../assets/pdf/academicCalendars/EvenSem/Academic Calendar_2501_B.Tech II Year_25 August 2025.pdf";
import evn8 from "../assets/pdf/academicCalendars/EvenSem/Academic Calendar_2501_MCA I Year_25 August 2025.pdf";
import evn9 from "../assets/pdf/academicCalendars/EvenSem/Academic Calendar_2501_MCA II Year_25 August 2025.pdf";
import evn10 from "../assets/pdf/academicCalendars/EvenSem/Academic Calendar_2501_B.Tech 3 Year_21 August 2025.pdf";
import evn11 from "../assets/pdf/academicCalendars/EvenSem/Academic Calendar_2501_B.Tech 4th Year_20 August 2025.pdf";
import evn12 from "../assets/pdf/academicCalendars/EvenSem/Academic Calendar_B. Tech., MBA & MCA_2502.pdf";
import archive1 from "../assets/pdf/academicCalendars/archive/Academic Calendar_2023-24_Odd Sem_B.Tech 2nd Year_1.pdf";
import archive2 from "../assets/pdf/academicCalendars/archive/Academic Calendar_2023-24_Odd Sem_B.Tech 3rd Year_Revised on 18 September 2023_2.pdf";
import archive3 from "../assets/pdf/academicCalendars/archive/Academic Calendar_2023-24_Odd Sem_B.Tech 4th Year_3.pdf";
import archive4 from "../assets/pdf/academicCalendars/archive/Academic Calendar 2022-23 (Even Sem)_B.Tech I Year_25 March 2023_4.pdf";
import archive5 from "../assets/pdf/academicCalendars/archive/Academic Calendar 2022-23 (Even Sem)_MBA I Year_25 March 2023_5.pdf";
import archive6 from "../assets/pdf/academicCalendars/archive/Academic Calendar 2022-23 (Even Sem)_MCA-I & B.Tech-II Year_25 March 2023_6.pdf";
import archive7 from "../assets/pdf/academicCalendars/archive/Academic Calendar, Activity Planner_BBA_BCA_B.Com.(H) Even Sem - 2023_7.pdf";
import archive8 from "../assets/pdf/academicCalendars/archive/Academic_Calendar 2022-23 (Even Sem)_B.Tech 3rd & 4th Year_as on 17 Feb 23_8.pdf";
import archive9 from "../assets/pdf/academicCalendars/archive/Academic_Calendar 2022-23 (Even Sem)_MBA 2nd year_ as  on 11 March 2023_9.pdf";
import archive10 from "../assets/pdf/academicCalendars/archive/Academic_Calendar 2022-23 (Even Sem)_MCA 2nd year_ as on  11 March 2023_10.pdf";
import archive11 from "../assets/pdf/academicCalendars/archive/Academic Calendar_2022-23_Odd_B. Tech. 1st Year_11.pdf";
import archive12 from "../assets/pdf/academicCalendars/archive/Academic_ Calendar 2022-23 - MBA I Year_12.pdf";
import archive13 from "../assets/pdf/academicCalendars/archive/Academic_ Calendar 2022-23 - MCA I Year_13.pdf";
import archive14 from "../assets/pdf/academicCalendars/archive/Academic_Calendar 2022-23 (B. Tech. 2nd Year)_14.pdf";
import archive15 from "../assets/pdf/academicCalendars/archive/Academic_Calendar 2022-23 (MCA 2nd B. Tech. 3rd & 4th Year)_15.pdf";
import archive16 from "../assets/pdf/academicCalendars/archive/Academic_Calendar 2022-23 MBA 2 Year_10 nov 2022_16.pdf";
import archive17 from "../assets/pdf/academicCalendars/archive/Academic Calendar 2021-22 Even Semester_17.pdf";
import archive18 from "../assets/pdf/academicCalendars/archive/Academic_Calendar 2021-22 (Odd Semester)_18.pdf";
import archive19 from "../assets/pdf/academicCalendars/archive/Academic Calender MBA_19.pdf";
import archive20 from "../assets/pdf/academicCalendars/archive/Academic Calender B. Tech & MCA_20.pdf";
import archive21 from "../assets/pdf/academicCalendars/archive/Academic Calender B. Tech_MCA_I Year_21.pdf";
import archive22 from "../assets/pdf/academicCalendars/archive/Academic Calender MBA_22.pdf";
import archive23 from "../assets/pdf/academicCalendars/archive/Academic Calendar_FIRST YEAR (ALL COURSES EXCEPT MBA)_23.pdf";
import archive24 from "../assets/pdf/academicCalendars/archive/Academic Calendar_MBA_1st Year_July-Dec 20_24.pdf";
import archive25 from "../assets/pdf/academicCalendars/archive/AcademicCalendarJuly_Dec20_25.pdf";
import archive26 from "../assets/pdf/academicCalendars/archive/AcademicCalendarJulyDec20MBA_26.pdf";
import archive27 from "../assets/pdf/academicCalendars/archive/AcademicCalendars2019_20_27.pdf";
import archive28 from "../assets/pdf/academicCalendars/archive/AcademicCalendars2018_19_28.pdf";
import archive29 from "../assets/pdf/academicCalendars/archive/AcademicCalendars2017_18_29.pdf";
import archive30 from "../assets/pdf/academicCalendars/archive/AcademicCalendars2016_17_30.pdf";
import archive31 from "../assets/pdf/academicCalendars/archive/AcademicCalendars2015_16_31.pdf";
import StudentCouncilMeetings1 from "../assets/pdf/academicCalendars/StudentCouncilMeetings/01_MoM_19 July 2024_Minutes of Academic Council Meeting 2023-24_1.pdf";
import StudentCouncilMeetings2 from "../assets/pdf/academicCalendars/StudentCouncilMeetings/MoM_Academic Council Meeting_2023-24_Odd_2.pdf";
import StudentCouncilMeetings3 from "../assets/pdf/academicCalendars/StudentCouncilMeetings/MoM_Academic_Council Meeting_2022-23_3.pdf";
import StudentCouncilMeetings4 from "../assets/pdf/academicCalendars/StudentCouncilMeetings/MoM_Academic Council_Attendance_2021-22_Odd_4.pdf";
import StudentCouncilMeetings5 from "../assets/pdf/academicCalendars/StudentCouncilMeetings/MoM_Academic Council Meeting_2020-21_Even_5.pdf";
import StudentCouncilMeetings6 from "../assets/pdf/academicCalendars/StudentCouncilMeetings/MoM_Academic Council Meeting_2020-21_Odd_6.pdf";
import StudentCouncilMeetings7 from "../assets/pdf/academicCalendars/StudentCouncilMeetings/MoM_Academic Council_2019-20_Odd Sem_7.pdf";
import StudentCouncilMeetings8 from "../assets/pdf/academicCalendars/StudentCouncilMeetings/MoM_Academic Council_2019-20_Even Sem_8.pdf";
import StudentCouncilMeetings9 from "../assets/pdf/academicCalendars/StudentCouncilMeetings/MoM_Academic Council Meeting_2022-23_9.pdf";
import StudentCouncilMeetings10 from "../assets/pdf/academicCalendars/StudentCouncilMeetings/MoM_Academic Council Meeting_2023-24_Odd_10.pdf";
import geek_for_geeks from "../assets/pdf/academicsCalender/Gouri Lavania _OfferLetter.pdf";
import benifit from "../assets/pdf/academicsCalender/NPTEL records at glance2023.pdf";

import activityPlan2502 from "../assets/pdf/academicCalendars/activityPlanner/Activity Planner_B.Tech., MBA & MCA_2502 (1).pdf";//
import activityPlan2501_1 from "../assets/pdf/academicCalendars/activityPlanner/Activity Planner_2501_B. Tech. 4th Year_28 July 2025 (1).pdf";//
import activityPlan2501_2 from "../assets/pdf/academicCalendars/activityPlanner/Activity Planner_2501_B. Tech. I Year_25 August 2025.pdf";//
import activityPlan2501_3 from "../assets/pdf/academicCalendars/activityPlanner/Activity Planner_2501_B.Tech 3 Year_21 August 2025.pdf"; //
import activityPlan2501_4 from "../assets/pdf/academicCalendars/activityPlanner/Activity Planner_2501_B.Tech 3 Year_31 July 2025.pdf";//
import activityPlan2501_5 from "../assets/pdf/academicCalendars/activityPlanner/Activity Planner_2501_B.Tech II Year_25 August 2025.pdf";//
import activityPlan2501_6 from "../assets/pdf/academicCalendars/activityPlanner/Activity Planner_2501_B.Tech. 4th Year_20 August 2025.pdf";//
import activityPlan2501_7 from "../assets/pdf/academicCalendars/activityPlanner/Activity Planner_2501_MBA 2 Year_03 September 2025.pdf";//
import activityPlan2501_8 from "../assets/pdf/academicCalendars/activityPlanner/Activity Planner_2501_MCA I Year_25 August 2025.pdf";//
import activityPlan2501_9 from "../assets/pdf/academicCalendars/activityPlanner/Activity Planner_2501_MCA II Year_25 August 2025.pdf";

const excelFileUrlIEEE =
  "https://srdtpvtltd-my.sharepoint.com/personal/mili_srivastava_srdt_co_in/Documents/Saurabh/srmcm-ui/src/assets/pdf/academicsCalender/IEEE%20Event%20Conduction.xlsx?web=1";



export const ActivityPlannaer = [
  {
    id: 1,
    title: "Activity Planner",
    downloadText: "Downloads",
    childData: [
      {
        id: 0,
        heading: "Activity Planner B.Tech., MBA & MCA (Even Sem)",
        buttonLink: activityPlan2502,
      }, {
        id: 1,
        heading: "Activity Planner B.Tech. 4th Year 28 July 2025",
        buttonLink: activityPlan2501_1,
      }, {
        id: 2,
        heading: "Activity Planner B.Tech. I Year 25 August 2025",
        buttonLink: activityPlan2501_2,
      }, {
        id: 3,
        heading: "Activity Planner B.Tech 3 Year 21 August 2025",
        buttonLink: activityPlan2501_3,
      }, {
        id: 4,
        heading: "Activity Planner B.Tech 3 Year 31 July 2025",
        buttonLink: activityPlan2501_4,
      }, {
        id: 5,
        heading: "Activity Planner B.Tech II Year 25 August 2025",
        buttonLink: activityPlan2501_5,
      }, {
        id: 6,
        heading: "Activity Planner B.Tech. 4th Year 20 August 2025",
        buttonLink: activityPlan2501_6,
      }, {
        id: 7,
        heading: "Activity Planner MBA 2 Year 03 September 2025",
        buttonLink: activityPlan2501_7,
      }, {
        id: 8,
        heading: "Activity Planner MCA I Year 25 August 2025",
        buttonLink: activityPlan2501_8,
      }, {
        id: 9,
        heading: "Activity Planner MCA II Year 25 August 2025",
        buttonLink: activityPlan2501_9,
      },

    ],
  },
];


export const academicCalendarsForEvenSemesterData1 = [
  {
    id: 1,
    title: "Academic Calendars",
    downloadText: "Downloads",
    childData: [
      {
        id: 9,
        heading: "Academic Calendar B.Tech,MBA & MCA Session 2025-26 (Even Sem) ",
        buttonLink: evn12,
      },
      {
        id: 8,
        heading: "Academic Calendar MCA (1st Year)-Session 2025-26 (Odd Sem)",
        buttonLink: evn8,
      },
      {
        id: 7,
        heading: "Academic Calendar MCA (2nd Year)-Session 2025-26 (Odd Sem)",
        buttonLink: evn9,
      },
      {
        id: 6,
        heading: "Academic Calendar B.Tech (1st Year)-Session 2025-26 (Odd Sem)",
        buttonLink: evn6,
      },
      {
        id: 5,
        heading: "Academic Calendar B.Tech (2nd Year)-Session 2025-26 (Odd Sem)",
        buttonLink: evn7,
      },
      {
        id: 9,
        heading: "Academic Calendar B.Tech (3rd Year)-Session 2025-26 (Odd Sem)",
        buttonLink: evn10,
      },
      {
        id: 10,
        heading: "Academic Calendar B.Tech (4th Year)-Session 2025-26 (Odd Sem)",
        buttonLink: evn11,
      },
      {
        id: 4,
        heading: "Academic Calendar MBA (1st Year)-Session 2025-26 (Odd Sem)",
        buttonLink: evn5,
      },
      {
        id: 3,
        heading: "Academic Calendar MBA (2 Year)-Session 2025-26 (Odd Sem)",
        buttonLink: evn4,
      },
    ],
  },
];

export const academicCalendarsForEvenSemesterData2 = [
  {
    id: 1,
    title: "Academic Calendars for Even & Odd Semester",
    downloadText: "Downloads",
    childData: [
      {
        id: 31,
        heading: "Academic Calendar MBA (1st & 2nd Year)-Session 2023-24 (Even Sem)",
        buttonLink: evn1,
      },
      {
        id: 32,
        heading: "Academic Calendar MCA(1st Year) & Btech (1st & 2nd Year)-Session 2023-24 (Even Sem)",
        buttonLink: evn2,
      },
      {
        id: 33,
        heading: "Academic Calendar MCA (2nd Year)-Session 2023-24 (Even Sem)",
        buttonLink: evn3,
      },
      {
        id: 0,
        heading: "Academic Calendar B.Tech(2nd Year)-Session 2023-24 (Odd Semester)",
        buttonLink: archive1,
      },
      {
        id: 1,
        heading: "Academic Calendar B.Tech(3rd Year)-Session 2023-24 (Odd Semester)",
        buttonLink: archive2,
      },
      {
        id: 2,
        heading: "Academic Calendar B.Tech(4th Year)-Session 2023-24 (Odd Semester)",
        buttonLink: archive3,
      },
      {
        id: 3,
        heading: "Academic Calendar B.Tech(1st Year)-Session 2022-23 (Even Semester)",
        buttonLink: archive4,
      },
      {
        id: 4,
        heading: "Academic Calendar MBA(1st Year)-Session 2022-23 (Even Semester)",
        buttonLink: archive5,
      },
      {
        id: 5,
        heading: "Academic Calendar MCA (1st Year) and B.Tech. (2nd Year)-Session 2022-23(Even Semester)",
        buttonLink: archive6,
      },
      {
        id: 6,
        heading: "Academic Calendar BBA,BCA & B.COM. (H) (All Year)-Session 2022-23(Even Semester)",
        buttonLink: archive7,
      },
      {
        id: 7,
        heading: "Academic Calendar B.Tech.(3rd & 4th Year)-Session 2022-23(Even Semester)",
        buttonLink: archive8,
      },
      {
        id: 8,
        heading: "Academic Calendar MBA(2nd Year)-Session 2022-23(Even Semester)",
        buttonLink: archive9,
      },
      {
        id: 9,
        heading: "Academic Calendar MCA(2nd Year)-Session 2022-23(Even Semester)",
        buttonLink: archive10,
      },
      {
        id: 10,
        heading: "Academic Calendar B.Tech(1st Year)-Session 2022-23 (Odd Semester)",
        buttonLink: archive11,
      },
      {
        id: 11,
        heading: "Academic Calendar MBA(1st Year)-Session 2022-23",
        buttonLink: archive12,
      },
      {
        id: 12,
        heading: "Academic Calendar MCA(1st Year)-Session 2022-23",
        buttonLink: archive13,
      },
      {
        id: 13,
        heading: "Academic Calendar B.Tech(2nd Year)-Session 2022-23",
        buttonLink: archive14,
      },
      {
        id: 14,
        heading: "Academic Calendar MCA (2nd Year) and B.Tech. (3rd & 4th Year)-Session 2022-23",
        buttonLink: archive15,
      },
      {
        id: 15,
        heading: "Academic Calendar MBA(2nd Year) 10 nov 2022.",
        buttonLink: archive16,
      },
      {
        id: 16,
        heading: "Academic Calendar MCA (2nd Year) and B.Tech. (3rd & 4th Year) - Session 2021-22 (Even Semester)",
        buttonLink: archive17,
      },
      {
        id: 17,
        heading: "Academic Calendar: B.Tech. & MCA (Except I Year) - Session 2021-22 (Odd Semester)",
        buttonLink: archive18,
      },
      {
        id: 18,
        heading: "Academic Calendar: MBA-I & II Year - Session 2020-21 (Even Sem.)",
        buttonLink: archive19,
      },
      {
        id: 19,
        heading: "Academic Calendar: B. Tech. I, II, III Year & MCA I, II Year and (BBA & BCA) I Year - Session 2020-21 (Even Sem.)",
        buttonLink: archive20,
      },
      {
        id: 20,
        heading: "Academic Calendar: B.Tech & MCA - Session 2020-21 (Even Sem.)",
        buttonLink: archive21,
      },
      {
        id: 21,
        heading: "Academic Calendar: MBA - Session 2020-21 (Even Sem.)",
        buttonLink: archive22,
      },
      {
        id: 22,
        heading: "Academic Calendar 1st Year (ALL COURSES EXCEPT MBA - Session 2020-21 (Odd Semester))",
        buttonLink: archive23,
      },
      {
        id: 23,
        heading: "Academic Calendar MBA 1st Year July-Dec Session 2020-21 (Odd Semester)",
        buttonLink: archive24,
      },
      {
        id: 24,
        heading: "Academic Calendar 2020-21 (Odd Sem July-Dec)",
        buttonLink: archive25,
      },
      {
        id: 25,
        heading: "Academic Calendar MBA 2020-21 (Odd Sem July-Dec)",
        buttonLink: archive26,
      },
      {
        id: 26,
        heading: "Academic Calendar 2019-20 (Even & Odd Sem)",
        buttonLink: archive27,
      },
      {
        id: 27,
        heading: "Academic Calendar 2018-19 (Even & Odd Sem)",
        buttonLink: archive28,
      },
      {
        id: 28,
        heading: "Academic Calendar 2017-18 (Even & Odd Sem)",
        buttonLink: archive29,
      },
      {
        id: 29,
        heading: "Academic Calendar 2016-17 (Even & Odd Sem)",
        buttonLink: archive30,
      },
      {
        id: 30,
        heading: "Academic Calendar 2015-16 (Even & Odd Sem)",
        buttonLink: archive31,
      },
    ],
  },
];

export const academicCalendarsForEvenSemesterData3 = [
  {
    id: 1,
    title: "Student Council Representatives",
    downloadText: "Downloads",
    childData: [
      {
        id: 0,
        heading: "MoM Academic Council Meeting 2023-24 Even",
        buttonLink: StudentCouncilMeetings1,
      },
      {
        id: 1,
        heading: "MoM Academic Council Meeting 2023-24 Odd",
        buttonLink: StudentCouncilMeetings2,
      },
      {
        id: 2,
        heading: "MoM Academic Council Meeting 2022-23",
        buttonLink: StudentCouncilMeetings3,
      },
      {
        id: 3,
        heading: "MoM Academic Council Meeting 2021-22 Odd",
        buttonLink: StudentCouncilMeetings4,
      },
      {
        id: 4,
        heading: "MoM Academic Council Meeting 2020-21 Even",
        buttonLink: StudentCouncilMeetings5,
      },
      {
        id: 5,
        heading: "MoM Academic Council Meeting 2020-21 Odd",
        buttonLink: StudentCouncilMeetings6,
      },
      {
        id: 6,
        heading: "MoM Academic Council Meeting 2019-20 Odd",
        buttonLink: StudentCouncilMeetings7,
      },
      {
        id: 7,
        heading: "MoM Academic Council Meeting 2019-20 Even",
        buttonLink: StudentCouncilMeetings8,
      },
      {
        id: 8,
        heading: "MoM Academic Council Meeting 2022-23 Odd",
        buttonLink: StudentCouncilMeetings9,
      },
      {
        id: 9,
        heading: "MoM Academic Council Meeting 2023-24 Odd",
        buttonLink: StudentCouncilMeetings10,
      },
    ],
  },
];

export const academicCalendarsForEvenSemesterCards = [
  {
    icon: PdfImg,
    title: "IEEE",
    pdf: excelFileUrlIEEE,
    backgroundImage: RectangleBG,
  },
  {
    icon: PdfImg,
    title: "Geek for Geeks",
    pdf: geek_for_geeks,
    backgroundImage: RectangleBG,
  },
];

export const eResourcesData: annualFestDataTypes = {
  title: "E-Resources",
  content:
    "SRMCEM’s E-resources is a dynamic platform dedicated to creating and delivering high-quality electronic educational content, fostering innovative learning experiences for students through access to digital resources and educational materials anytime, anywhere.",
};

export const academicCalendarsForEvenSemesterCustomTabData: customTabDataTypes[] = [
  {
    id: 0,
    isAnualFast: true,
    tabData: [
      {
        id: 0,
        tab: "SWAYAM",
        contentObject: {
          id: 0,
          title: "Swayam",
          btnText: "Login",
          path: "https://swayam.gov.in/",
          boldItem: {
            id: 0,
            icon: PdfImg,
            boldText: [
              {
                id: 0,
                boldContent: "Several students are benefited by the local chapter.",
                path: benifit,
              },
              {
                id: 1,
                boldContent: "Click here to check the list of participants who are benefited ->",
                path: benifit,
              },
            ],
          },
          paraContent: [
            {
              id: 0,
              content:
                "SWAYAM –NPTEL Local chapter is opened in SRMCEM on 23rd May, 2018. Since then direct link is established between college and SWAYAM. Er. A. K. Rathore, Assistant Professor, Department of Mechanical Engineering is appointed as SPOC (Single point of contact) to look after the affairs/ problems related to enrollment, registration and certification for the SWAYAM courses. SWAYAM comprises of nine national coordinators like AICTE, NIOS, NITTTR, IIMB, NPTEL, IGNOU, CEC, NCERT and UGC and offers 500 plus courses. The local chapter opens the window for all Faculty, staff and students to all these courses.",
            },
            {
              id: 1,
              content:
                "The local chapter looks after the promotion and awareness activities of SWAYAM-NPTEL courses by advertising it on college boards, WhatsApp group, websites etc. Its role is to provide access to SWAYAM courses to all. It helps students to resolve their problems locally by imparting information related to enrollment for courses, registration for exam and the certification for the courses. It also helps students about their fee related problems experienced during registration for exam. It also helps students by doing mentor addition to the course. With all the above related activities, it caters to build a bridge between digital divide of the user and SWAYAM",
            },
          ],
        },
      },
      {
        id: 1,
        tab: "NPTEL",
        contentObject: {
          id: 0,
          title: "NPTEL",
          path: "https://nptel.ac.in/",
          btnText: "Visit Website",
          boldItem: {
            id: 0,
            boldText: [
              {
                id: 0,
                boldContent: "Click here to visit the website: NPTEL",
                path: "https://nptel.ac.in/",
              },
            ],
          },
          paraContent: [
            {
              id: 0,
              content:
                "NPTEL (National Programme on Technology Enhanced Learning), is a joint venture of the IITs and IISc, funded by the Ministry of Education (MoE) Government of India, and was launched in 2003. Initially started as a project to take quality education to all corners of the country, NPTEL now offers close to 600+ courses for certification every semester in about 22 disciplines.",
            },
          ],
        },
      },
      {
        id: 2,
        tab: "IEEE",
        contentObject: {
          id: 0,
          title: "IEEE",
          path: "https://www.ieee.org/",
          btnText: "Visit Website",
          paraContent: [
            {
              id: 0,
              content:
                "IEEE is the world’s largest technical professional organization dedicated to advancing technology for the benefit of humanity. IEEE and its members inspire a global community through its highly cited publications, conferences, technology standards, and professional and educational activities.",
            },
          ],
          listItem: [
            {
              id: 0,
              list: "Trust: being a trusted and unbiased source of technical information, and forums, for technical dialog and collaboration.",
            },
            {
              id: 1,
              list: "Growth and nurturing: encouraging education as a fundamental activity of engineers, scientists, and technologists at all levels and at all times; ensuring a pipeline of students to preserve the profession.",
            },
            {
              id: 2,
              list: "Global community building: cultivating active, vibrant, and honest exchange among cross-disciplinary and interdisciplinary global communities of technical professionals.",
            },
            {
              id: 3,
              list: "Partnership: promoting a culture of respect for the employee and volunteer, valuing contributions at all levels of the organization, investing in training and development to enhance capabilities, empowering individuals to make a positive difference, and building a membership organization based on a strong volunteer-staff partnership to serve the profession.",
            },
            {
              id: 4,
              list: "Service to humanity: leveraging science, technology, and engineering to benefit human welfare; promoting public awareness and understanding of the engineering profession. Integrity in action: fostering a professional climate in which engineers and scientists continue to be respected for their exemplary ethical behavior and volunteerism.",
            },
          ],
        },
      },
    ],
  },
];
