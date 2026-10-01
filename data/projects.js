const PROJECTS = [
  {
    title: "Hippocampal LFP Odor Sequence Decoding",
    dates: "July 2026 to Present",
    status: "Ongoing",
    summary: "Interpretable models on rat hippocampal recordings that predict whether an odor sequence was in order (73% mean balanced accuracy) and which odor was present (52% against 20% chance). This is the final summer presentation, and the work continues.",
    tags: ["Neuroscience", "Logistic Regression", "Signal Processing"],
    items: [
      { type: "pdf", label: "Summer presentation", file: "assets/hippocampal-lfp/summer-presentation.pdf" }
    ]
  },
  {
    title: "Wildfire Smoke Dispersion Modeling",
    dates: "Jan 2025 to May 2025",
    status: "2025 ICS Project Expo",
    summary: "Senior project led by a team of four. I built the temporal part of the geospatial pipeline, and our XGBoost model more than doubled the R-squared of linear baselines (0.45 vs. 0.20), with fire size and wind speed as top predictors.",
    tags: ["XGBoost", "SHAP", "Geospatial"],
    items: [
      { type: "pdf", label: "Poster", file: "assets/wildfire-smoke/poster.pdf" },
      { type: "pdf", label: "Final presentation", file: "assets/wildfire-smoke/final-presentation.pdf" }
    ]
  }
];
