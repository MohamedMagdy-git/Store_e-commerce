import axios from "axios";

const BASE_URL = "https://strapibackend-q121.onrender.com/api";
const API_TOKEN = 'fe9c1703ba55e7b2952867417f614c439a37016a72170ac76765545172eac63499f2622b86b59f1e7296dca534c21f46e733ea7ed14d3e1874ad413c54206d77b3139163dfd55f2e80a76da0c6c06f1189fe21494e6ad9823ba66eaae09e65677471b1be17ac254417910f5a70e24602e6067413f0712b067c91ab5acc192bfa';

const headers = {
    Authorization: "bearer "  + API_TOKEN,
}


export const fethchDataFromApi = async (url) => {
    try {
        const  data  = await axios.get(BASE_URL + url, {
            headers
        })
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
}


export const postDataToApi = async (url, username, email, password) => {
    try {
        const  data  = await axios.post(BASE_URL + url, {
            username : username,
            email : email,
            password : password
        } ,{
            headers
        })
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
}