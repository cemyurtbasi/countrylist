import baseService from "./baseService";

export default class ConfigurationService extends baseService {

  getAllCountries() {
    return this.getObject("all");
  }
  getCountriesByNane(entity) {
    return this.getObject("name", entity);
  }
  getCountriesByRegion(entity) {
    return this.getObject("region", entity);
  }
}
