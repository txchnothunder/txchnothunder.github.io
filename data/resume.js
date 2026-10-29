const RESUME = {
  name: "Ethan Lin Wong",
  tagline: "Master of Data Science student at UC Irvine, graduating December 2026",
  photo: "assets/photo.jpg",
  about: [
    "Hi! I’m Ethan, a Master’s student in Data Science at UC Irvine graduating in December 2026. At my core, I love taking messy, complex data and turning it into something clear, visual, and easy to understand, whether that’s an intuitive diagram, a clean plot, or a slide deck. Right now, I’m putting that into practice across two very different fields: deciphering rat brain signals in a neuroscience lab to see how memories are processed, and mapping out legacy VBA modeling systems at the California Air Resources Board.",
    "While I’m really interested in cognitive science, healthcare, and a lot of AI and ML stuff, I’d love to expand and diversify my portfolio to challenge myself with new areas and problems. Outside of work, you can usually find me playing D&D with friends or diving into Nintendo games that I'm hooked on. Right now, I'm playing Fire Emblem: Three Houses!",
    "I’m always up to connect! Feel free to reach out anytime if you'd like to talk about what I've worked on, discuss open roles, share project ideas, or just chat."
  ],
  links: [
    { label: "Resume (PDF)", href: "assets/resume.pdf" },
    { label: "Email", href: "mailto:ethanlw1@uci.edu" },
    { label: "GitHub", href: "https://github.com/txchnothunder" },
    { label: "Website", href: "https://txchnothunder.github.io" }
  ],
  experience: [
    {
      title: "Emission Modeling Intern",
      org: "California Air Resources Board, Air Quality Planning and Science Division",
      dates: "Sept. 2026 -- Present",
      bullets: [
        "Designed system architecture diagrams and code-flow models tracing airport operational inputs (flight volumes, APU usage) to daily fuel consumption (gallons/day) and criteria pollutant emissions (NOx, VOC, CO, PM2.5, PM10, CO2).",
        "Refactored legacy VBA emission models into modular Python data pipelines, processing non-military, military, and agricultural inventories into standardized datasets supporting CARB's CEPAM projection system.",
        "Developed interactive web-based reporting tools (HTML/JS) and automated build scripts to dynamically visualize sector-specific emission profiles and support internal data review."
      ]
    },
    {
      title: "Research Assistant",
      org: "Fortin Lab, University of California, Irvine",
      dates: "July 2026 -- Present",
      bullets: [
        "Built interpretable models in R (logistic regression on frequency-band features) that predict from rat hippocampal LFP recordings whether an odor sequence was in order, reaching 73% mean balanced accuracy across 5 rats.",
        "Implemented Meta-Fusion multimodal architectures to fuse single unit spike trains and LFP time series data, analyzing cross-modality neural feature dynamics and classification performance."
      ]
    },
    {
      title: "Statistics Tutor",
      org: "Pasadena City College",
      dates: "Sept. 2022 -- Aug. 2023",
      bullets: [
        "Guided students through model diagnostics, regression assumptions, and parameter estimation techniques to build strong foundational skills in data modeling and quantitative analysis."
      ]
    }
  ],
  projects: [
    {
      title: "Stock Directional Forecasting",
      dates: "Feb. 2026 -- Mar. 2026",
      bullets: [
        "Engineered 20 features (RSI, MACD, rolling volatility) from 10 years of OHLCV data to evaluate signal-to-noise ratios across ARIMA, Logistic Regression, and Random Forest models.",
        "Built a Soft Voting Ensemble in R achieving 57.3% precision, beating random-walk directional baselines by 14.6%."
      ]
    },
    {
      title: "Rubik's Cube Reinforcement Learning Solver",
      dates: "Nov. 2025 -- Dec. 2025",
      bullets: [
        "Modeled 3x3x3 and 2x2x2 Rubik's Cube environments as Markov Decision Processes (MDPs) across 4.3 × 10^19 states, implementing Policy Iteration in Python with dense sticker-matching reward shaping.",
        "Constructed a non-learning HybridSolver combining greedy hill-climbing, macro-based move applications, and stochastic exploration, achieving up to an 80% solve rate on short scrambles."
      ]
    },
    {
      title: "Wildfire Smoke Dispersion Modeling (2025 ICS Project Expo)",
      dates: "Jan. 2025 -- May 2025",
      bullets: [
        "Architected a spatial-temporal ETL pipeline in Python (GeoPandas, Shapely) and PostgreSQL/PostGIS, querying NOAA satellite data to match fire origins with smoke plumes via spatial buffers and temporal joins.",
        "Integrated Open-Meteo API weather streams to construct environmental feature arrays, training XGBoost regressors (R^2 = 0.45) with SHAP analysis to identify top predictors of smoke spread."
      ]
    }
  ],
  education: [
    {
      degree: "Master of Data Science",
      school: "University of California, Irvine",
      dates: "Expected Dec. 2026",
      note: ""
    },
    {
      degree: "Bachelor of Science in Data Science",
      school: "University of California, Irvine",
      dates: "June 2025",
      note: ""
    }
  ],
  skills: [
    { label: "Machine Learning", items: "Deep Neural Networks (CNN, RNN), Reinforcement Learning, Supervised & Unsupervised Learning, Logistic Regression (GLM), Random Forest, XGBoost, Scikit-learn, Model Explainability (SHAP)" },
    { label: "Programming", items: "Python, R, SQL (PostgreSQL/PostGIS, MySQL), C++, Bash" },
    { label: "Libraries", items: "PyTorch, TensorFlow, Keras, NumPy, Pandas, GeoPandas, SciPy, Matplotlib, Seaborn, Plotly" },
    { label: "Data & Statistics", items: "Signal Processing (FFT), Cross-Validation, Time Series Analysis, Bayesian Inference, A/B Testing" },
    { label: "Tools", items: "Docker, Git/GitHub, Tableau, Jupyter Notebooks, LaTeX" }
  ]
};