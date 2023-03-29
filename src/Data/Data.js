import axios from "axios";
export const BACKEND_URL = "http://localhost:5000";

export function getLeaderBoardData() {
  return axios.get(`${BACKEND_URL}`);
}

export function getTeamData() {
  return axios.get(`${BACKEND_URL}/team`);
}

export function getPsData() {
  return axios.get(`${BACKEND_URL}/ps`);
}