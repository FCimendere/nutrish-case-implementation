import { VercelRequest, VercelResponse } from "@vercel/node";
import { ExamineScraper } from "../src/services/scraper.service";

// export default async function handler(req: VercelRequest, res: VercelResponse) {
//   // CORS headers
//   res.setHeader("Access-Control-Allow-Credentials", "true");
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS");
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
//   );

//   // OPTIONS request handling
//   if (req.method === "OPTIONS") {
//     return res.status(200).end();
//   }
//   //get query params such as creatine
//   const { query } = req.query;

//   if (!query || typeof query !== "string") {
//     return res.status(400).json({ error: "Invalid query parameter" });
//   }

//   const scraper = new ExamineScraper();

//   try {
//     //scraping
//     const result = await scraper.scrapeSupplementData(query);
//     return res.status(200).json(result);
//   } catch (error) {
//     return res.status(500).json({ error: "Scraping failed" });
//   }
// }

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    // CORS headers
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
    );

    // OPTIONS request handling
    if (req.method === "OPTIONS") {
      return res.status(200).end();
    }

    const { query } = req.query;

    if (!query || typeof query !== "string") {
      return res.status(400).json({ error: "Invalid query parameter" });
    }

    const scraper = new ExamineScraper();
    const result = await scraper.scrapeSupplementData(query);

    return res.status(200).json(result);
  } catch (error) {
    console.error("Error in API handler:", error);
    return res.status(500).json({
      error: "Scraping failed",
      details: error instanceof Error ? error.message : "Unknown error",
    });
  }
}
