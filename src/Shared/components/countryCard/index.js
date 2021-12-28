import { memo, useCallback } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setCountryDetail } from "../../../Store/country/countryDetailSlice";
import './css/countryCard.scss'

const CountryCard = memo(({ countryData }) => {
    const { name, population, capital, continents, flags } = countryData
    const dispatch = useDispatch()

    const countrySelectHandle = useCallback(() => {
        dispatch(setCountryDetail(countryData))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [countryData])

    return (
        <article className="countryCard" onClick={countrySelectHandle}>
            <Link className="countryCard__link" to={"/" + name.common}></Link>
            {flags && name && <div className="countryCard-img">
                <img src={flags.png} alt={name.common} />
            </div>}
            <div className="countryCard-container">
                <span className="countryCard__name"> {name.common} </span>
                {population && <div className="countryCard-info">
                    <span className="countryCard-info__title">Population:</span>
                    <span className="countryCard-info__detail">{population}</span>
                </div>}
                {continents && <div className="countryCard-info">
                    <span className="countryCard-info__title">Region:</span>
                    <span className="countryCard-info__detail">{continents[0]}</span>
                </div>}
                {capital && <div className="countryCard-info">
                    <span className="countryCard-info__title">Capital:</span>
                    <span className="countryCard-info__detail">{capital[0]}</span>
                </div>}

            </div>
        </article>
    );
});

export default CountryCard;
