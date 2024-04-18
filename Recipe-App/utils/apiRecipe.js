import axios from "axios";

const api_key = "01dea175fcf61fcf2cb9c51067072f01";
const app_id = "8c1a40db";

export const recipe = async () => {
  try {
    const response = await axios.get(
      `https://api.edamam.com/api/recipes/v2?app_id=${app_id}&app_key=${api_key}`,
      {
        params: {
          type: "public",
          q: "chicken",
        },
      }
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
