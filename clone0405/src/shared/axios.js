// const instance = axios.create({
//   baseURL: "http://3.36.111.14/",
// });

// // 인스턴스가 생성 된 후 기본값 변경
// instance.defaults.headers.common["Authorization"] = AUTH_TOKEN;

// export { instance };
import axios from "axios";

const instance = axios.create({
  baseURL: "http://3.36.111.14/",
});

export const setAuthToken = (token) => {
  if (token) {
    // Apply to every request
    instance.defaults.headers.common["Authorization"] = "Bearer " + token;
  } else {
    // Delete auth header
    delete instance.defaults.headers.common["Authorization"];
  }
};

export default instance;
