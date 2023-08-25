import axios from "axios";

export const getCurrentUser = async () => {
  await axios.get("/api/current").then((res) => res.data);
};
