---
layout: project
title: "Real-Time IVR & Telephony Flow Engine"
slug: telephony-ivr-platform
category: "Telephony & Backend"
date: 2025-02-05
featured: true
order: 2
status: "Production Ready"
github: "https://github.com/vishwas2628"
demo: ""
tech_stack:
  - "Asterisk PBX"
  - "Node.js"
  - "Express.js"
  - "WebSockets"
  - "PostgreSQL"
  - "Python"
summary: "High-capacity Interactive Voice Response (IVR) engine and live call telemetry platform engineered with Asterisk PBX, Node.js event listeners, and WebSocket streaming."
---

## 🎯 Overview

Modern customer communications require dynamic, low-latency Interactive Voice Response (IVR) trees that adapt in real time to user inputs, agent availability, and business logic.

This project delivers a **scalable Asterisk-driven telephony engine** paired with a **Node.js/Express event dispatcher** and **WebSocket telemetry pipeline**, allowing operators to monitor live concurrent calls, inspect DTMF choices, and trigger automated routing dynamically.

---

## 🏗️ Architecture Flow

```
[ Inbound SIP Call ] 
        │
        ▼
[ Asterisk PBX Core ] ─── (AMI / FastAGI) ───► [ Node.js Telephony Gateway ]
        │                                                  │
        │                                                  ▼
        │ (Audio Stream / DTMF)                [ Event Processing Engine ]
        │                                                  │
        │                                    ┌─────────────┴─────────────┐
        ▼                                    ▼                           ▼
[ Dynamic Voice Tree ]             [ PostgreSQL / CDR Logs ]    [ WebSocket Stream ]
                                                                         │
                                                                         ▼
                                                                [ Live Web Dashboard ]
```

---

## 🚀 Key Highlights

* **Dynamic Dialplan Logic**: Modular Asterisk dialplans and FastAGI handlers evaluating incoming caller ID and account status to render personalized audio menus.
* **Real-time AMI Event Streaming**: Node.js listener consuming Asterisk Manager Interface (AMI) events (`Newchannel`, `Hangup`, `DTMF`, `Bridge`) to track call states in milliseconds.
* **Low-Latency Telemetry**: WebSocket server pushing live call metrics, queue depths, and duration stats directly to frontend interfaces.
* **CDR & Analytics Ingestion**: Persistent Call Detail Records (CDR) stored in PostgreSQL with indexed metrics for duration, hangup cause codes, and route efficiency.

---

## 💡 Engineering Insights

* **Handling FastAGI Concurrency**: Optimized Node.js worker pools to manage simultaneous AGI socket requests without blocking event loop cycles.
* **Graceful Degradation**: Configured fallback audio prompts and default routing queues if external database or microservice lookups experience timeouts.
