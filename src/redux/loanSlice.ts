import { createSlice } from "@reduxjs/toolkit";

type initialStateType = {
  data: any;
  isLoading: boolean;
  sucessMessage: null | string;
  errorMessage: null | string;
};

const initialState: initialStateType = {
  isLoading: false,
  sucessMessage: null,
  data: [],
  errorMessage: null,
};
const loanSlice = createSlice({
  name: "loans",
  initialState,
  reducers: {
    fetchLoans(state) {
      state.isLoading = true;
    },
    fetchLoansSucess(state, action) {
      state.data = action.payload;
      state.isLoading = false;
    },
    fetchLoansFailure(state, action:any) {
      state.isLoading = false;
      state.errorMessage = action?.payload;
    },
  },
});

export const { fetchLoans, fetchLoansSucess, fetchLoansFailure } =
  loanSlice.actions;
export default loanSlice.reducer;
