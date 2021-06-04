import axios from "axios";
let baseUrl = "api/sports";
const LOCAL_DOMAINS = ["localhost", "127.0.0.1"];

if (LOCAL_DOMAINS.includes(window.location.hostname)) {
  baseUrl = "http://localhost:3003/api/scores";
}

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const create = async (newObject) => {
  const response = await axios.post(baseUrl, newObject);
  return response.data;
};

const deleteScore = async (id) => {
  const response = await axios.delete(`${baseUrl}/${id}`);
  return response;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, create, deleteScore };
