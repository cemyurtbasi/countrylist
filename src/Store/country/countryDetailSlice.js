import { createSlice } from "@reduxjs/toolkit";
import Service from "../../Service";
const service = new Service();


const countryDetailSlice = createSlice({
    name: "countryDetail",
    initialState: {
        countryDetail: null,
    },
    reducers: {
        setItemList: (state, { payload }) => {
            state.countryDetail = payload;
        },
    },
});

export const countryDetailData = (state) => state.countryDetail; // initialState üzerindeki bilgileri dışarı aktarma

export const { setItemList } = countryDetailSlice.actions; // functions dışarıya aktarılması

export default countryDetailSlice.reducer;

export function setCountryDetail(data) {
    return (dispatch) => {
        dispatch(setItemList(data));
    };
}

export function getCountryDetailByName(name) {
    return async (dispatch) => {
        service.country.getCountriesByNane(name).then((res) => {
            dispatch(setItemList(res?.[0]));
        });
    };
}