---
title: Hershey's — $750K Pipeline Automation & ETL Modernization
description: Led data engineering modernization at Hershey's Mexico Reporting CoE — saving 2,000+ hours annually and eliminating $750K in vendor costs through Azure and Databricks automation.
hide:
  - navigation
---

[:material-arrow-left: Case Studies](../index.md){ .back-link }

# Hershey's — Pipeline Automation & ETL Modernization

!!! abstract "Case Study Summary"
    **Client**: The Hershey Company — Mexico Reporting Center of Excellence  
    **Role**: Data Engineer & Reporting CoE Analyst  
    **Period**: Jun 2021 – Apr 2024  
    **Stack**: Azure Data Factory · Databricks · PySpark · Power BI · Azure Synapse · Blob Storage  

    **Impact**:

    - **$750K USD** in recurring vendor costs eliminated
    - **2,000+ hours** of manual work automated annually
    - **100+ legacy reports** migrated from third-party vendor to Power BI
    - **35%** improvement in pipeline reliability and runtime efficiency
    - Nominated at HSY Awards Mexico for contributions to the Mexico reporting initiative

## Context

Hershey's Mexico Reporting CoE operated a reporting infrastructure heavily dependent on a third-party vendor — expensive, slow to change, and difficult to maintain internally. The data team relied on manual ETL processes that consumed thousands of hours per year, and reporting pipelines were fragile with no observability.

My mandate: modernize the full data stack, reduce vendor dependency, and build infrastructure the team could own and maintain.

## What I built

### ETL Pipeline Automation

Designed and implemented automated ETL pipelines across the full data lifecycle using **Azure Data Factory** and **Databricks with PySpark**. This replaced manual data processing workflows that previously required 2,000+ hours of analyst time annually.

The pipeline architecture covered:

- Financial datasets ingestion and normalization
- Sales and macroeconomic data integration
- Automated transformation and validation layers
- Delta Lake storage with partitioning for query performance

### Vendor Migration — 100+ Reports

Led the migration of **100+ legacy reports** from the third-party vendor to Power BI — eliminating the recurring vendor contract entirely. Each migration included:

- Reverse-engineering the existing report logic
- Rebuilding the supporting ETL in Azure Data Factory
- Validating output parity against the original reports
- Handing off to the analytics team with documentation

This project alone eliminated **$750K USD** in annual vendor costs.

### Data Products for Analytics & Data Science

Delivered end-to-end data products integrating financial, sales, and macroeconomic datasets used by both analytics and data science teams. These products went from requirement gathering through deployment — including Power BI dashboards, semantic models, and the underlying pipeline infrastructure.

### Pipeline Optimization

Diagnosed and resolved reliability issues across regional reporting pipelines, achieving a **35% improvement** in pipeline runtime efficiency and significantly reducing failure rates.

## Tech Stack

- **Orchestration**: Azure Data Factory
- **Transformation**: Databricks (PySpark), Azure Synapse Analytics
- **Storage**: Azure Blob Storage / ADLS Gen2, Delta Lake
- **Visualization**: Power BI (DAX, semantic modeling)
- **Languages**: Python, PySpark, SQL, DAX
- **CI/CD**: Azure DevOps

## Key outcomes

| Metric | Result |
|---|---|
| Vendor cost reduction | $750,000 USD/year |
| Manual hours automated | 2,000+ hours/year |
| Legacy reports migrated | 100+ |
| Pipeline runtime improvement | 35% |
| Award recognition | HSY Awards Mexico nomination |

<div class="grid cards cta-full" style="margin-top: 3rem" markdown>

-   :material-calendar-check:{ .lg .middle } Similar challenges in your organization?

    ---

    Whether it's vendor dependency, manual ETL, or brittle reporting infrastructure — I've solved these problems at scale. Let's talk.

    [Book Intro Call :material-arrow-top-right:](https://calendly.com/andresavila){ .md-button .md-button--primary }

</div>
