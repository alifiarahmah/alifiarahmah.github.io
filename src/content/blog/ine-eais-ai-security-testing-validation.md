---
title: AI Security Testing & Validation Course Notes
excerpt: The note I take as I watch the AI Security Testing & Validation course on INE
date: 2026-08-11
tags:
  - cybersecurity
  - course-notes
---
# Foundations
## Introduction to AI Security Testing

### Introduction to AI Security Testing

AI security testing: systematically evaluating AI systems (especially LLMs) and the applications built on top of them

Key categories:
- Prompt injection: Malicious instructions embedded in user input/retrieved content, that can hijack model behavior
- Jailbreaking: bypass safety guardrails and get model to produce restricted output
- Data exfiltration: Tricking model to reveal sensitive data from context, memory, or restricted systems
- Model inversion: Inferring training data from model outputs
- Indirect injection: Malicious instructions hidden in external content the model retrieves
- Tool/agent abuse: Exploiting AI systems to take unintended real-world actions

What does an AI security tester do? -> **AI security assessment lifecycle**
1. Understanding the system
	- How application works, what AI capabilities used, what data is processed, what external services are connected
2. Mapping data flows
	- Identify input sources, AI components, retrieval systems, databases, tool integrations, output destinations
3. Threat modeling
	- What can attacker influence, what assets need protection, where untrusted input enter the system, which components present the highest risk
4. Developing test cases
	- What will be tested, how testing performed, expected outcomes
5. Executing security tests
6. Reporting findings

### AI Security Assessment Lifecycle & Methodology

Difference between assessment lifecycle and methodology:
- Assessment lifecycle: What are the stages of an AI security assessment?
	- Structured & repeatable process
	- Tell us where we are in assessment process
- Assessment methodology: How do we perform each phase of the assessment?
	- Techniques, procedure, best practices used to execute assessment effectively
	- Tell us how to perform activities required at each stage

Why use methodology? Follow repeatable process that ensures risks are systematically identified, tested, documented, and validated. Methodology provides:
- Consistency
- Repeatability
- Better coverage
- etc.

AI Security Assessment Lifecycle:
1. Understanding the system
2. Mapping data flows
3. Threat modeling
4. Developing test cases
5. Executing security tests
6. Reporting findings
7. Validation & Regression Testing
8. Assess Residual Risk

### The OWASP AI Testing Guide

Provides:
- A standardized methodology for trustworthiness testing of AI and LLM-based systems
- Repeatable test cases that evaluate risks across:
	- Application layer
	- AI Model layer
	- AI Infrastructure layer
	- AI Data layer

How the guide fits into an assessment:
1. Understand the application -> Help to identify components, assets, trust boundaries
2. Threat modeling -> Identify likely attack vectors
3. Test planning -> Help create structured test cases
4. Security testing -> Use the guide's recommendation to perform testing activities
5. Reporting -> Map findings to test IDs

OWASP AI Testing Guide != threat framework. It complements other frameworks.

Relationship to other frameworks:
- OWASP AI Testing Guide: Security testing methodology
- OWASP Top 10 for LLM Applications: Common AI vulnerabilities
- MITRE ATLAS: Adversary tactics and techniques
- STRIDE: Threat modeling
- NIST AI RMF: Risk management and governance

### Defining Assessment Objectives & Scope

Assessment objectives: Why the assessment is being performed.
Common objectives:
- Security validation - determine whether security controls are functioning as intended
- Vulnerability discovery - identify unknown weaknesses
- Compliance requirements - demonstrate compliance with internal policies and external standards
- Remediation validation - verify previously identified vulnerabilities has been fixed

Scoping: defining boundaries, objectives, and focus areas of an AI security assessment before testing begins.
- What will be tested
- What will not be tested
- Assessment objectives
- Assessment constraints
- Success criteria

Scoping methodology:
1. Define assessment objective
2. Identify critical assets (e.g. PII)
3. Inventory AI components
4. Define scope boundaries (what's in & out of scope)
5. Establish Rule of Engagement
6. Document assessment scope

## Threat Modeling

### Threat Modeling for AI Systems

Threat modeling: Identifying, analyzing, prioritizing potential threats to a system before they can be exploited

Simplified:

![[ine-eais-ai-security-testing-validation.png]]

### Using STRIDE for AI Threat Modeling

STRIDE: Help systematically evaluate a system from six different threat perspectives.

STRIDE:
- Spoofing
- Tampering
- Repudiation
- Information disclosure
- Denial of Service (DoS)
- Elevation of privilege

You walk through each component, data store, process, and trust boundary, and ask which STRIDE categories would apply

## Test Planning

### Developing an AI Security Test Plan

Developing AI Threat model with STRIDE:
1. Identify critical assets
2. Identify trust boundaries
3. Apply STRIDE
4. Perform risk assessment (risk = likelihood x impact)
5. Calculate risk score
6. Prioritize threats

Developing an AI Security Test Plan
1. Prioritize threats for testing
2. Convert threats into security objectives
3. Define test scenarios
4. Define test cases
5. Identify required evidence
6. Define success criteria

Example on how this leads to test cases:
- Threat model: Prompt Injection
	- TC-001 Direct Prompt Injection
	- TC-002 Role Impersonation
	- TC-003 System Prompt Extraction
	- TC-004: Context Manipulation

### Writing Effective AI Security Test Cases

Test case: Documented procedure used to validate whether a specific threat/security control can be exploited, bypassed, or abused

A good security test case should clearly define:
1. ID
2. Test objective
3. Threat
4. Component
5. Procedure
6. Expected result
7. Evidence

Writing good test cases, should be:
- Specific, clearly define what is being tested
- Repeatable, another assessor should be able to execute the same test and achieve similar results
- Threat-driven, every test case should map back to a threat identified during threat modeling
- Measurable, clearly define what success/failure

# End-To-End Security Assessment

## Lab 1: Full Assessment

### Mapping Data Flows

### Threat Modeling & Test Planning

### Executing Tests

### Documenting Findings

### Security Assessment Report

## Validation & Regression Testing

### Remediation Validation & Regression Testing

## Lab 2: Verify the Fix

### Validating Fixes & Regression Testing

### Residual Risk Assessment