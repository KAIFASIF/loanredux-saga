import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLoans } from "../../redux/loanSlice";
import Table from "../../libraries/Table";
import LoanRow from "./LoanRow";
import Card from "../../components/Card";
import { loanState } from "../../types";
import axios from "axios";

const Summary = () => {
  const dispatch = useDispatch();
  const [status, setStatus] = useState({});

  const { isLoading, data } = useSelector((state: loanState) => state?.loan);
  const headers: string[] = [
    "username",
    "Email",
    "Mobile",
    "Loan Amount",
    "Emi Status",
    "Status",
  ];
  useEffect(() => {
    dispatch(fetchLoans());
    handleStatus();
  }, []);

  const handleStatus = async () => {
    try {
      const res = await axios.get("http://localhost:3031/loanStatus");
      setStatus(res?.data);
    } catch (error) {}
  };

  return (
    !isLoading && (
      <div className="flex justify-center w-full  p-10 ">
        <div className="grid grid-cols-2 gap-4">
          <div className=" grid grid-cols-2 gap-4">
            {Object.entries(status).map(([key, value]: any, index: number) => (
              <Card title={key} value={value} key={index} />
            ))}

          </div>
            <Table tableData={data} headers={headers} TableRow={LoanRow} />
        </div>
      </div>
    )
  );
};

export default React.memo(Summary);
