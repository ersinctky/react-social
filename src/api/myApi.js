import axios from "axios";

export const myApi = axios.create({
  baseURL: "http://localhost:8800/api",
});
