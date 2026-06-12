---
title: EY / Microsoft — Financial Pipeline Optimization (67% Runtime Reduction)
description: Reduced runtime of two critical Microsoft BizApps financial pipelines by 67% on Azure Fabric — from 12 hours combined to 4 hours — by diagnosing hidden failures and redesigning execution logic.
---

# EY / Microsoft — Financial Pipeline Optimization

!!! abstract "Case Study Summary"
    **Client**: Microsoft (via EY GDS) — BizApps Financial Data Platform  
    **Role**: Senior Data Engineer  
    **Period**: Sep 2025 – Present  
    **Stack**: Azure Fabric · PySpark · Azure DevOps · Python  

    **Impact**:

    - **67% runtime reduction** across two critical financial pipelines
    - TenantTPIDMapping: **4.5h → 1.5h** (−67%)
    - Complete Revenue: **7.5h → 2.5h** (−67%)
    - Reusable observability framework deployed across data workflows
    - Production pipelines serving distributed Microsoft business teams worldwide

## Context

The Microsoft BizApps Financial Data Platform processes large-scale enterprise financial data used by business teams globally. Two of its most critical pipelines — TenantTPIDMapping and Complete Revenue — were running far above acceptable execution times, with no clear visibility into why.

The problem wasn't obvious: standard profiling showed the pipelines were "working." The bottlenecks were hidden inside the execution graph.

## Diagnosis

I conducted a deep diagnostic pass across both pipelines, looking beyond surface-level metrics. What I found:

- **Hidden processing failures** that were being silently retried rather than surfaced — consuming execution time without producing output
- **Dependency design issues** that caused downstream stages to wait unnecessarily for upstream stages that had already completed their relevant work
- **Suboptimal execution logic** where transformations were running sequentially when they could run in parallel, and where full-table scans were happening where partition pruning was possible

## What I changed

### Pipeline redesign — TenantTPIDMapping & Complete Revenue

Redesigned the dependency graph and execution logic for both pipelines:

- Eliminated silent retry loops by surfacing failures with proper alerting
- Restructured stage dependencies to remove artificial sequencing bottlenecks
- Introduced parallel execution where the data flow allowed it
- Added partition-aware processing to reduce the volume of data read per stage

Result: combined runtime dropped from **12 hours to 4 hours**.

### SQL → PySpark migration

For performance-sensitive transformations, I migrated the processing layer from SQL-based execution to **PySpark** — improving scalability for large financial datasets and making the transformation logic easier to maintain and test.

### Observability framework

Built a **reusable email alerting and validation framework** that generates:

- Dynamic HTML execution reports per pipeline run
- Pipeline status notifications (success / failure / SLA breach)
- Custom data quality validation messages with row-level detail

This framework was deployed across multiple data workflows — not just the two pipelines I optimized — giving the team full observability across the platform for the first time.

### DevOps & deployment

Managed production-grade deployment through **Azure DevOps**: pull requests, release coordination, and environment promotion (dev → staging → prod) for financial data solutions used by distributed Microsoft teams.

## Tech Stack

- **Platform**: Azure Fabric (formerly Azure Synapse + Power BI unified)
- **Processing**: PySpark, SQL
- **Orchestration**: Azure Data Factory, Azure DevOps
- **Observability**: Python (custom HTML report generation), Logic Apps
- **Languages**: Python, PySpark, SQL, YAML

## Key outcomes

| Pipeline | Before | After | Reduction |
|---|---|---|---|
| TenantTPIDMapping | 4.5 hours | 1.5 hours | **−67%** |
| Complete Revenue | 7.5 hours | 2.5 hours | **−67%** |
| Combined | 12 hours | 4 hours | **−67%** |

<div class="grid cards" style="margin-top: 3rem" markdown>

-   :material-calendar-check:{ .lg .middle } Slow or unreliable data pipelines?

    ---

    Pipeline performance problems are almost never where they first appear. I diagnose the real bottleneck and fix it properly.

    [Book Intro Call :material-arrow-top-right:](https://calendly.com/andresavila){ .md-button .md-button--primary }

</div>
