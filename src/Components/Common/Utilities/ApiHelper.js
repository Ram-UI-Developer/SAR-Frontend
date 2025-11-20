import { API_BASE_URL } from "./Constants";

export const request = async ({endpoint, method = "GET", body = null}) => {
  const url = `${API_BASE_URL}${endpoint}`;
  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  };
    if (body) {
    options.body = JSON.stringify(body);
    }
    const response = await fetch(url, options);
    if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
};
