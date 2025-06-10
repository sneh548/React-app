import axios from "axios";
import config from "../Config/config";

const login = async ({ email, password }) => {
  const response = await axios.post(
    `${config.apiBaseUrl}${config.loginEndpoint}`,
    {
      email,
      password,
    }
  );
  return response;
};

export { login };
