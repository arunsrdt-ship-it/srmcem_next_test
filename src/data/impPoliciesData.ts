import pdf1 from "../assets/pdf/impPolicies/2021_Academic Audit Policy-v2.pdf";
import pdf2 from "../assets/pdf/impPolicies/LEAVE POLICY.pdf";
import pdf3 from "../assets/pdf/impPolicies/LEAVE POLICY FOR CAMPUS LIVING_ EMPLOYEES.pdf";
import pdf4 from "../assets/pdf/impPolicies/04_Policy_09 February 2023_Early Joining of Final Year Placed Students.pdf";
import pdf5 from "../assets/pdf/impPolicies/PERFORMANCE APPRAISAL POLICY.pdf";
import pdf6 from "../assets/pdf/impPolicies/2021_Value Education Cell.pdf";
import pdf7 from "../assets/pdf/impPolicies/policyAcademicExcellenceAwards.pdf";
import pdf8 from "../assets/pdf/impPolicies/04_Policy_2016-17_Constitution Responsibilities_ Academic Council.pdf";
import pdf9 from "../assets/pdf/impPolicies/Placement Policy of SRMGPC.pdf";
import pdf10 from "../assets/pdf/impPolicies/PolicyInstitutionalSupportforResearchandHigherEducation.pdf";
import pdf11 from "../assets/pdf/impPolicies/POLICY-REDRESSAL OF GRIEVANCE OF STUDENTS.pdf";
import pdf12 from "../assets/pdf/impPolicies/PolicyGuidelinesGuestLecture.pdf";
import pdf13 from "../assets/pdf/impPolicies/StudentsSenateCompositionPolicy.pdf";
import pdf14 from "../assets/pdf/impPolicies/PolicyTADA.pdf";
import pdf15 from "../assets/pdf/impPolicies/Mentorship Policy.pdf";
import pdf16 from "../assets/pdf/impPolicies/CODE OF PROFESSIONAL ETHICS AND CODE OF CONDUCT.pdf";
import pdf17 from "../assets/pdf/impPolicies/POLICY ON ADMINISTRATIVE AUDIT.pdf";
import pdf18 from "../assets/pdf/impPolicies/RECRUITMENT PROMOTION POLICY.pdf";
import pdf19 from "../assets/pdf/impPolicies/PurchasePolicy.pdf";
import pdf20 from "../assets/pdf/impPolicies/POLICY ON INTERNAL COMPLAINT-17 FEB. 2020 (1).pdf";
import pdf21 from "../assets/pdf/impPolicies/POLICYBENEVOLENTFUND.pdf";
import pdf22 from "../assets/pdf/impPolicies/ION SPORT.pdf";
import pdf23 from "../assets/pdf/impPolicies/policyArpan.pdf";
import pdf24 from "../assets/pdf/impPolicies/PolicyFeeConsiderationStopFailedstudentsReAdmission.pdf";
import pdf25 from "../assets/pdf/impPolicies/PolicyRefundHostelTransportationCharges.pdf";
import pdf26 from "../assets/pdf/impPolicies/SC ST committee.pdf";
import pdf27 from "../assets/pdf/impPolicies/Policy on Advanced_Fast and Slow Learners.pdf";
import pdf28 from "../assets/pdf/impPolicies/AKTU CHHATRA KALYAN NIDHI RULES policy.pdf";

export interface PolicyDataType {
  id: number;
  name: string;
  viewLink: string;
}

export const policiesData: PolicyDataType[] = [
  { id: 1, name: "Academic Audit Policy", viewLink: pdf1 },
  { id: 2, name: "Leave Policy", viewLink: pdf2 },
  { id: 3, name: "Leave Policy for Campus Living Employees", viewLink: pdf3 },
  { id: 4, name: "Early Joining Of Final Year Placed Students", viewLink: pdf4 },
  { id: 5, name: "Performance Appraisal Policy", viewLink: pdf5 },
  { id: 6, name: "Value Education Cell (VEC) Policy", viewLink: pdf6 },
  { id: 7, name: "Academic Excellence Awards Policy", viewLink: pdf7 },
  { id: 8, name: "Policy of Constitution & Responsibilities of Academic Council", viewLink: pdf8 },
  { id: 9, name: "Placement Policy", viewLink: pdf9 },
  { id: 10, name: "Institutional Support for Research and Higher Education Policy", viewLink: pdf10 },
  { id: 11, name: "Redressal of Grievance of Students Policy", viewLink: pdf11 },
  { id: 12, name: "Guest Lecture Guidelines Policy", viewLink: pdf12 },
  { id: 13, name: "Student Senate Composition Policy", viewLink: pdf13 },
  { id: 14, name: "Travelling Allowance (TA) & Daily Allowance (DA) Policy", viewLink: pdf14 },
  { id: 15, name: "Mentorship Policy", viewLink: pdf15 },
  { id: 16, name: "Code of Professional Ethics and Conduct", viewLink: pdf16 },
  { id: 17, name: "Administrative Audit Policy", viewLink: pdf17 },
  { id: 18, name: "Recruitment and Promotion Policy", viewLink: pdf18 },
  { id: 19, name: "Purchase Policy", viewLink: pdf19 },
  { id: 20, name: "Policy on Gender Sensitization, Prevention and Prohibition of Sexual Harassment and Redressal of Grievances", viewLink: pdf20 },
  { id: 21, name: "Benevolent Fund Policy", viewLink: pdf21 },
  { id: 22, name: "Sports Policy", viewLink: pdf22 },
  { id: 23, name: "Arpan Financial Assistance to Poor Students Policy", viewLink: pdf23 },
  { id: 24, name: "Fee Consideration for Stopped & Failed students at the time of Re-Admission Policy", viewLink: pdf24 },
  { id: 25, name: "Refund of Hostel & Transportation Charges Policy", viewLink: pdf25 },
  { id: 26, name: "SC/ST Policy", viewLink: pdf26 },
  { id: 27, name: "Policy on Advanced/ Fast and Slow Learners", viewLink: pdf27 },
  { id: 28, name: "Policy on AKTU CHHATRA KALYAN NIDHI Rules", viewLink: pdf28 },
];
