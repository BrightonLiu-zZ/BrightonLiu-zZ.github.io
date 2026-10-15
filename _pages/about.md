---
layout: about
title: about
permalink: /
subtitle: >
  ML Engineering &amp; ML Research &nbsp;·&nbsp; Astrophysics + Data Science @ UCSD &nbsp;·&nbsp;
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
selected_papers: true
selected_projects: false
social: true  # Pulls from _data/socials.yml
---

I'm Brighton, a senior at **UC San Diego** studying **Astrophysics** with a minor in **Data Science**. I train and ship models end to end: self-supervised sequence models, LLM post-training, and production ML services.

**Seeking a Summer 2027 ML internship** — sequence models · LLM post-training · production ML.
<br><span class="text-muted">Applying to M.S. programs in CS / ML for Fall 2027; available Jun – Sep 2027.</span>

<a href="{{ '/assets/pdf/resume_ml_engineering.pdf' | relative_url }}" target="_blank" class="btn btn-sm z-depth-0" role="button" style="font-size:0.85rem; border:1px solid var(--global-theme-color);">Resume — ML Engineering</a>
<a href="{{ '/assets/pdf/resume_research.pdf' | relative_url }}" target="_blank" class="btn btn-sm z-depth-0" role="button" style="font-size:0.85rem; border:1px solid var(--global-theme-color);">Resume — Research</a>

### Highlights

- **First-author paper, ML4PS workshop @ NeurIPS 2026** — a self-supervised encoder pre-trained on unlabelled TESS light curves adds to engineered features on 7 of 10 tasks. [arXiv](https://arxiv.org/abs/2610.14283) · [Project](/projects/0_stellar_ssl/) · [Code](https://github.com/BrightonLiu-zZ/stellar-ssl)
- **KataGo × LLM (project lead)** — post-trained Qwen3-8B with SFT → GRPO on 302k engine-verified examples; runs 4-bit on an 8 GB GPU and serves base + 2 LoRA adapters from one vLLM instance. [Demo](/projects/1_katago_llm/#demo-video) · [Code](https://github.com/BrightonLiu-zZ/KataGo-LLM-Team)
- **ML Research Intern, Rothenberg Wealth Strategies** — trained a LightGBM model and deployed it as an unattended production service; built a multi-worker experiment runner (1,000+ runs per sweep).

### Selected projects

<div class="projects">
  <div class="row row-cols-1 row-cols-md-2">
    {% assign featured = site.projects | where: "selected", true | sort: "importance" %}
    {% for project in featured limit: 2 %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
</div>

### Research interests

- **Self-supervised representations of sequences** — what an encoder trained without labels adds to the features domain experts already use.
- **World models and inductive bias** — how architecture choices (e.g. restricting attention to recent timesteps) push a model to learn the dynamics rather than curve-fit them. I occasionally write about this on LinkedIn ([post 1](https://www.linkedin.com/feed/update/urn:li:activity:7457289231271383040/), [post 2](https://www.linkedin.com/feed/update/urn:li:activity:7451473623623684096/)).
- **LLM post-training and evaluation** — reward design, reward hacking, and evaluations that show what a model actually learned.

Questions or opportunities: **[get in touch](mailto:liuzijun6688@gmail.com)**.
