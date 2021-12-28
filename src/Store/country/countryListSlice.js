import { createSlice } from "@reduxjs/toolkit";
import Service from "../../Service";
const service = new Service();

const countryListSlice = createSlice({
  name: "countryList",
  initialState: {
    countryList: null
  },
  reducers: {
    setItemList: (state, { payload }) => {
      state.countryList = payload;
    },
  },
});

export const countryListData = (state) => state.countryList; // initialState üzerindeki bilgileri dışarı aktarma

export const { setItemList } = countryListSlice.actions; // functions dışarıya aktarılması

export default countryListSlice.reducer;

export function getAllCountries() {
  return async (dispatch) => {
    dispatch(setItemList(null));
    service.country.getAllCountries().then((res) => {
      dispatch(setItemList(res || []));
    });
  };
}

export function getCountryListByName(name) {
  return async (dispatch) => {
    dispatch(setItemList(null));
    service.country.getCountriesByNane(name).then((res) => {
      dispatch(setItemList(res || []));
    });
  };
}

export function getCountryListByRegion(region) {
  return async (dispatch) => {
    dispatch(setItemList(null));
    service.country.getCountriesByRegion(region).then((res) => {
      dispatch(setItemList(res || []));
    });
  };
}
