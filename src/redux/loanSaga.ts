import axios, { AxiosResponse } from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { fetchLoansFailure, fetchLoansSucess } from "./loanSlice";

function* getLoans() {
  try {
   
    const res: AxiosResponse = yield call(() =>
      axios.get("http://localhost:3031/loan")
    );
    if (res?.status === 200) {
      yield put(fetchLoansSucess(res?.data));
    }
  } catch (error: any) {
    if (error?.response.status === 404) {
      yield put(fetchLoansFailure(error?.message));
    }
  }
}

function* loanSaga() {
  yield takeLatest("loans/fetchLoans", getLoans);
}

export default loanSaga;
