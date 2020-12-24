import axios from "axios";

const instance = axios.create({
  baseURL: "https://fakerestapi.azurewebsites.net",
});

export default instance;
