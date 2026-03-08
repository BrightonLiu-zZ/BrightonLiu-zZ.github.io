---
layout: page
title: PHY199 — Galaxy Spectra PCA Pipeline
description: Automated high-dimensional spectra preprocessing and unsupervised PCA outlier filtering with Prof. Wittman at UC Davis.
img: assets/img/galaxy_spectra.png
importance: 3
category: Research
selected: true
---

**Role:** Student Researcher &nbsp;&middot;&nbsp; **Advisor:** Prof. Wittman, UC Davis &nbsp;&middot;&nbsp; **Stack:** Python, R, Scikit-learn (PCA) &nbsp;&middot;&nbsp; **Year:** 2025

---

### Overview

Working under Professor Wittman at UC Davis, I built a fully reproducible pipeline to analyze a high-dimensional astronomical dataset comprising **2,300+ galaxy spectra**. The project addressed the practical data quality challenges that precede any downstream analysis — artifact removal, normalization, and systematic outlier detection.

### Pipeline

**Preprocessing**
- Developed an automated Python/R preprocessing pipeline to clean flux measurements across thousands of wavelength bins.
- Applied **custom unsharp masking** to resolve normalization artifacts and anomalous flux spikes, carefully avoiding division artifacts during the masking step.
- Handled missing values and flagged spectra with known instrumental issues.

**Dimensionality Reduction & Outlier Filtering**
- Designed an unsupervised ML framework using **scikit-learn PCA** for automated outlier detection, eliminating the need for manual inspection of thousands of spectra.
- Extracted and physically interpreted **PC1–PC3**: the principal components correspond to known spectral features (continuum slope, emission line strength, Balmer break depth), making the pipeline auditable and scientifically meaningful.
- Produced 2D and 3D cluster visualizations to identify spectral sub-populations.

**Deliverables**
- Packaged the full workflow into a **reproducible Python/R codebase** with automated visualization generation.
- Delivered advisor-facing reports translating complex high-dimensional signals into actionable scientific insights.
