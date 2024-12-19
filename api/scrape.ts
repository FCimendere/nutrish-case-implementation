import { VercelRequest, VercelResponse } from "@vercel/node";
import { ExamineScraper } from "../src/services/scraper.service";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  //get query params such as creatine
  const { query } = req.query;

  if (!query || typeof query !== "string") {
    return res.status(400).json({ error: "Invalid query parameter" });
  }

  const scraper = new ExamineScraper();

  try {
    //scraping
    const result = await scraper.scrapeSupplementData(query);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error: "Scraping failed" });
  }
}
