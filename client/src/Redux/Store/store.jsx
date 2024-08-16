import { configureStore, combineReducers } from '@reduxjs/toolkit'
import UserReducer from '../features/UserSlice'
import CompanyReducer from '../features/CompanySlice';

const rootReducer = combineReducers({
  user: UserReducer,
  company: CompanyReducer,
})

export const store = configureStore({
  reducer:  rootReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['company/setCompanyDetails'],
        // Ignore these field paths in all actions
        ignoredActionPaths: ['payload.logo'],
        // Ignore these paths in the state
        ignoredPaths: ['company.companyDetails.logo'],
      },
    }),
});
