// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of projects in ML engineering and astrophysics.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Zijun Liu — AI/ML Engineering &amp; Quantitative Research. &amp;nbsp; Download: AI/ML Resume &amp;nbsp;&amp;middot;&amp;nbsp; Quant Research Resume",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-started-a-new-role-as-a-data-science-intern-at-himiway-intelligent-technology",
          title: 'Started a new role as a Data Science Intern at Himiway Intelligent Technology....',
          description: "",
          section: "News",},{id: "news-started-a-new-role-as-an-ai-ml-quantitative-research-intern-at-rothenberg-wealth-strategies-working-on-model-evaluation-pipelines-and-feature-engineering-for-production-quant-research",
          title: 'Started a new role as an AI/ML Quantitative Research Intern at Rothenberg Wealth...',
          description: "",
          section: "News",},{id: "projects-katago-llm-explainable-go-ai",
          title: 'KataGo × LLM — Explainable Go AI',
          description: "Fine-tuning LLMs with RL to explain Go strategies using KataGo&#39;s superhuman analysis.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_katago_llm/";
            },},{id: "projects-phy199-galaxy-spectra-pca-pipeline",
          title: 'PHY199 — Galaxy Spectra PCA Pipeline',
          description: "Automated high-dimensional spectra preprocessing and unsupervised PCA outlier filtering with Prof. Wittman at UC Davis.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_galaxy_spectra/";
            },},{id: "projects-breaking-barriers-hackathon",
          title: 'Breaking Barriers Hackathon',
          description: "Real-time anomaly detection system deployed on AWS. Top 8 of 32 teams at AWS × Deloitte × AT&amp;T.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_hackathon/";
            },},{id: "projects-astr199-stellar-parameter-prediction-via-deep-learning",
          title: 'ASTR199 — Stellar Parameter Prediction via Deep Learning',
          description: "Multi-target MLP regression on 1M+ row multi-survey astronomical catalog, with LoRA fine-tuning for M-dwarf sub-populations.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_astr199/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6C%69%75%7A%69%6A%75%6E%36%36%38%38@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/BrightonLiu-zZ", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/brighton-liu-2b819b331", "_blank");
        },
      },{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/resume_aiml.pdf", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
