---
layout: page
title: DSC80 — League of Legends 15-Minute Comeback Analysis
description: An end-to-end data science lifecycle project analyzing 150k+ professional LoL matches using hypothesis testing and logistic regression to predict comeback probabilities.
img: assets/img/league-of-legends-pc-game-cover.png
importance: 99
category: Course Projects
selected: false
hidden: true
---

**Course:** DSC 80 – Practice of Data Science, UC San Diego &nbsp;&middot;&nbsp; **Stack:** Python, Pandas, Plotly, Scikit-learn &nbsp;&middot;&nbsp; **Year:** Summer 2025

<a href="https://github.com/brightonliu-zz/league_of_legend_matches_analysis" target="_blank" class="btn btn-sm z-depth-0" role="button" style="font-size:0.85rem;">GitHub &rarr;</a>
<a href="https://brightonliu-zz.github.io/league_of_legend_matches_analysis/" target="_blank" class="btn btn-sm z-depth-0" role="button" style="font-size:0.85rem;">Live Demo &rarr;</a>

---

### Overview

An end-to-end data science lifecycle analysis on **150,588 professional League of Legends matches** from the 2022 season. The core question: which player role — Top, Jungle, Mid, Bot, or Support — is most "forgiving" when a team is trailing in gold at the 15-minute mark? The project moves through rigorous data cleaning, statistical hypothesis testing, machine learning classification, and fairness evaluation to answer this with evidence.

### Data Pipeline & Exploratory Analysis

- **Data Processing:** Filtered 150,588 rows (164 features) for valid games (length ≥ 900s) and focused on player-level granularity to isolate role-specific metrics (`golddiffat15`, `csdiffat15`).
- **Missingness Mechanism Analysis:** Discovered systematic missing data in 15-minute timeline statistics. Applied **Total Variation Distance (TVD) permutation tests** across professional leagues and map sides to classify missingness as Missing at Random (MAR), enabling principled handling before modeling.

### Statistical Inference & Hypothesis Testing

- **Stratified Permutation Test:** Formulated a null hypothesis that the Support (SUP) role and non-SUP roles share the same comeback rate. Stratified the test across deficit severity bins (mild to severe) and weighted by bin size to remove confounding from deficit depth.
- **Findings:** Across 1,000 permutations the test yielded **p ≈ 0.001**, statistically confirming that the Support role is the most resilient position when behind at 15:00. The Bottom (BOT) role was the most fragile; Top lane showed unique resilience specifically in severe deficit scenarios.

### Predictive Modeling & Fairness Evaluation

- **Baseline & Final Model:** Trained and evaluated multiple classifiers, selecting a **Logistic Regression** model on 15-minute gold and CS differences. Achieved **ROC AUC ≈ 0.73** on the test set — outperforming more complex baselines while retaining interpretability.
- **Fairness Check:** Ran a label permutation test on Blue vs. Red side groups. AUC(Blue) = 0.626, AUC(Red) = 0.628, p-value = 0.933 — **no evidence of side bias**, confirming the model generalizes reliably across game environments.
