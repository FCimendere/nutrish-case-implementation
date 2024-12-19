<h1>Nutrish Case Implementation</h1>
<p>A TypeScript-based web scraper that extracts supplement information from Examine.com. This tool uses Puppeteer for web scraping and provides structured data about various supplements, including their benefits, side effects, and scientific names.
The output contains limited data as would occur in console JSON output.
</p>

<h2>Features</h2>
<ol>
<li>Web scraping of supplement information from Examine.com</li>
<li>Input validation using Zod</li>
<li>Structured data output with TypeScript interfaces</li>
<li>Headless browser automation using Puppeteer</li>
<li>Error handling and logging</li>
</ol>

<p>This project is working on <b>main</b> and <b>nutrish-scraper</b> branches for minimum requirements.</p>

<p>The <b>nutrish-ai-chatbot</b> branch provides some additional steps for chatbot AI applications for preferred pequirements. Especially creating API via Vercel. However, this part is not fully completed.</p>

<h2>Prerequisites</h2>
<ul>
<li>Node.js (LTS version recommended)</li>
<li>npm or yarn package manager</li>
<li>TypeScript knowledge for development</li>
</ul>

<h2>Installation</h2>
<ol>
<li>Clone the repository:</li>

```
git clone https://github.com/FCimendere/nutrish-case-implementation.git
cd nutrish-case-implementation
```

<li>Install dependencies:</li>

```
npm install
```
</ol>

<h2>Usage</h2>
<h3>Running the Scraper</h3>
<p>You can run the scraper using the following command:</p>

```
npm run scrape
```

Or directly with ts-node:

```
npm run start
```

<h3>Example Output Structure</h3>
<p>The scraper returns data in the following format:</p>

```
typescriptCopyinterface SupplementData {
  name: string;
  scientificName: string;
  overview: string;
  benefits: string[];
  sideEffects: string[];
  otherNames: string[];
}
```

<h3>Project Structure</h3>

```
├── src/
│   ├── interfaces/
│   │   └── supplement.interface.ts
│   ├── services/
│   │   └── scraper.service.ts
│   └── index.ts
├── package.json
└── tsconfig.json
```

<h2>Technical Details</h2>
<ul>
<li>Built with TypeScript for type safety</li>
<li>Uses Puppeteer for browser automation</li>
<li>Implements Zod for input validation</li>
<li>Configured with strict TypeScript settings</li>
<li>Includes proper error handling and logging</li>
</ul>

<h2>Development</h2>
<p>To build the project:</p>

```
npm run build

```

<p>The compiled JavaScript files will be output to the <b><em>dist</em></b> directory.</p>

<h2>Dependencies</h2>
<ul>
  <li><b><em>puppeteer:</em></b> Web scraping and browser automation</li>
  <li><b><em>zod:</em></b> Runtime type checking and validation</li>
  <li><b><em>typescript:</em></b> Static type checking</li>
  <li><b><em>ts-node:</em></b> TypeScript execution environment</li>
</ul>





<h2>Notes</h2>
<ul>
  <li>This scraper is designed for educational purposes</li>
  <li>Please respect Examine.com's terms of service and rate limiting</li>
  <li>Ensure proper error handling when using in production</li>
</ul>

<h1>Vercel API Integration Improvements</h1>

<p>The project can scrape on Puppeteer and Typescript as a backend service. For better performance, the backend can be turned into an API endpoint via VERCEL as a Backend Project. The user can simply enter the word they want to search next to the Vercel link and perform a query query. The Vercel AI chatbot starter project at https://github.com/vercel/ai-chatbot can be run locally or deployed on Vercel. Then this API response can be sent to the Chatbot.
</p>


<h3>API Endpoint Structure</h3>
<ul>
  <li>Convert to Vercel Serverless Functions</li>
</ul>
<h3>API Features:</h3>
<ul>
  <li>CORS Configuration</li>
  <li>API Authentication</li>
</ul>
<h3>Environment Setup:</h3>
<ul>
  <li>Vercel Configuration</li>
  <li>Required Dependencies</li>
  <li>Frontend Integration</li>
</ul>

  
<h2>License</h2>

ISC

<h2>Author</h2>
[Fulya Cimendere]

Note: This project is not affiliated with Examine.com and is for educational purposes only.
