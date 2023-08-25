import axios from "axios";

export const useHeroInfo = async () => {
  await axios.get("/api/random").then((res) => res.data);
};
