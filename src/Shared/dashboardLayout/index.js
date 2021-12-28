import { memo } from "react";
import DashboardFooter from "./dashboardFooter";
import DashboardHeader from "./dashboardHeader";
import './css/dashboardLayout.scss'

const DashboardLayout = memo(({ children }) => {

    return (
        <div className="dashboardLayout">
            <DashboardHeader />
            {children}
            <DashboardFooter />
        </div>
    );
});

export default DashboardLayout;
