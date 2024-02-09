import { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import RHFTextField from "../../libraries/form/RHFTextField";
import { loanState } from "../../types";


const LoanDetails = () => {
  const { id } = useParams();
  const state = useSelector((state: loanState) => state?.loan?.data);
  const methods = useForm();
  const { setValue } = methods;

  useEffect(() => {
    fetchLoan();
  }, []);

  const fetchLoan = () => {
    if (state.length > 0 && id) {
      const loan = state.find((ele: any) => ele?.id === parseInt(id));
      for (let [key, value] of Object.entries(loan)) {
        key === "isPaid" && value
          ? setValue(key, "Paid")
          : key === "isPaid" && !value
          ? setValue(key, "Due")
          : setValue(key, value);
      }
      for (let [key, value] of Object.entries(loan?.user)) {
        setValue(key, value);
      }
    }
  };

  return (
    <div className="flex justify-center  w-full h-screen bg-gray-50 pt-20">
      <FormProvider {...methods}>
        <div className=" w-[75%]  p-5">
          <div className="grid grid-cols-2 gap-4 place-items-center w-full bg-white p-10 shadow-md">
            <div className="w-full">
              <RHFTextField name="name" label="Name" disabled fullWidth />
            </div>

            <div className="w-full">
              <RHFTextField name="mobile" label="Mobile" disabled fullWidth />
            </div>
            <div className="w-full">
              <RHFTextField name="email" label="Email" disabled fullWidth />
            </div>
            <div className="w-full">
              <RHFTextField name="status" label="Status" disabled fullWidth />
            </div>
            <div className="w-full">
              <RHFTextField
                name="loanAmount"
                label="Loan Amount"
                disabled
                fullWidth
              />
            </div>
            <div className="w-full">
              <RHFTextField
                name="isPaid"
                label="Emi Status"
                disabled
                fullWidth
              />
            </div>
            {/* <RHFTextField name="name" label="Name" disabled fullWidth />
            <RHFTextField name="name" label="Email" disabled fullWidth />
            <RHFTextField name="mobile" label="Mobile" disabled fullWidth />
            <RHFTextField
              name="loanAmount"
              label="Loan Amount"
              disabled
              fullWidth
            />
            <RHFTextField name="status" label="Status" disabled fullWidth /> */}
          </div>
        </div>
      </FormProvider>
    </div>
  );
};

export default LoanDetails;
