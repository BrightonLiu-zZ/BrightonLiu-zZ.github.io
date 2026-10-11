---
layout: page
title: Self-Supervised Learning on Stellar Light Curves
description: First-author paper, ML4PS @ NeurIPS 2026. A self-supervised encoder pre-trained on unlabelled TESS light curves adds to engineered features on 7 of 10 tasks.
img: assets/img/stellar-ssl.jpg
importance: 1
category: Research
selected: true
---

**Role:** First author, with Y. Ma and Prof. C. Theissen (UC San Diego) &nbsp;&middot;&nbsp; **Stack:** Python, PyTorch, scikit-learn, Weights & Biases &nbsp;&middot;&nbsp; **Year:** 2026 – Present

**Paper:** *What does self-supervision add to engineered features for stellar light curves?* — accepted at the Machine Learning and the Physical Sciences (ML4PS) workshop @ NeurIPS 2026.

<a href="https://github.com/BrightonLiu-zZ/stellar-ssl" target="_blank" class="btn btn-sm z-depth-0" role="button" style="font-size:0.85rem;">GitHub &rarr;</a>

---

### Question

The TESS space telescope produces far more stellar light curves than anyone can label by hand. Astronomers already have a few dozen hand-engineered features for them, and those features remain a strong baseline. Earlier work trained encoders on light curves and judged them on their own scores, but did not ask what they **add** to the features astronomers already use. That is the question this project answers.

### Method

- **Self-supervised pre-training:** a convolutional encoder trained on unlabelled TESS light curves to predict each window's latent representation from its neighbours (GRU latent prediction, PyTorch).
- **Frozen evaluation:** the encoder is frozen; its embedding is concatenated with **25 engineered features** and read out with one fixed **linear probe** on **10 downstream tasks** (variability classes, oscillation targets, rotation period).
- **Controls:** the same probe on the engineered features alone, on the embedding alone, on an *untrained* encoder, and two networks trained end-to-end on the same labelled stars (a Conv1D and an MLP).
- **Statistics:** multi-seed runs with bootstrap confidence intervals, tracked in Weights & Biases.

### Result

- Adding the learned features improves the linear probe on **7 of 10 tasks** over the engineered features alone; an untrained encoder does not.
- The combination also **beats both end-to-end networks** on most tasks.
- Takeaway: an encoder trained without labels gives astronomers features that **complement** the ones they already use, rather than replace them.

{% include figure.liquid loading="eager" path="assets/img/stellar-ssl-fig1.png" class="img-fluid rounded z-depth-1" zoomable=true caption="Paper Figure 1. (a) Gain from adding the learned features to the engineered features, linear readout (solid) and XGBoost readout (faded). (b) The fused probe against two networks trained end-to-end. Bars are 2 SE." %}
