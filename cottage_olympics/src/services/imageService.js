import axios from "axios";
let baseUrl = "api/cloudinaryImages";
const LOCAL_DOMAINS = ["localhost", "127.0.0.1"];

if (LOCAL_DOMAINS.includes(window.location.hostname)) {
  baseUrl = "http://localhost:3003/api/cloudinaryImages";
}

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const getSingle = (id) => {
  var url = baseUrl + "/" + id;

  const request = axios.get(url);
  return request.then((response) => response.data);
};

const create = async (newObject) => {
  var file = newObject;
  //   let binary = await getBinaryFromFile(file);
  let formData = new FormData();
  formData.append("file", newObject);
  const response = await axios.post(baseUrl, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  //   console.log(binary);
  //   const response = await axios.post(baseUrl, binary);
  return response.data;
};

function getBinaryFromFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.addEventListener("load", () => resolve(reader.result));
    reader.addEventListener("error", (err) => reject(err));

    reader.readAsBinaryString(file);
  });
}

// Usage

const deleteImage = async (id) => {
  const response = await axios.delete(`${baseUrl}/${id}`);
  return response;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, create, deleteSport: deleteImage, getSingle };
