import axios from "axios";

const api = axios.create({
  baseURL: "https://api-do-it.herokuapp.com/",
});

export default api;
