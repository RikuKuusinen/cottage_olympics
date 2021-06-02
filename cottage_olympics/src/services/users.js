import axios from "axios";
let baseUrl = "api/users";
const LOCAL_DOMAINS = ["localhost", "127.0.0.1"];

if (LOCAL_DOMAINS.includes(window.location.hostname)) {
  baseUrl = "http://localhost:3003/api/users";
}

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const getUser = async (userName) => {
  console.log(userName);
  var url = baseUrl + "/username/" + userName;
  console.log(url);
  const response = await axios.get(url);
  console.log(response);
  if (response.data !== null && response.data.UserId) {
    return response.data;
  } else {
    console.log("Ei löytyny käyttäjää");
    return undefined;
  }
};

const create = async (newObject) => {
  const response = await axios.post(baseUrl, newObject);
  console.log("luotiinko käyttäjä" + response);
  console.log(response);
  var user = {
    UserId: response.data.UserId,
    UserName: newObject.userName,
  };
  return user;
};

const createIfNeeded = async (newObject) => {
  var existingUser = await getUser(newObject.userName);
  if (existingUser && existingUser.UserId) {
    return existingUser;
  } else {
    return await create(newObject);
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, create, getUser, createIfNeeded };
