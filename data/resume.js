const RESUME = {
  name: "Ethan Wong",
  tagline: "Master of Data Science student at UC Irvine, graduating December 2026",
  photo: "assets/photo.jpg",
  about: [
    "I'm a Master of Data Science student at UC Irvine, graduating in December 2026. My background is in data analysis, statistics, and machine learning, and my projects range from stock forecasting and wildfire smoke modeling to models of neural recordings.",
    "Right now I'm most interested in neuroscience and medicine, where machine learning can help answer real questions about how the brain works. I enjoy turning results into slides and figures that people outside the field can follow, and I'm curious about a lot of other areas too, so I'm always happy to try something new.",
    "Outside of work, I play a lot of D&D and Nintendo games."
  ],
  links: [
    { label: "Resume (PDF)", href: "assets/resume.pdf" },
    { label: "Email", href: "mailto:ethanlw1@uci.edu" },
    { label: "GitHub", href: "https://github.com/txchnothunder" }
  ],
  experience: [
    {
      title: "Emission Modeling Intern",
      org: "California Air Resources Board, Air Quality Planning and Science Division",
      dates: "Sept 2026 to Present",
      bullets: [
        "Documenting an internal VBA-based modeling system to support a potential migration to Python",
        "Building UML and database diagrams, with overviews for leadership and variable-level detail for engineers"
      ]
    },
    {
      title: "Research Assistant",
      org: "Fortin Lab, University of California, Irvine",
      dates: "July 2026 to Present",
      bullets: [
        "Built interpretable models that predict from rat hippocampal LFP recordings whether an odor sequence was in order, reaching 73% mean balanced accuracy across 5 rats",
        "Decoded which of 5 odors a rat was sniffing at 52% mean balanced accuracy against a 20% chance level",
        "Developed a sliding-window analysis of the GLM coefficients showing when each frequency band drives predictions",
        "Presented findings to lab members and faculty, with weekly progress updates to a postdoctoral supervisor"
      ]
    },
    {
      title: "Statistics Tutor",
      org: "Pasadena City College",
      dates: "Sept 2022 to Aug 2023",
      bullets: [
        "Delivered 500+ hours of remote one-on-one instruction in introductory and intermediate statistics"
      ]
    }
  ],
  education: [
    {
      degree: "Master of Data Science",
      school: "University of California, Irvine",
      dates: "Expected Dec 2026",
      note: "Coursework: Artificial Intelligence, Machine Learning and Data Mining, Generative Models, Bayesian Data Analysis, Statistical Methods I and II, Algorithms for Data Science, Databases"
    },
    {
      degree: "Bachelor of Science in Data Science",
      school: "University of California, Irvine",
      dates: "June 2025",
      note: ""
    }
  ],
  skills: [
    { label: "Machine Learning", items: "Deep Neural Networks (CNN, RNN), Reinforcement Learning, Supervised and Unsupervised Learning, Logistic Regression (GLM), Random Forest, XGBoost, Scikit-learn, SHAP" },
    { label: "Programming", items: "Python, C++, R, SQL (PostgreSQL/PostGIS, MySQL), Bash" },
    { label: "Libraries", items: "PyTorch, TensorFlow, Keras, NumPy, Pandas, GeoPandas, SciPy, Matplotlib, Seaborn, Plotly" },
    { label: "Data and Statistics", items: "Signal Processing (FFT), Cross-Validation, Time-Series Analysis, Bayesian Inference, A/B Testing" },
    { label: "Tools", items: "Docker, Git/GitHub, Tableau, Jupyter Notebooks, LaTeX" }
  ]
};
