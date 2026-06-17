---
date: 2026-06-16
authors:
  - andresavila
categories:
  - Data Engineering
  - AI
  - Databricks
description: A client asked for an LLM-powered AI assistant. After diagnosing the real problem, the right answer was Databricks Genie AI — deterministic, auditable, and already paid for.
---

# Your Team Asked for an AI Assistant. You Probably Don't Need an LLM.

A client came to us with a clear request: build an AI agent powered by a large language model that business users could query for data insights. The ask was specific, the enthusiasm was real, and the budget was there.

We said no to the LLM.

Not because we couldn't build it — but because, after properly diagnosing the problem, it was the wrong tool. What they ended up with was faster, cheaper, more reliable, and already included in what they were paying for.

Here's how we got there.

<!-- more -->

---

## The Problem: A Specific Request That Needed a Deeper Question

The client — a large beverage and retail enterprise running their data stack on Databricks — wanted their business users to stop depending on the data engineering team for every query. The vision: type a question in plain English, get back data. Simple.

When a client comes to you with a solution already in hand, that's exactly when you should slow down and ask why.

We asked: what does "AI assistant" actually mean to you? What does a successful interaction look like? What happens when it gives a wrong answer in a business context?

After those conversations, the real requirement emerged: **a natural language interface that returns accurate, reliable, tabular data.** Not reasoning. Not summarization. Not generation. Data retrieval, in plain English.

That distinction matters more than it sounds.

---

## The Diagnosis: What They Asked For vs. What They Actually Needed

The client assumed an LLM was necessary because they'd heard the term "AI assistant." But LLMs are designed for open-ended language tasks — generating text, reasoning across unstructured content, handling ambiguity.

Their use case was the opposite: structured data, deterministic queries, auditable results.

**The core problem with LLMs for this use case isn't cost — it's non-determinism.**

An LLM can return different answers to the same question asked twice. For an enterprise data team where business decisions depend on consistent, auditable outputs, that's not a trade-off — it's a disqualifier. You can't explain to a CFO why the revenue figure changed between Monday and Tuesday because the model "interpreted the question differently."

With that diagnosis clear, we ran a structured POC to evaluate every realistic alternative.

---

## The POC: How We Evaluated 4 Options

We compared each option across five criteria: implementation complexity, operational efficiency, data format compatibility, cost, and determinism.

| Option | Complexity | Efficiency | Format Compatibility | Cost | Deterministic? |
|---|---|---|---|---|---|
| **FAISS** | High — kernel install, in-memory setup | Low — regenerates embeddings on every use | Medium — needs Markdown/JSON conversion | Low $ | ❌ No |
| **LLM Serving Endpoints** | High — additional infrastructure | Medium — tabular-to-document conversion required | Low — tabular data needs transformation | High $ | ❌ No |
| **Mosaic AI Vector Search** | Medium — managed, supports upserts | Medium — one-time vectorization but index maintenance | Medium — still requires document format | High $ | ❌ No |
| **Genie AI (Databricks)** | Low — native, no extra setup | High — queries tabular data directly | High — works natively on tables | $0 extra | ✅ Yes |

**FAISS** was the cheapest option but required installing the library into the compute kernel, generating embeddings in-memory on every session, and converting structured tables into document format first. High friction, low efficiency, and still non-deterministic.

**LLM Serving Endpoints** gave us the most flexibility but came with the most overhead: additional infrastructure to manage, the same tabular-to-document conversion problem, and the highest cost. Still non-deterministic.

**Mosaic AI Vector Search** was an improvement — persistent vector storage with upsert support meant we didn't have to regenerate embeddings from scratch every time. But we were still maintaining a vector index, still converting tabular data into something the LLM could consume, and still paying for infrastructure the client didn't need. And still non-deterministic.

**Genie AI** changed the framing entirely. It's Databricks' native natural language interface — it doesn't use embeddings or vector stores. It translates natural language directly into SQL and runs it against Unity Catalog tables. No document conversion. No semantic search index. No additional infrastructure. And since it's generating and executing SQL, the results are deterministic and auditable.

The decisive factor: Genie AI was already included in what the client was paying for Databricks. Zero marginal cost.

---

## The Result: What We Built and Why It Worked

We connected Genie AI to the client's existing Unity Catalog tables through the Databricks API, and surfaced it to users via a Streamlit interface deployed on Databricks Apps — keeping everything within the same platform they already operated.

Business users can now type questions like "show me sales by region for Q1" and get back accurate tabular data immediately. No tickets. No dependency on the data team for routine queries.

The implementation took a fraction of the time a custom LLM pipeline would have required — because we weren't building infrastructure, we were connecting existing pieces.

**The non-determinism argument turned out to be the most persuasive one in the room.** Not cost, not complexity — reliability. Enterprise teams can absorb cost. They can't absorb unexplainable inconsistencies in business-critical data.

---

## The Takeaway: Diagnose Before You Prescribe

The lesson from this project isn't "don't use LLMs." LLMs are the right tool for many problems. The lesson is that when a client arrives with a specific technology request, that's when you need to ask the most questions.

In this case, the diagnosis revealed that:
- The actual requirement was structured data retrieval, not language generation
- Determinism and auditability were non-negotiable in an enterprise context
- The right solution was already in the client's existing stack

The most expensive mistake in data engineering isn't choosing the wrong database or the wrong cloud. It's building the right solution to the wrong problem.

If your team is evaluating AI tooling for data access and you're not sure whether you actually need an LLM — the answer is probably that you don't. Start with what the users actually need to do, not what the technology can theoretically do.

---

*I'm a Senior Data Engineer specialized in AI-powered data systems. I help enterprise teams build cloud pipelines and data infrastructure that delivers real operational value — without overengineering. If you're working through a similar architecture decision, [let's connect](https://andresavila.io).*
