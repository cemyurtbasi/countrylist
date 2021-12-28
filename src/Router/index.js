import { Route, Routes } from "react-router-dom";
import CountryList from "../Pages/countryList";
import CountryDetail from "../Pages/countryDetail";
const Router = ({ match }) => {
    return (
        <Routes>
            <Route exact path="/" element={<CountryList />} />
            <Route path={"/:id"} element={<CountryDetail />} />
        </Routes>
    );
};

export default Router;
