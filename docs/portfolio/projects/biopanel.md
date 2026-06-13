---
title: biopanel.io — AI-Powered Health Analytics Platform
description: Full-stack AI platform that extracts biomarkers from blood-test PDFs across any laboratory using LLMs — built and owned end-to-end by Andres Avila.
hide:
  - navigation
---

[:material-arrow-left: Case Studies](../index.md){ .back-link }

# biopanel.io — AI-Powered Health Analytics Platform

!!! abstract "Project Summary"
    **Project**: [biopanel.io](https://biopanel.io)  
    **Type**: Personal product — built and owned end-to-end  
    **Stack**: Python · FastAPI · Celery · Redis · PostgreSQL · Supabase · React 18 · TypeScript · Docker · LLMs  

    **What it does**: Extracts structured biomarker data from blood-test PDFs across any laboratory, language, or document layout — with zero hardcoded parsing rules. Users upload a lab report, the system normalizes all values, flags out-of-range markers, and renders an interactive health dashboard.

## The Problem

Blood test results come in hundreds of different PDF formats — different labs, different languages, different layouts, different reference ranges. Traditional extraction approaches require lab-specific parsing rules that break the moment a format changes.

The challenge: build a system that extracts biomarkers reliably from *any* PDF, without knowing the layout in advance, at production-grade reliability.

## Architecture & Approach

I designed an **asynchronous extraction pipeline** that treats each PDF as a structured extraction problem for a language model — not a pattern-matching problem.

```
PDF Upload → Celery Task → PDF Parser → LLM Extraction → Normalization → PostgreSQL
                                              ↓
                                    Multi-provider fallback
                                    GPT-4o → Claude Sonnet
```

Key architectural decisions:

- **Typed DAG via Celery + Redis**: each stage is an explicit async task with typed inputs/outputs — no silent failures
- **Multi-provider LLM fallback**: GPT-4o primary, Claude Sonnet as fallback — resilient to provider outages
- **Streaming via Server-Sent Events**: extraction results stream to the frontend as they arrive — no polling
- **pgvector for biomarker search**: normalized biomarkers stored with vector embeddings for semantic search
- **Zero hardcoded rules**: the LLM handles layout variability — the pipeline handles structure and validation

## Tech Stack

**Backend**

- FastAPI — async REST API with full OpenAPI docs
- Celery + Redis — async task queue with retry logic and typed DAG
- PostgreSQL + pgvector — persistence and vector search
- Supabase — auth and storage layer
- Alembic — database migrations
- Docker Compose — local development and deployment

**Frontend**

- React 18 + TypeScript — full type safety end-to-end
- Custom chart components for biomarker visualization
- Responsive mobile-first layout
- Real-time SSE for extraction progress

**AI / LLM**

- OpenAI GPT-4o — primary extraction model
- Anthropic Claude Sonnet — fallback model
- Custom prompt engineering for structured biomarker extraction
- LangChain for chain orchestration

## Results

- Extracts biomarkers from PDFs across **multiple labs, languages, and layouts** with no layout-specific configuration
- End-to-end extraction completes in **under 30 seconds** for a typical lab report
- **Multi-provider fallback** ensures availability when individual providers have outages
- Deployed as a public product at [biopanel.io](https://biopanel.io)

## What this demonstrates

This project exists to prove a specific capability: I can take an idea from zero to a production AI product — architecture, backend, frontend, deployment, and all. It's the most complete demonstration of my full-stack + AI engineering depth.

For data engineering clients: the same pipeline design patterns (async DAGs, typed stages, observability, fallback logic) are how I approach enterprise data workflows.

<div class="grid cards cta-full" style="margin-top: 3rem" markdown>

-   :material-calendar-check:{ .lg .middle } Interested in AI-powered data systems?

    ---

    Let's talk about what this kind of architecture could look like for your use case.

    [Book Intro Call :material-arrow-top-right:](https://calendly.com/andresavila){ .md-button .md-button--primary }

</div>
