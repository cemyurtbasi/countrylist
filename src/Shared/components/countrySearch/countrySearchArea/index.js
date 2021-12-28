import { memo } from "react";
import { Select } from 'antd';
import './css/countrySearchArea.scss'

const { Option } = Select
const areaList = [
    { name: "Africa", id: 1 },
    { name: "Americas", id: 2 },
    { name: "Asia", id: 3 },
    { name: "Europe", id: 4 },
    { name: "Oceania", id: 5 },
]
const CountrySearchArea = memo(({ setSelectedArea }) => {
    return (
        <div className="countrySearchArea">
            <Select className="countrySearchArea__search" dropdownClassName="countrySearchArea__search--dropDown" placeholder="Find by region" onChange={setSelectedArea}>
                {areaList.map(({ name, id }) => {
                    return <Option value={name} key={id}>{name}</Option>
                })}
            </Select>
        </div>
    );
});

export default CountrySearchArea;
