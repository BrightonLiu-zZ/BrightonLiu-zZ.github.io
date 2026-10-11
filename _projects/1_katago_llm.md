---
layout: page
title: KataGo × LLM — LLM Post-Training & Edge Deployment
description: Post-trained Qwen3-8B (SFT → GRPO) to play 9×9 Go and explain its moves; 4-bit edge deployment and multi-LoRA vLLM serving.
img: assets/img/katago_llm.png
importance: 2
category: ML Engineering
selected: true
---

**Role:** Project Lead, volunteer team &nbsp;&middot;&nbsp; **Stack:** Python, C++, PyTorch, Qwen3-8B, Hugging Face TRL, LoRA, vLLM, llama.cpp, Docker &nbsp;&middot;&nbsp; **Year:** 2025 – Present

<a href="https://github.com/BrightonLiu-zZ/KataGo-LLM-Team" target="_blank" class="btn btn-sm z-depth-0" role="button" style="font-size:0.85rem;">GitHub &rarr;</a>
<a href="#demo-video" class="btn btn-sm z-depth-0" role="button" style="font-size:0.85rem;">Demo &darr;</a>

---

### Motivation

Go engines like KataGo are superhuman but opaque: they output candidate moves with win-rate estimates, not reasons a player can learn from. This project post-trains a large language model to play 9×9 Go and **explain its moves**, by distilling the KataGo engine into it.

### Post-Training

- Post-trained **Qwen3-8B** with **LoRA** in **Hugging Face TRL** (vLLM rollouts, Dockerized training).
- Ran **GRPO** first, then a curriculum of **rules-SFT → play-SFT → GRPO** on **302k engine-verified examples**.
- Result: the model's first wins against a classical Go engine, with **zero illegal moves**.

### Evaluation & Training Stability

- Built the evaluation: a **board-perception probe** (does the model read the board correctly?), **top-k agreement** with KataGo, and a **refereed engine ladder**.
- Removed **reward hacking** with a format-validation penalty applied before any score-based reward, and down-weighted lopsided positions that carried little learning signal.
- Countered **entropy collapse** with **DAPO clip-higher** plus adaptive entropy control.
- Added a 30-minute pre-flight check before every multi-day training run.

### Deployment & Serving

- Deployed the model **4-bit (GGUF, llama.cpp)** on an **8 GB-VRAM** GPU: **~42.5 tok/s**, **0.52 s** time-to-first-token.
- Wrote a **C++ GTP proxy** that connects the Lizzie Go GUI to the local model, passing live game state and KataGo analysis to it during play.
- Served the base model + **2 LoRA adapters from one vLLM instance**, running 3 bots live on the OGS online Go server.

---

<a id="demo-video"></a>
### Demo: Auto-play on Lizzie

{% include video.liquid path="assets/video/lmstudio_lizzie_qwen3-8b-go.mp4" width="100%" controls=true caption="Auto-play on Lizzie: Human vs. Model Gameplay" %}
