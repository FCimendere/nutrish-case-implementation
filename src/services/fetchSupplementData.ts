import axios from "axios";
import "dotenv/config";

const fetchSupplementData = async (query: string) => {
  try {
    console.log(`${process.env.SUPPLEMENT_API_URL}`);
    const response = await axios.get(
      `${process.env.SUPPLEMENT_API_URL}?query=${query}`
    );
    return response.data;
  } catch (error) {
    console.error("API request failed", error);
    return null;
  }
};
