import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  companyDetails: {
    company: "",
    owner: "",
    logo: "",
  },
};

export const CompanySlice = createSlice({
  name: "company",
  initialState,
  reducers: {
    setCompanyDetails: (state, action) => {
      state.companyDetails = action.payload;
    },
  },
});

export const { setCompanyDetails } = CompanySlice.actions;

export default CompanySlice.reducer;
