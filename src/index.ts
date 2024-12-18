import { ExamineScraper } from "./services/scraper.service";

async function runScraper() {
  const scraper = new ExamineScraper();
  try {
    const result = await scraper.scrapeSupplementData("creatine");
    console.log(JSON.stringify(result, null, 2));
  } catch (error) {
    console.error("Scraping process failed:", error);
  }
}

runScraper();
