---
layout: page
title: KataGo × LLM — Explainable Go AI
description: Fine-tuning LLMs with RL to explain Go strategies using KataGo's superhuman analysis.
img: assets/img/katago_llm.png
importance: 1
category: ML Engineering
selected: true
---

**Role:** Project Lead &nbsp;&middot;&nbsp; **Stack:** Python, C++, Qwen2.5-7B, Hugging Face TRL, KataGo &nbsp;&middot;&nbsp; **Year:** 2025 – Present

<a href="https://github.com/BrightonLiu-zZ/KataGo-LLM-Team" target="_blank" class="btn btn-sm z-depth-0" role="button" style="font-size:0.85rem;">GitHub &rarr;</a>

---

### Motivation

Traditional Go AI like KataGo is opaque: it outputs top-k moves with win-rate estimates but cannot explain *why* a move fits the global context of the game. Beginners and intermediate players receive no transferable insight. This project fine-tunes a large language model to translate KataGo's raw policy and value signals into human-interpretable strategic reasoning.

### Technical Approach

**Fine-tuning Pipeline**
- Fine-tuned **Qwen2.5-7B-Instruct** using **Hugging Face TRL (GRPOTrainer)** reinforcement learning framework.
- Applied **4-bit quantization** to significantly reduce memory footprint and accelerate inference speed for local and edge deployment constraints.

**Reward Mechanism**
- Reward signal derived from KataGo's **Policy Value (Prior Probability)**, **ScoreLead**, and **Winrate deltas**.
- Introduced strict penalty terms to constrain the action space: suppressing illegal moves, hallucinations, and format noise.
- Result: **~90% reduction in invalid actions** across evaluation games.

**C++ GTP Proxy**
- Engineered a **C++ Go Text Protocol (GTP) proxy** for interactive model serving, intercepting GTP commands from Lizzie/KataGo.
- Serializes live game states and KataGo's analysis for real-time inference.
- Performance improvement: model elevated from **10k to 5k rating** against human players.

---

<a id="demo-video"></a>
### Demo: Lizzie 棋盘上自动落子

{% include video.liquid path="assets/video/katago_lizzie_demo.mp4" width="100%" controls=true caption="Lizzie 棋盘上自动落子 — 与模型对弈演示" %}
