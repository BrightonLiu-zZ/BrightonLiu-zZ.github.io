---
layout: page
title: Breaking Barriers Hackathon — Finalist
description: Real-time anomaly detection system deployed on AWS. Top 8 of 32 teams at AWS × Deloitte × AT&T.
img: assets/img/hackathon.png
importance: 4
category: Industry
selected: false
---

**Result:** Finalist — Top 8 of 32 Teams &nbsp;&middot;&nbsp; **Organizers:** AWS × Deloitte × AT&T &nbsp;&middot;&nbsp; **Stack:** Python, XGBoost, AWS Lambda, S3, Amazon Location Service &nbsp;&middot;&nbsp; **Year:** 2025

---

### Overview

Built a real-time crowd anomaly detection system for simulated tail-risk events (sudden crowd movements, stampede precursors) within a 24-hour hackathon. The system ingests LLM-generated synthetic event streams and surfaces anomalies on an interactive live map.

### Data Pipeline

- Implemented a **0.5–1s micro-batching pipeline** to efficiently process high-velocity LLM-generated synthetic data streams in near real-time.
- Engineered **lagged spatio-temporal features** via client-side sliding windows, enabling stateless backend processing with no session state required.

### Model

- Trained an **XGBoost classifier** for binary anomaly detection on a highly imbalanced dataset.
- Tuned classification thresholds via **PR AUC** (Precision-Recall AUC) to aggressively minimize False Negatives, prioritizing recall for tail-risk events where missed detections carry high cost.

### Deployment

- Deployed ultra-low latency model inference via **AWS Lambda** with end-to-end response time **<100ms**.
- Streamed anomaly triggers to an **S3-hosted dashboard** using **Amazon Location Service** and MapLibre for real-time geospatial visualization.
- Architecture is fully serverless and auto-scales with event volume.
