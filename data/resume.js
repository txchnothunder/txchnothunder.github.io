const RESUME = {
  name: "Ethan Wong",
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
    },
    {
      degree: "Associate of Art in Engineering and Technology",
      school: "Pasadena City College",
      dates: "May 2023",
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
