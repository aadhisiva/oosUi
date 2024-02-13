import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ADD_USER, DASHBOARD, OVERALL_REPORTS, REDEMPTION } from "../utilities/routePaths";

const DashBoardComponent = React.lazy(() => import("../pages/dashboard"));
const AddUserComponent = React.lazy(() => import("../pages/addUser"));
const ReportOverallComponent = React.lazy(() => import("../pages/overAllReports"));
const RedemptionReportComponent = React.lazy(() => import("../pages/redemption"));

export const PageRoutes = () => {
    return (
      <Routes>
        {/* <Route 
          path={SIGN_IN} 
          element={<PublicRoutes element={<SignInComponent />} /> }
          /> */}
        {/* <Route path={SIGN_IN} element={<SignInComponent />} /> */}
  
        {/* Secure route for Dashboard page */}
        {/* <Route
          path={DASHBOARD}
          element={<SecureRoutes element={<DashBoardComponent />} />}
        /> */}
        <Route path={DASHBOARD} element={<DashBoardComponent />} />
        <Route path={ADD_USER} element={<AddUserComponent />} />
        <Route path={OVERALL_REPORTS} element={<ReportOverallComponent />} />
        <Route path={REDEMPTION} element={<RedemptionReportComponent />} />
        <Route index path="/*" element={<Navigate to={DASHBOARD} />} />
      </Routes>
    );
  };
  