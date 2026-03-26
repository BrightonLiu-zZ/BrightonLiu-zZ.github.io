---
layout: page
title: KataGo × LLM — Explainable Go AI
description: Fine-tuning LLMs with RL to explain Go strategies using KataGo's superhuman analysis.
img: assets/img/katago_llm.png
importance: 1
category: ML Engineering
selected: true
---

**Role:** Project Lead &nbsp;&middot;&nbsp; **Stack:** Python, C++, Qwen3-8B, Hugging Face TRL, GRPO, KataGo &nbsp;&middot;&nbsp; **Year:** 2025 – Present

<a href="https://github.com/BrightonLiu-zZ/KataGo-LLM-Team" target="_blank" class="btn btn-sm z-depth-0" role="button" style="font-size:0.85rem;">GitHub &rarr;</a>

---

### Motivation

Traditional Go AI like KataGo is opaque: it outputs top-k moves with win-rate estimates but cannot explain *why* a move fits the global context of the game. Beginners and intermediate players receive no transferable insight. This project fine-tunes a large language model to translate KataGo's raw policy and value signals into human-interpretable strategic reasoning, elevating bot strength from a 10k baseline to **~7k** in real-world testing.

### Technical Approach

**RLAIF Fine-tuning Pipeline**
- Fine-tuned **Qwen3-8B** via **GRPO** using Hugging Face TRL on a **113k-row dataset** of KataGo-annotated game positions.
- Applied **4-bit GGUF quantization** for edge deployment on 8GB VRAM, achieving **~42.5 tok/sec** throughput and **0.52s TTFT**.
- Engineered a **regime-switching RL** reward, adaptively overweighting rank-based signals in high-uncertainty states (win-rate ~0.5) and policy priors in deterministic positions to optimize risk-adjusted decision making.

**Reward Hacking Mitigation**
- Resolved severe reward hacking across the 113k-row dataset by implementing a strict **-0.5 format-validation penalty gate** to enforce output legality before any score-based reward is applied.
- Dynamically scaled policy/score-lead weights for lopsided positions (downsampling low-information data), eliminating the model's incentive to exploit imbalanced game states.

**C++ GTP Proxy**
- Engineered a **zero-network-overhead C++ Go Text Protocol (GTP) proxy** bridging the Lizzie GUI with the local LLM, intercepting GTP commands with no additional latency.
- Serializes live game states and KataGo's analysis in real time, enabling sub-second move rationale generation during live play.

---

<a id="demo-video"></a>
### Demo: Auto-play on Lizzie 

{% include video.liquid path="assets/video/katago_lizzie_demo.mp4" width="100%" controls=true caption="Auto-play on Lizzie: Human vs. Model Gameplay" %}
