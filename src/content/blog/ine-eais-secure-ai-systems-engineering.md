---
title: Secure AI Systems Engineering Course Notes
excerpt: The note I take as I watch the Secure AI Systems Engineering course on INE
date: 2026-07-21
tags:
  - cybersecurity
  - course-notes
---
# Foundations

## AI Security Principles

### Introduction to Secure AI Systems Engineering

Security engineering: Discipline/practice of designing, building, implementing, and maintaining secure technology systems that are resilient against cyber threats.

Unlike reactive security functions that focuses on monitoring and IR, security engineering is proactive -> reducing risk by embedding security into system design & operational processes from the outset

Security engineering is guided by foundational cybersecurity principles:
- Defense in depth
- Least privilege
- Zero trust
- Secure by design
- Fail-safe / fail secure
- Separation of duties

Secure AI Systems Engineering: Designing, building, configuring, & maintain AI-enabled systems with security controls. Focusing on securing the unique components and workflows introduced by AI systems.

Why AI systems requires a novel security approach? Because it introduces new attack paths -> changing attack surface.
- Interpret natural language
- Handle ambiguous user input
- Generate probabilistic outputs
- May invoke tools dynamically
- May access internal knowledge sources
- May influence downstream systems

AI Security is not just model security. It also consists of application ecosystem surrounding the model.
- Prompt injection defense
- Tool access control
- Sensitive data leakage prevention
- Retrieval pipeline security
- Output validation
- Runtime guardrails
- Secret protection
- Abuse prevention

Common threat categories:
- Input-based attacks
- Output-based attacks
- Tool abuse: Unauthorized function invocation
- Retrieval attacks: RAG poisoning
- Operational threats: Secret exposure, log, etc.

### Threat Modeling AI Systems

Threat modeling: Identifying what can go wrong in a system, how attackers could potentially exploit weaknesses in the system, and what security controls can be implemented to reduce risk.

Traditional vs AI Threat Modeling

| Traditional Systems                                | AI-Enabled Systems                                                        |
| -------------------------------------------------- | ------------------------------------------------------------------------- |
| Input usually structured                           | Inputs may be natural language                                            |
| Outputs usually predicatble                        | Outputs may be probabilistic                                              |
| Business logic is explicitly coded                 | Some behavior is model-generated                                          |
| Data flow is easier to trace                       | Context may be assembled dynamically                                      |
| Access control is enforced by application logic    | Tool use may be influenced by model reasoning                             |
| Vulnerabilities are often code/configuration flaws | Vulnerabilities may involve prompts, context, tools, or retrieved content |
-> Extends, not replace traditional

Threat modeling workflow:
1. Define the AI system
2. Identify assets
3. Map the architecture & data flaws
4. Identify trust boundaries
5. Identify threats & abuse cases
6. Define & implement security controls
7. Validate through security testing

# Input & Prompt Security

## Input Validation

### Why Input Validation Fails in AI Systems

Because:
- AI system process free-form prompts, ambiguous instructions, conversational requests, and have dynamic context. 
- Languages are ambiguous, attackers can rephrase intent ("Ignore previous instructions")
- Obfuscation can bypass filters (encode into base64, etc.)
- AI understands meaning, not syntax ("Ignore previous instructions" -> "Earlier rules are no longer relevant")
- Multiple input sources
- Indirect prompt injection
- AI/tool outputs can become inputs

### Identifying Untrusted Input Sources

Direct input:
- Chat prompts 
	- User prompt -> Untrusted
	- System prompt -> Trusted (?)
- Uploaded files -> Untrusted
- API requests -> Untrusted
- Search queries -> Untrusted
- Form submissions -> Untrusted
Indirect inputs:
- Retrieved documents -> Untrusted
- Tool responses -> Validate before trust
- Web/email content -> Untrusted
- Memory state -> Low trust

Threat modeling questions:
- Can an attacker influence this?
- Does it cross trust boundary?
- Can it alter model behavior?
- Can it trigger tool use?
- Could it expose sensitive data?

## Prompt Hardening Techniques

### Designing Secure System Prompts



### Input Sanitization & Filtering Strategies

### Context Isolation & Boundary Enforcement

# Output Security & Validation

## Output Risks

### Risks of Unvalidated AI Output

### Structured vs Unstructured Outputs

## Output Validation

### Output Filtering & Content Moderation

### Data Loss Prevention (DLP) for AI Outputs

# Input & Output Security Lab



# Secure Tool Access

## Secure Tool Access & Function Invocation Controls