---
layout: about
title: about
permalink: /
subtitle: >
  ML Engineer & Quant Researcher &nbsp;·&nbsp; Astrophysics + Data Science @ UCSD &nbsp;·&nbsp;
  <a href="https://www.linkedin.com/in/zijun-brighton-liu-2b819b331" target="_blank">LinkedIn</a>

profile:
  align: right
  image: prof_pic.jpg
  image_circular: false
  more_info: >
    <p>San Diego, CA</p>
    <p><a href="mailto:liuzijun6688@gmail.com">liuzijun6688@gmail.com</a></p>
    <p>530-220-8681</p>

announcements:
  enabled: true
selected_projects: false
social: true  # Pulls from _data/socials.yml
---

I am an undergraduate at the **University of California, San Diego**, pursuing a B.S. in **Astrophysics** with a minor in **Data Science**. Before transferring to UCSD, I completed two years at **UC Davis** double-majoring in Physics and Data Science, graduating with a 3.84 GPA. At UCSD, I carry a 3.98 institutional GPA.

Currently, I am an **AI/ML Engineer Intern** at **XView LLC**, where I architect multi-agent LLM pipelines and engineer RAG systems for production grounding. Previously, I was an **AI/ML Quantitative Research Intern** at **Rothenberg Wealth Strategies**, building TCN-based probabilistic forecasting models and a three-stage signal pipeline over ~10M rows of market data. Prior to that, I interned at **Himiway Intelligent Technology** as a Data Science Intern, deploying XGBoost demand-forecasting models that accelerated executive decision cycles from four weeks to one week.

My background in astrophysics shaped one skill above all others: extracting weak signals from overwhelming noise. Processing million-row galaxy spectra trains a particular kind of skepticism — every pattern is a hypothesis until proven otherwise, out of sample. That same discipline carries into my ML and quant work: at Rothenberg, I built an 8-layer TCN for probabilistic quantile forecasting alongside a three-stage signal pipeline combining a Conv1D-VAE with a meta-learning gatekeeper over ~10M rows of US equity data.

As a 4D Go player and the lead developer of the **[KataGo × LLM](https://github.com/BrightonLiu-zZ/KataGo-LLM-Team)** project, I think about both ML systems and quantitative research through the lens of variance management. Modern Go AI teaches a profound lesson: optimize for the *probability* of winning, not the *margin* of victory — it actively sacrifices high-margin local gains to reduce global variance. I apply this same philosophy to model and strategy design, favoring lower absolute returns with minimal drawdown and high information ratios over brittle high-return configurations. In both Go and production ML, managing variance to survive to the next iteration is the ultimate edge.

I am also drawn to **world models** as a research area — the question of how an agent can compress its environment into an internal representation good enough that decision-making becomes almost trivial. What I find most compelling is how much the *right inductive bias* matters: a Transformer trained naively on planetary trajectories learns to curve-fit the ellipse, but restricting its attention to recent timesteps — encoding the Markov structure of Newtonian mechanics directly into the architecture — forces the model to learn the actual causal chain of force, acceleration, and velocity change. My physics background makes these architectural choices feel intuitive rather than arbitrary. I have been following the research trajectory from Ha & Schmidhuber's 2018 World Models paper through PlaNet and Dreamer, and I occasionally write about these ideas on LinkedIn ([post 1](https://www.linkedin.com/feed/update/urn:li:activity:7457289231271383040/), [post 2](https://www.linkedin.com/feed/update/urn:li:activity:7451473623623684096/)).

If you are looking for an engineer who builds robust ML systems while thinking carefully about what the models actually prove, **[get in touch](mailto:liuzijun6688@gmail.com)**.