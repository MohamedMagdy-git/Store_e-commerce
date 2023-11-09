import axios from "axios";

const BASE_URL = "http://localhost:1337/api";
const API_TOKEN = '057a9a7bcaf81d3b43dd3c6a9879513d379ada396abc87a5870f5bf3f5e2e81cc249e4aa5f8afea638d4b28b69f9279448b29d982943c6f168c6ef6a793165c2f8f9dc2c43cf0d1cc7bbeb6fdf70aa0fa79f0709288e5734e8f901add54adfa8e0f3f2f19d1ea8efbda24c9468d61c6a73a80daad52ed9e255d4aa6ccb7b3649';


export const makeRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: "bearer " + API_TOKEN,
  },
});