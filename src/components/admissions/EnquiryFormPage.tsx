import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import EnquiryForm from "./EnquiryForm";
import { RootState, store } from "../../store";
import {
  resetResponseofEnquiry,
  submissionForEnquiry,
  takeActionForEnquiry,
} from "../../store/enquiry-form/Enquiry-submission-slice";

const EnquiryFormPage: React.FC = () => {
  const { isError, isLoading, responseOfenquiry, resetAction } = useSelector(
    (state: RootState) => state.createEnquiryForEnquiry
  );

  const submitHandlerForAdmission = (value: any, actions: any) => {
    const { values } = value;
    const submitData = { ...values };

    submitData["currentCoreStateId"] = submitData["coreStateId"];
    submitData["currentCoreCityId"] = submitData["coreCityId"];

    const payload = {
      name: `${submitData.firstName} ${submitData.lastName}`,
      email: submitData.email,
      phone: submitData.phone,
      coreStateId: submitData.currentCoreStateId,
      coreCityId: submitData.currentCoreCityId,
      academicCareerId: submitData.academicCareerId,
      academicProgramId: submitData.academicProgramId,
      leadSourceId: submitData.leadSourceId,
    };

    store.dispatch(takeActionForEnquiry(actions));
    store.dispatch(submissionForEnquiry(payload));
  };

  useEffect(() => {
    if (!isError && responseOfenquiry) {
      store.dispatch(resetResponseofEnquiry());

      if (resetAction) {
        resetAction.resetForm();
      }
    }
  }, [isLoading, responseOfenquiry, resetAction, isError]);

  return (
    <div className="pt-[5rem]">
      <EnquiryForm onSubmitHandlerForAdmission={submitHandlerForAdmission} />
    </div>
  );
};

export default EnquiryFormPage;
