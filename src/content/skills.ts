export interface SkillGroup {
  category: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    items: ["Python", "SQL", "R"],
  },
  {
    category: "Data Science & ML",
    items: [
      "pandas",
      "NumPy",
      "scikit-learn",
      "XGBoost",
      "LightGBM",
      "Matplotlib",
    ],
  },
  {
    category: "Backend & Infra",
    items: ["FastAPI", "PostgreSQL", "Redis"],
  },
  {
    category: "Tools & APIs",
    items: ["Power BI", "MS Excel", "Streamlit", "Groq API", "Gemini API"],
  },
];
