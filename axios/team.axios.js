const axios = require("axios");
require("dotenv").config();

const TEAM_BOT_TOKEN = process.env.TEAM_BOT_TOKEN;

const BASE_URL = `https://api.telegram.org/bot${TEAM_BOT_TOKEN}`;

function getAxiosInstance() {
  return {
    get(method, params) {
      return axios.get(`${BASE_URL}/${method}`, { params });
    },
    post(method, data) {
      return axios.post(`${BASE_URL}/${method}`, data);
    },
  };
}

const axiosInstance = getAxiosInstance();
module.exports = axiosInstance;
