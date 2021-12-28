import { Input } from "antd";
import { memo, useEffect, useState } from "react";
import './css/countrySearch.scss';
import { FaSearch } from 'react-icons/fa';
import CountrySearchArea from "./countrySearchArea";
import { getAllCountries, getCountryListByName, getCountryListByRegion } from "../../../Store/country/countryListSlice";
import { useDispatch } from "react-redux";

const CountrySearch = memo(() => {
    const [searchValue, setSearchValue] = useState()
    const [selectedArea, setSelectedArea] = useState()
    const dispatch = useDispatch()

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            handleSearch(searchValue)
        }, 300)

        return () => clearTimeout(delayDebounceFn)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchValue])


    const handleSearch = (searchValue) => {
        if (!searchValue || searchValue.length < 3) {
            dispatch(getAllCountries())
        } else {
            dispatch(getCountryListByName(searchValue))
        }
    }

    useEffect(() => {
        if (selectedArea) {
            dispatch(getCountryListByRegion(selectedArea))
            setSearchValue("")
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedArea])

    return (
        <div className="countrySearch">
            <div className="countrySearch-input">
                <FaSearch className="countrySearch-input__icon" />
                <Input className="countrySearch-input__element"
                    placeholder="Search for a country..."
                    onChange={(e) => setSearchValue(e.target.value)}
                    value={searchValue}
                />
            </div>

            <CountrySearchArea setSelectedArea={setSelectedArea} />
        </div>
    );
});

export default CountrySearch;
