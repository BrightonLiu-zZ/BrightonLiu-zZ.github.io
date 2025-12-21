---
layout: page
title: KataGo x LLM Explainable AI
description: Fine-tuning LLMs to explain Go strategies using serialized game states.
img: assets/img/katago_thumbnail.jpg # You need to add this image later
importance: 1
category: Research & Engineering
selected: true
---

**Role:** Project Lead | **Stack:** Python, Qwen2.5, Hugging Face, KataGo

[cite_start]As the Project Lead for this initiative, I am coordinating a team of 6 contributors to build an Explainable AI system for the game of Go[cite: 35, 40]. The goal is to fine-tune Large Language Models (LLMs) to provide natural language explanations for complex game situations.

**Key Technical Contributions:**
* **Custom GTP Proxy:** Wrote `my_gtp_proxy.py` to intercept Go Text Protocol (GTP) commands from Lizzie/KataGo. [cite_start]This allows us to serialize game states and KataGo's analysis into JSONL format in real-time[cite: 36].
* **Data Pipeline:** Designed a pipeline to parse SGF records and query KataGo-18B. [cite_start]We extract top-k candidate moves along with win-rates and score-leads to create a filtered dataset for reward signals[cite: 37].
* **LLM Fine-tuning:** Adapted Hugging Face scripts to fine-tune **Qwen2.5-7B-Instruct** using LORA/GRPO techniques. [cite_start]I also set up local inference prototyping using LM Studio[cite: 39].