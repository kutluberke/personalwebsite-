export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  githubUrl: string;
}

const GITHUB_PROFILE = "https://github.com/kutluberke";

export const projects: Project[] = [
  {
    slug: "otoiq",
    title: "OtoIQ",
    tagline: "Full-stack market intelligence for the Turkish used-car market.",
    description:
      "A production-style platform serving ensemble ML price estimates on live listings, backed by a scraping pipeline and a proper API layer instead of a notebook.",
    stack: [
      "Next.js",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "XGBoost",
      "Random Forest",
      "Gradient Boosting",
      "nodriver",
    ],
    githubUrl: GITHUB_PROFILE,
  },
  {
    slug: "otoestimate",
    title: "OtoEstimate",
    tagline: "End-to-end car price prediction, built to survive real data.",
    description:
      "Scraped 1,000+ live listings from arabam.com, then an ensemble pipeline (Ridge, Random Forest, LightGBM) with log(km+1) transforms and IQR outlier filtering — after catching a R²=1.00 overfit, tuned it back down to a model that's actually trustworthy.",
    stack: [
      "Python",
      "Requests",
      "BeautifulSoup",
      "Ridge",
      "Random Forest",
      "LightGBM",
      "Streamlit",
    ],
    githubUrl: GITHUB_PROFILE,
  },
  {
    slug: "pediatric-dental-analysis",
    title: "Pediatric Dental Anomaly Analysis",
    tagline: "Statistics doing the work, no ML required.",
    description:
      "Statistical analysis of 3,323 pediatric patient records for a dental clinic — prevalence rates, demographic and location-based patterns across 18 tables in 7 categories, delivered as a clinical report for people who need conclusions, not code.",
    stack: ["Python", "pandas", "openpyxl", "Statistics"],
    githubUrl: GITHUB_PROFILE,
  },
  {
    slug: "cv-analyzer",
    title: "CV Analyzer",
    tagline: "Hybrid ATS scoring, part parser and part LLM.",
    description:
      "A Streamlit app that scores resumes against ATS logic — combining programmatic parsing (section detection, keyword density, format analysis) with LLM-powered semantic feedback via the Groq API.",
    stack: ["Python", "Streamlit", "NLP", "Groq API"],
    githubUrl: GITHUB_PROFILE,
  },
  {
    slug: "bist-radar",
    title: "BIST Radar",
    tagline: "A Turkish stock market dashboard with AI-generated read-outs.",
    description:
      "Live price data via yfinance paired with LLM-generated market analysis through the Groq API, in a single dashboard.",
    stack: ["Streamlit", "yfinance", "Groq API"],
    githubUrl: GITHUB_PROFILE,
  },
  {
    slug: "jarvis",
    title: "JARVIS",
    tagline: "A framework-free local AI agent.",
    description:
      "CLI and API access to a locally-hosted gemma2:9b model via Ollama, no agent framework in the loop — plus a Three.js orb interface for the fun of it.",
    stack: ["Python", "FastAPI", "Ollama", "gemma2:9b", "Three.js"],
    githubUrl: GITHUB_PROFILE,
  },
];
