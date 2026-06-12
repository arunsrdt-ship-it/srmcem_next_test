import { DepartmentComputerScienceOverviewData } from "../../../data/customOverViewData";
import { CustomTopFooterData3 } from "../../../data/customTopFooterData";
import { DepartmentOfComputerScienceTabData } from "../../../data/departmentTabData";
import { feeStructureData } from "../../../data/FeeStructureData";
import { whySRMCEMCards, whySRMCEMHeading } from "../../../data/whySrmcem";
// import CustomOverviewSection from "../../../utils/custom/CustomOverviewSection";
import CustomOverviewSectionForCSE from "../../../utils/custom/CustomOverviewSectionForCSE";
import CustomTab from "../../../utils/custom/CustomTab";
import CustomTopFooter from "../../../utils/custom/CustomTopFooter";
import CustomWhySRMCEM from "../../../utils/custom/CustomWhySRMCEM";
import PdfDownloadCard from "../../../utils/custom/PdfDownloadCard";
import Classes from "../../../utils/styles/Global.module.css";
import Recruiters from "../../trainingAndPlacement/Recruiters";

const DepartmentComputerScience = () => {
    return (
        <div>
            <div className={`${Classes.container}`}>
                <CustomOverviewSectionForCSE data={DepartmentComputerScienceOverviewData} />
            </div>
            <div className={`${Classes.container} py-7 md:py-10 lg:py-14`}>
                <CustomTab isMode="department-electronics-engineering" customTabData={DepartmentOfComputerScienceTabData} />
            </div>

            <div className={`${Classes["container"]} py-4 md:py-6 lg:py-8`}>
                <PdfDownloadCard style={true} data={feeStructureData} />
            </div>
            <CustomWhySRMCEM heading={whySRMCEMHeading} cards={whySRMCEMCards} />
            <Recruiters />
            <CustomTopFooter data={CustomTopFooterData3} />
        </div>
    );
};

export default DepartmentComputerScience
