import axios from "axios";
import "dotenv/config";

const fetchSupplementData = async (query: string) => {
  if (!process.env.SUPPLEMENT_API_URL) {
    throw new Error(
      "SUPPLEMENT_API_URL is not defined in environment variables"
    );
  }

  // const apiUrl = process.env.SUPPLEMENT_API_URL.replace(
  //   "https://https://",
  //   "https://"
  // );

  try {
    console.log(
      `Making request to: ${process.env.SUPPLEMENT_API_URL}?query=${query}`
    );
    const response = await axios.get(
      `${process.env.SUPPLEMENT_API_URL}?query=${query}`
    );
    return response.data;
  } catch (error) {
    console.error("API request failed:", error);
    throw error; // Hata yönetimi için hatayı yukarı fırlatıyoruz
  }
};

export default fetchSupplementData;
