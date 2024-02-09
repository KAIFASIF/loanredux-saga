import React from "react";
import { useNavigate } from "react-router-dom";

type loanRowType = {
  ele: any;
};
const LoanRow: React.FC<loanRowType> = ({ ele }) => {
  const navigate = useNavigate();
  return (
    <tr
      className="tableBodyTr hover:bg-gray-100 border-b-2 w-full cursor-pointer"
      onClick={() => navigate(`/${ele?.loanId}/${ele?.id}/loan-details`)}
    >
      <td className="tableBodyTd pl-5 py-4 text-gray-500 text-sm font-normal m-10">
        {" "}
        {ele?.user?.name}
      </td>
      <td className="tableBodyTd pl-5 py-4 text-gray-500 text-sm font-normal">
        {" "}
        {ele?.user?.email}
      </td>
      <td className="tableBodyTd pl-5 py-4 text-gray-500 text-sm font-normal">
        {" "}
        {ele?.user?.mobile}
      </td>
      <td className="tableBodyTd pl-5 py-4 text-gray-500 text-sm font-normal">
        {" "}
        {ele?.loanAmount}
      </td>
      <td
        className={`tableBodyTd pl-5 py-4 text-gray-500 text-sm font-normal
      ${ele?.isPaid ? "text-green-600" : "text-red-600"}`}
      >
        {" "}
        {ele?.isPaid ? "Paid" : "Unpaid"}
      </td>
      <td className="tableBodyTd pl-5 py-4 text-gray-500 text-sm font-normal underline">
        {" "}
        {ele?.status}
      </td>
    </tr>
  );
};

export default LoanRow;
