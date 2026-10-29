const PROJECTS = [
  {
    title: "Decoding Odors and Sequences from Rat Brain Activity",
    dates: "July 2026 to Present",
    status: "Ongoing",
    summary: "Rats smelled a series of nonspatial odor sequences while hippocampal signals were recorded. Built on methodology from <a href=\"https://www.nature.com/articles/s41467-022-28057-6\" target=\"_blank\" rel=\"noopener noreferrer\">Shahbaba et al. (2022)</a>, I initially constructed interpretable GLM models using LFP frequency-band features to decode whether odors were presented in order and identify specific odor signatures.<br><br>Currently, I am investigating the complementary dynamics between LFP time series and single-unit spike trains using the <a href=\"https://arxiv.org/abs/2507.20089\" target=\"_blank\" rel=\"noopener noreferrer\">Meta-Fusion framework</a> (Liang et al., 2025). By leveraging its mutual learning mechanism, I am examining the relative importance of each data modality to understand what unique informational components each contributes to neural decoding.",
    tags: ["Neuroscience", "Multimodal Fusion", "Meta-Fusion", "Signal Processing"],
    items: [
      { type: "pdf", label: "Summer presentation", file: "assets/hippocampal-lfp/summer-presentation.pdf" }
    ]
  },
  {
    title: "Predicting How Far Wildfire Smoke Spreads",
    dates: "Jan 2025 to May 2025",
    status: "2025 ICS Project Expo",
    summary: "Wildfire smoke can affect the air people breathe far from the fire. Our team of four combined satellite records of fires and smoke with weather data to find out what best explains how far smoke spreads. Fire size and wind speed stood out, and a machine learning model predicted smoke spread much better than simpler approaches. I led the team and built the part of the pipeline that lines events up in time.",
    tags: ["XGBoost", "SHAP", "Geospatial"],
    items: [
      { type: "pdf", label: "Poster", file: "assets/wildfire-smoke/poster.pdf" },
      { type: "pdf", label: "Midterm presentation", file: "assets/wildfire-smoke/midterm-presentation.pdf" }
    ]
  }
];