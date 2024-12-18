import puppeteer from "puppeteer";
import { z } from "zod";
import { SupplementData } from "../interfaces/supplement.interface";

export class ExamineScraper {
  private readonly BASE_URL = "https://examine.com/supplements/";

  // validation
  private validateInput(query: string): string {
    const schema = z
      .string()
      .min(2, { message: "Query must be at least 2 characters" })
      .max(50, { message: "Query too long" })
      .regex(/^[a-zA-Z-]+$/, { message: "Invalid characters in query" });

    return schema.parse(query.toLowerCase());
  }

  async scrapeSupplementData(query: string): Promise<SupplementData> {
    try {
      //validation for input
      const sanitizedQuery = this.validateInput(query);

      //launch browser
      const browser = await puppeteer.launch({
        headless: true,
        timeout: 60000,
        args: [
          "--no-sandbox",
          "--disable-setuid-sandbox",
          "--disable-dev-shm-usage",
        ],
      });
      const page = await browser.newPage();

      // Enhanced browser simulation
      await page.setUserAgent(
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
      );

      // Configure page settings
      await page.setViewport({ width: 1080, height: 1024 });

      // Navigate to supplement page
      await page.goto(`${this.BASE_URL}${sanitizedQuery}`, {
        waitUntil: "networkidle0",
      });

      //extract data
      const data = await page.evaluate(() => {
        const extractText = (selector: string): string => {
          const element = document.querySelector(selector);
          return element ? element.textContent?.trim() || "" : "";
        };

        // Helper function to extract multiple text elements
        const extractMultipleTexts = (selector: string): string[] => {
          const elements = document.querySelectorAll(selector);
          return Array.from(elements)
            .map((el) => el.textContent?.trim() || "")
            .filter((text) => text !== "");
        };

        return {
          // What is section
          overview: extractText("#what-is-creatine .summary"),

          // Benefits section
          benefits: extractMultipleTexts(
            "#what-are-creatines-main-benefits .summary > p"
          ),

          // Drawbacks section
          sideEffects: extractMultipleTexts(
            "#what-are-creatines-main-drawbacks .summary > p"
          ),

          // Other names
          otherNames: extractMultipleTexts("#also-known-as ul li"),

          // Detailed information extraction
          name: extractText("h1") || sanitizedQuery,
          scientificName: extractMultipleTexts("#also-known-as ul li")[0] || "",
        };
      });
      await browser.close();
      return data;
    } catch (error) {
      console.error("Scraping failed:", error);
      throw new Error(`Failed to scrape data for ${query}`);
    }
  }
}
