import axios from "axios";

export default class baseService {
  constructor() {
    this.apiURL = "https://restcountries.com/v3.1/";
  }

  getObject(schemaName, data) {
    var url = `${this.apiURL}${schemaName}/${data ? data : ""}`;
    return this.callServiceMethod(url, "GET");
  }

  async callServiceMethod(url, method) {
    var authOptions = {
      method,
      url,
    };

    return await axios(authOptions)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
