const PROJECTS = [
  {
    title: "Decoding Odors and Sequences from Rat Brain Activity",
    dates: "July 2026 to Present",
    status: "Ongoing",
    summary: "Rats smelled a series of odors while the electrical activity of their hippocampus, a brain region tied to memory, was recorded. I built simple, explainable models that read those signals to tell whether an odor came in the expected order and which odor the rat was smelling, then looked at which brain rhythms mattered and when. The work is ongoing, and I add new presentations as it moves forward.",
    tags: ["Neuroscience", "Logistic Regression", "Signal Processing"],
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
