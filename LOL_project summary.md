---
title: "League of Legends 15-Minute Comeback Analysis"
description: "A comprehensive data science lifecycle project analyzing professional LoL matches to identify team resilience factors."
date: "Summer 2025"
tags: ["Python", "Pandas", "Machine Learning", "Hypothesis Testing", "Data Cleaning", "Plotly"]
---

# League of Legends 15-Minute Comeback Analysis
**Course:** DSC80: Practice of Data Science (Summer 2025)  
**Links:** [Interactive Website](https://brightonliu-zz.github.io/league_of_legend_matches_analysis/) | [GitHub Repository](https://github.com/brightonliu-zz/league_of_legend_matches_analysis)

## 📌 Project Overview
In competitive esports, early-game deficits often dictate the final outcome. This project performs an end-to-end data science lifecycle analysis on **150,588 professional League of Legends matches** from the 2022 season. The core objective was to determine which player role (Top, Jungle, Mid, Bot, Support) is the most "forgiving"—meaning it sustains the highest team comeback probability when trailing in gold at the 15-minute mark.

## 🛠️ Data Pipeline & Exploratory Analysis
Handling a large-scale dataset (150,588 rows, 164 features) required rigorous data cleaning and validation:
* **Data Processing:** Filtered for valid games (length ≥ 900s) and focused on player-level granularity to isolate role-specific performance metrics (`golddiffat15`, `csdiffat15`).
* **Missingness Mechanism Analysis:** Discovered systematic missing data in the 15-minute timeline statistics. Conducted **Total Variation Distance (TVD) permutation tests** to evaluate missingness across different professional leagues and map sides. Successfully identified and handled Missing at Random (MAR) scenarios to ensure the dataset's integrity before modeling.

## 📊 Statistical Inference & Hypothesis Testing
To rigorously answer which role is most forgiving, I designed a controlled statistical framework:
* **Stratified Permutation Test:** Formulated a null hypothesis that the Support (SUP) role and non-SUP roles share the same comeback rate. To avoid confounding variables, the test was stratified across different deficit severity bins (mild to severe) and weighted by bin sizes.
* **Findings:** With 1,000 permutations, the test yielded a **p-value ≈ 0.001**, statistically validating that the Support role is the most resilient when behind at 15:00. In contrast, the Bottom (BOT) role was found to be the most fragile, while Top lane showed unique resilience strictly in severe deficit scenarios.

## 🤖 Predictive Modeling & Fairness Evaluation
Transitioned from inference to prediction by framing a Machine Learning classification task to forecast the final game outcome (`win=1`) purely from a 15-minute snapshot:
* **Baseline & Final Model:** Trained and evaluated multiple models, ultimately selecting a **Logistic Regression** model utilizing 15-minute gold and CS differences. The model achieved a robust **ROC AUC of ~0.73** on the test set. This approach was favored as it outperformed more complex baselines while maintaining high feature interpretability.
* **Model Fairness Check:** Conducted fairness evaluations to ensure the model did not suffer from geographical or starting-side bias. Executed a label permutation test on group tags (Blue vs. Red side), resulting in AUC(Blue)=0.626 and AUC(Red)=0.628. The resulting p-value of 0.933 confirmed **no evidence of side bias**, proving the model's reliability across different game environments.

## 💡 Key Takeaways
This project showcases a balanced application of the data science lifecycle: from handling complex missing data mechanisms and conducting rigorous statistical hypothesis testing, to building interpretable machine learning models and validating algorithmic fairness.