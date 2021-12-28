import { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DashboardLayout from "../../Shared/dashboardLayout";
import './css/countryDetail.scss';
import { countryDetailData, getCountryDetailByName, setCountryDetail } from "../../Store/country/countryDetailSlice";
import LinkButton from "../../Shared/components/customButton/linkButton";

const CountryDetail = memo(() => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const { countryDetail } = useSelector(countryDetailData);

    useEffect(() => {
        if (countryDetail || !id) return;
        dispatch(getCountryDetailByName(id))

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [countryDetail, id]);

    useEffect(() => {
        //Detaydan çıkışta sıfırlaması için
        return () => dispatch(setCountryDetail(null))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (!countryDetail) return null
    const { name, population, capital, continents, flags, borders } = countryDetail

    return (
        <DashboardLayout>
            <div className="countryDetail">
                <LinkButton url="/" text="Back" />
                <div className="countryDetail-container">
                    <div className="countryDetail-image">
                        <img src={flags.png} alt={name.common} />
                    </div>
                    <div className="countryDetail-info">
                        <span className="countryDetail-info__name"> {name.common} </span>

                        <div className="countryDetail-info-text">
                            <div className="countryDetail-info-text-item">
                                <span className="countryDetail-info-text-item__title">Population:</span>
                                <span className="countryDetail-info-text-item__detail">{population}</span>
                            </div>
                            <div className="countryDetail-info-text-item">
                                <span className="countryDetail-info-text-item__title">Region:</span>
                                <span className="countryDetail-info-text-item__detail">{continents[0]}</span>
                            </div>
                            <div className="countryDetail-info-text-item">
                                <span className="countryDetail-info-text-item__title">Capital:</span>
                                <span className="countryDetail-info-text-item__detail">{capital[0]}</span>
                            </div>
                            <div className="countryDetail-info-text-item">
                                <span className="countryDetail-info-text-item__title">Capital:</span>
                                <span className="countryDetail-info-text-item__detail">{capital[0]}</span>
                            </div>
                            <div className="countryDetail-info-text-item">
                                <span className="countryDetail-info-text-item__title">Capital:</span>
                                <span className="countryDetail-info-text-item__detail">{capital[0]}</span>
                            </div>
                            <div className="countryDetail-info-text-item">
                                <span className="countryDetail-info-text-item__title">Capital:</span>
                                <span className="countryDetail-info-text-item__detail">{capital[0]}</span>
                            </div>
                            <div className="countryDetail-info-text-item">
                                <span className="countryDetail-info-text-item__title">Capital:</span>
                                <span className="countryDetail-info-text-item__detail">{capital[0]}</span>
                            </div>
                        </div>

                        <div className="countryDetail-info-boundires">
                            <span className="countryDetail-info-boundires__title">
                                Border Countries:
                            </span>
                            {borders ? <div className="countryDetail-info-boundires-list">
                                {borders.map((countryName, index) => {
                                    return <span key={index} className="countryDetail-info-boundires-list__country">{countryName}</span>
                                })}
                            </div> : <span className="countryDetail-info-boundires__noBoundries">No country available</span>}
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
});

export default CountryDetail;
