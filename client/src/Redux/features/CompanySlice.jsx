import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  personalDetails: {
    firstName: "",
    lastName: "",
    phone: "",
    buildingNo: "",
    streetName: "",
    landmark: "",
    city: "",
    state: "",
    postalCode: ""
  },
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
    setPersonalDetails: (state, action) => {
      state.personalDetails = action.payload;
    },
    setCompanyDetails: (state, action) => {
      state.companyDetails = action.payload;
    },
  },
});

export const { setPersonalDetails, setCompanyDetails } = CompanySlice.actions;

export default CompanySlice.reducer;
