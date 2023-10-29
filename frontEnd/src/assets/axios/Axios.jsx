import axios from "axios";
const instance = axios.create({
  baseURL: "http://localhost:3000/app/admin/api/v1",
});
instance.defaults.headers.common["Content-Type"] = "application/json";

export default instance;
