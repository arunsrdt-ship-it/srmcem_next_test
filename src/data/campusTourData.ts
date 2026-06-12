import RectangleBG from '../assets/images/rectangle/RectangleBG.png';
import PdfImg from '../assets/images/campusTour/Pdf-img.png';
import RectangleCarousel1 from '../assets/images/campusTour/RectangleCarousel1.png';
import RectangleCarousel2 from '../assets/images/campusTour/RectangleCarousel2.png';
import RectangleCarousel3 from '../assets/images/campusTour/RectangleCarousel3.png';
import Environment_Audit  from "../assets/pdf/campusTour/Environment Audit Report 6 Feb 22.pdf";
import energy_audit  from "../assets/pdf/campusTour/Energy Audit Report.pdf";
import Fire_Safety_NOC  from "../assets/pdf/campusTour/Fire.pdf";

export const campusTourCards = [
    {
        icon: PdfImg,
        title: "Energy Audit",
        pdf : energy_audit,
        backgroundImage: RectangleBG,
      },
      {
        icon: PdfImg,
        title: "Fire Safety NOC",
        pdf: Fire_Safety_NOC,
        backgroundImage: RectangleBG,
      },
      {
        icon: PdfImg,
        title: "Environment Audit",
        pdf: Environment_Audit,
        backgroundImage:RectangleBG,
      },
];

export const CampusTourCarouselImages = [
    { src: RectangleCarousel1, alt: "Image 1" },
    { src: RectangleCarousel2, alt: "Image 2" },
    { src: RectangleCarousel3, alt: "Image 3" },
  ];
