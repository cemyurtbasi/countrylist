import { memo } from "react";
import CountrySearch from "../../Shared/components/countrySearch";
import DashboardLayout from "../../Shared/dashboardLayout";
import { useSelector } from "react-redux";
import './css/countryList.scss'
import CountryCard from "../../Shared/components/countryCard";
import { Spin } from 'antd';

const CountryList = memo(() => {
    const { countryList } = useSelector(state => state.countryList);

    return (
        <DashboardLayout>
            <div className="countryList">
                <CountrySearch />
                <div className="countryList-container">
                    {countryList ?
                        countryList.length > 0 ?
                            countryList.map((countryData) => {
                                return <CountryCard countryData={countryData} key={countryData.name.common} />
                            })
                            :
                            <span>No Data</span>
                        : <Spin size="large" />}
                </div>
            </div>
        </DashboardLayout>
    );
});

export default CountryList;
