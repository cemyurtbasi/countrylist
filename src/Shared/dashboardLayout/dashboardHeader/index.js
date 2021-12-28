import { memo } from "react";
import './css/dashboardHeader.scss';
import ThemeButton from "../../components/customButton/themeButton";

const DashboardHeader = memo(() => {

    return (
        <header className="dashboardHeader">
            <h1 className="dashboardHeader__siteTitle">Where in the world?</h1>
            <ThemeButton />
        </header>
    );
});

export default DashboardHeader;
