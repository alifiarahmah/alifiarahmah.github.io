---
title: 'INE - AI & LLM Fundamentals Course Notes'
excerpt: 'Hello, world! This is my first post on my built-in blog using markdown.'
date: '2020-08-12'
slug: 'ine-ai-llm-fundamentals'
---

This is the note I take as I watch this course [Explore AI/LLM Systems & Security Architecture | INE](https://my.ine.com/CyberSecurity/courses/2e110b7d/aillm-systems-security-architecture)

# AI & LLM Fundamentals

## Artificial Intelligence (AI)

### Understanding Artificial Intelligence

AI: system that use statistical patterns, learned from data, to perform tasks that traditionally require human judgement:
- understanding language
- recognize pattern
- making decision
- reasoning
- adapting behavior based on new information

Modern AI: From deterministic to probabilistic logic.

History:
- 50s - beginning, Turing test. teaching computer explicit rules
- 60-70s - symbolic AI, expert systems (thousands of rules)
- 80-90s - Machine Learning emerges, rules --> learning from data
- 10s - DL revolution, big data & GPUs --> neural networks (speech, image classification, translation)
- 20s - LLM & genAI. reasoning, content generation, summarization, agents, tool, workflows

AI vs ML vs DL
- AI: Broad term, technique that enables system to perform tasks that typically need human intelligence
- ML: HOW to teach computers by learning patterns from data instead of rules
- DL: Use deep neural network

### AI, Machine Learning, & LLMs

LLMs: advanced autocomplete system trained on vast amounts of text to understand and generate human-like language (predict the **most likely** next token).

LLM appear intelligent because they:
- understand context across long inputs
- generate coherent, structured responses
- mimic reasoning patterns found in training data
But under the hood, they operate on probabilities (can be confidently wrong, do not verify truth)

AI the what/broad goal, ML the how, LLM are a tool

## Large Language Models (LLMs)

### Large Language Models (LLMs)

LLM:
- Large: large parameter (billions values that shape how model responds)
- Language model: learned statistical patterns across vast amount of text

It does not understand the way humans do, it predicts what text should come next based on patterns

LLM:
- input: text (prompt)
- output: predicted next tokens (response)

How LLMs are built:
1. Collect training data + tokenization
2. Feed text to the model (e.g. transformer)
3. Model makes prediction
4. Compare to correct answer
5. Adjust parameters, repeat billions of times
Result: file of billions of numbers ("weights") that encode patterns from all the training text
After basic training, model go through finetuning (instruction, RLHF) to make them helpful, safe, instruction-following
Security note: ==training data is potential attack surface==

How LLM work internally
1. Token -> embeddings (vector)
2. Attention mechanism: Determines which words in sentence matter most
3. Neural network layers: each layer refines understanding of context
4. Prediction: Model probabilities for the next token (autoregressive generation, each token becomes part of context for next)
5. Iteration: repeats token by token until completion

What LLM cannot do:
- No persistent memory: each convo starts fresh unless the app explicitly stores & re-injects prior context
- No real-time knowledge
- No guaranteed accuracy
- **No true reasoning**
- No inherent security: by default, will follow any instruction in the prompt
- Behavior is opaque: cannot inspect the model's reasoning

### Understanding Prompts & Context Windows

Prompt: **everything** the model receives before it generates a response

System prompt: Hidden instructions given to LLM. 
- Defines global behavior, rules, context, how interpret user input & generate response
- Typically defined by app dev, hidden to users
- **High trust** by convention, but model cannot verify its source

| System Instructions          | User Prompts                       |
| ---------------------------- | ---------------------------------- |
| Define global behavior       | Define task-specific instructions  |
| Set tone & safety boundaries | Constrained by system instructions |
| Persist across interactions  | Change per request                 |

Context: What the model can see
Refers to all info available to the model at time of generation
- Current prompt
- Previous messages **in same session**
- System instructions
- Embedded/retrieved data

Context window: total amount of text the model can hold in memory at once.
When window is full, older content is **dropped**.
-> Security: large context window means more data can flow through, increasing attack surface area for sensitive data exposure

If context window exceeded:
- Older information dropped
- Model lose earlier instructions
- Output may contradict user input

Manage context:
- Breaking tasks into steps
- Resupplying critical constraints
- Using summaries instead of raw data

Input types:
- Text
- Documents -> chunked & injected via retrieval pipeline
- Images
- Tool output (web search, db, API)
- System instructions
- Structured data (JSON, CSV, XML)

Output types: ALWAYS TOKEN, but what the token represent varies
- Token per token, no plan for full response before it starts
- Shaped by prompt
- In agentic, output may be tool calls
- Security implication: **tool-call output** are action in real world

### Tokenization in LLMs

Token: smallest unit of text that LLM can process (read/write)
- common word
- part of word
- punctuation mark
- whitespace character

Everything measured in tokens: context window size, pricing, rate limits, output length

How tokenization works: tokenizer is separate component that runs before the model.
String -> token string  -> token IDs (`9906 11 1917`)

Integer IDs: Numbers that a tokenizer assigns to each token in vocabulary. Basically lookup table.

Token string -> token ID mapping process:
1. There's a large corpus of text and initial alphabet of base characters
2. **BPE (byte pair encoding)** algorithm: finds most frequently co-occuring pair of existing tokens, merge into new token, assign it the next available integer ID
3. Repeats until hit target vocabulary size
4. Final result is a vocabulary file

Tokenizer examples:
- tiktoken
- cl100k_base
- SentencePiece

Security considerations:
- Tokenizer trained on single vocabulary
- Words/char outside that vocabolary (including unicode characters) get split into byte-level fallback tokens
- Can craft input that look meaningful to humans, but map to unusual tokens (**evade filters**)

Because the model interprets tokens, not letter/words, it fails in:
- Spelling & counting
- Reversing strings
- Arithmetic operations on numbers
- Rare words cost more
- Language inequality
- Leading spaces matter

Exploiting tokenization
- Token smuggling
	- Translate normal string to tokens that has same IDs as malicious string. Break the known-bad phrase so the string-matching guard don't see, but model interpret the same meaning
	- Example:
		- Zero-width space between words: `ignore\u200bprevious instructions`
		- Zero-width joiners mid-word: `ign​oreprev​ious instruct​ions`
		- Tab instead of space
		- Case variation: `IGNORE previous instructions`
- Unicode homoglyph substitution smuggling
	- Latin letters have **visually identical twins** in other Unicode scripts
	- To human & model it's the same, but to filter they are different characters
- Context window budget exhaustion
	- Floods the context window with high-token-cost content (rare unicode, code, non-english text) to push important system prompt instructions out of the context window entirely (forgot system instructions)

### Understanding LLM Inference

**Inference**: phase where trained model takes prompt and generate response, by predicting next token step-by-step based on learned patterns. **After** training


| Aspect       | Training                | Inference                     |
| ------------ | ----------------------- | ----------------------------- |
| Purpose      | Learn pattern from data | Apply learned patterns        |
| Data         | Massive datasets        | User prompts                  |
| Compute Cost | Extremely high          | High, but lower than training |
| Frequency    | Rare (weeks/months)     | For every prompt              |
| Output       | Model weights           | Generated tokens              |

In practice
- Chat: cost -> subscription, system + user + hidden context combined
- API: pay per token, explicitly set prompt + parameters (temperature, max tokens, etc.)

Key inference parameters:
- `temperature`: randomness vs determinism
- `top_p`: diversity of token sampling
- `max_tokens`: output length
- `presence_penalty`: reduces repetition (flat, penalized word simply on existing)
- `frequency_penalty`: reduce repeated tokens (penalized based on how often already use)

Why inference is costly?
- Require GPU acceleration, large VRAM, large memory bandwidth, parallel compute
- Longer prompts = higher inference cost

### LLM Stack: From Model to Application

Model is just a file of weights, has no interface. So can't use a raw model directly. 
Each layer on top of model shapes what users can do, data flows, and what risks are introduced.

LLM stack responsibility
- Model provider: training, weights, base API
- Developer: application, prompts, guardrails
- Shared responsibility: data handling, abuse prevention

Layers of an LLM product
- User interface: Chatbot, API client, voice interface, embedded widget
- Application layer: System prompt, session management, I/O handling, business logic
- Orchestration layer: Retrieval pipelines, tool routing, agent loops, memory management
- Model API: Inference endpoint, token limits, moderation hooks, streaming
- Infrastructure: GPU, model weights, logging, access control, billing

Security considerations: **Attack vectors exist in every layer**

LLM Product archetypes:
- Chatbot
	- Responds to user messages
	- UI: Chat window
	- App: System prompt + session
	- Orchestration: None/minimal
	- Model: Single call API per turn
- Copilot
	- Augmented, assists a human with a task
	- Has access to context (document, code) but the human stays in control
	- UI: IDE, document editor, browser
	- App: System prompt + user data
	- Orchestration: RAG
	- Model: API call with injected context
- Agent (example: claude code)
	- Autonomous, pursue a goal across multiple steps
	- UI: task input, output report
	- App: Goal + constraints + memory
	- Orchestration: Agent loop + tool router
	- Model: multiple API calls per task

Application layer: developer's primary control surface + **common location of security gaps**
- System prompt lives here
- I/O handling happens here
- Authe/Autho happen here (model has no concept of logged in!)

Typical application layer controls
- System prompt injection: Identity + rules
- User input sanitization: Input control
- Output filtering/moderation: Output control
- Session & memory management: State control
- Rate limit & abuse detection: Access control
- Logging, audit trail: Observability

# LLM Application Architecture

## Core Components

### Model Endpoints: Architecture & Security

Model endpoint: URL that accepts a prompt and returns a completion (REST API)

![[Pasted image 20260702112942.png]]

Request body:
- `model`
- `max_tokens`
- `temperature`
- `system`: system prompt
- `messages`
	- `role`
	- `content`

Response body:
- `id`
- `type`
- `role`
- `content`
- `model`
- `stop_reason`
- `usage`
	- `input_tokens`
	- `output_tokens`

Security considerations:
- Entire prompt is transmitted in plaintext
- TLS encrypts in transit, but fully visible in logs, proxy traffic, and model provider

Security risks at the endpoint layer:
- API key exposure
	- common exposure path: hardcoded in js, committed into vcs, logged in plaintext, or sent via insecure channel
- System prompt extraction
	- travels in request body of every call
	- can also ask model to repeat its instructions
- Prompt data in transit
	- every API calls carries the full conversation history + injected documents
- Parameter manipulation
	- if in user input, attacker can manipulate
- Rate limit abuse
- Response logging risks

### Agents & Agentic AI

AI Agent: system that uses LLM to decide what actions to take, take action, observe result, and repeat until task is completed. It pursues a goal autonomously over multiple steps (agere = to do/act) --> ability to take actions

Agentic AI: AI system designed to operate with a degree of independence (without human approving each step)

Agentic is not binary, it's a spectrum.

Level:
1. Reactive: chatbot
2. Tool-augmented: one prompt, one tool call, one response (ex: search-enabled assistant)
3. Mildly agentic: multiple steps, human reviews each action (ex: copilot with approve/reject)
4. Agentic: multiple steps, tools, autonomous decisions (ex: coding agent)
5. Highly agentic: long-running, sub-agents, minimal oversight (autonomous workflow automation)

Properties of agentic system:
1. Autonomy
	- System takes actions without requiring human approval at each step
	- **Security Risk**: mistakes & injections compound between checkpoints
2. Persistence
	- System maintains state (memory, context, result) across multiple actions
	- **Security Risk**: compromised state persists across actions, sensitive data accumulated stays in context window
3. Tool use
	- Affect the world beyond generating text: calling APIs, r/w files, execute code, query db
	- **Security Risk**: tool action are often irreversible
4. Goal directed
	- System work toward an objective rather than just responding to individual prompts
	- **Security Risk**: will find paths to its objective that developers did not anticipate, including violate intended constraints if goal is poorly specified
Note: Don't need all 4 to be considered agentic, but full autonomous has all four

Why agentic AI needs a different security approach?
- Human-in-the-loop assumption is broken
	- Security controls must work without relying on human review at each step
- Attack blast radius scales with autonomy and tool access
	- Injection can chain across multiple tool calls
- Model is both decision maker and attack surface
	- If prompt content can be influenced, decisions can be influenced too 
No single control is sufficient --> need Defense in Depth

### Orchestrators, Agents, & Tool Layers

Orchestrator: code between application and model. **Decide** when to call the model, what to send, what to do with result.
- Assemble prompt
- Call model API
- Read response, decide next action, repeat
Orchestrators can be custom application code, or built using frameworks like LangChain, LlamaIndex, or AutoGen.

![[Pasted image 20260707081559.png]]
 
Security note: orchestrator runs with app-level privileges. Has access to tools, DB, and APIs. Execute whatever the model tells it to. If an attacker can influence what the model decides, they indirectly control what the orchestrator does, including any tools it has access to

Agent loop:
- Observe: Receive curent context from the last action (history, tool/search output, file content)
- Think: Decide what to do next, answer user/tool call/clarify question/declare complete?
- Act: Execute the model's decision, feeds the result back to Observe step

When does the loop end?
- Task complete
- Max iteration
- Error/tool failure
No guaranteed termination. Malicious prompt can loop indefinitely & driving up cost

Tool: functions the model can invoke. Model does not run them directly, it outputs a structured instructions & orchestrator executes it.
Example:
- search_web
- read_file
Risk: content from tool call can content malicious instructions/sensitive data

Example how tool call works
1. User send message
2. Model decides how to use a tool
	1. `{"tool": "search_web", "query": "Apple AAPL stock price today"}`
3. Orchestrator executes the tool + inject result back to context window
4. Model reads the result & generate final answer
5. Orchestrator returns the answer & update history

Security risk:
- Indirect prompt injection via tool results
- Privilege escalation through tool chaining
	- If can influence one tool call, can use the result to influence the next
- Confused deputy (act on behalf on wrong principal) 
- Runaway loops & cost exhaustion
- Irreversible actions without human approval

Defensive controls
- Least privilege to tools
- Treat all tools as untrusted input
- Implement Human-In-The-Loop (HITL) before irreversible action
- Hard-cap iteration counts
- Log every tool call & result
- Separate tool execution from model access credentials

## Retrieval & Context

### Introduction to RAG

Technique to give LLM access to information that was not trained on, by fetching relevant documents at the moment a user asks a question and inserting them into the prompt before the model generates its response. (Fine tune is expensive + slow, RAG is a practical alternative)

RAG:
- before application deployed, source splitted into chunks + converted into vectors by an embedding model
- Vectors are stored in vector database. When user asks a question, question -> vector -> vector database find the chunks that most semantically similiar to it -> inserted into the prompt alongside the user's question
- LLM retrieve content + generate answer grounded in what was retrieved
- model's reasoning ability stays the same, what changes is what info they has access to when it answers

Pipeline:
1. Ingestion: chunk document, embed each chunk, store in vector db
2. Retrieval: send query, embed query, search for similar chunk, inject chunks to prompt

Security considerations:
- Both pipelines are attack surfaces (document can be poisoned)
- Over-retrieval/misconfigured access control can expose content

RAG-specific attack:
- Document poisoning
	- Upload file or edit wiki page can plant malicious instructions
- Cross-user data leakage
	- If vector store doesn't enforce per user/tenant access controls, query from one user can retrieve & inject document chunks belonging to another
- Retrieval probing to map document corpus
	- Attacker can craft queries to reveal structure of document corpus, even without direct access to the vector store
	- By observing prompt-model response, attacker can infer document and design follow-up queries to extract incrementally
- Context window flooding via retrieval
	- Fill context window & push system out of range

### Embeddings & Vector Databases

**Embedding**: list of number that represent **meaning** of a piece of text (semantic)
-> modern embedding models produce vector with 768, 1536, or more dimensions

In some cases, original text can be reconstructed from embedding. embedding != anonymising data

limit: two sentences with opposite meanings but similiar words can produce similiar vectors -> semantic collision

Security consideration: keyword-based security filter may not detect semantically equivalent but different worded attack. attacker can paraphrase.

**Vector database**: storage system built to store embeddings and search them by similiarity. Fast because use approximate nearest neighbor algorithms

Security implication: vector store holds both embedding & original text chunks, contain actual sensitive content.

Single record in vector looks like:
```
id: "chunk_4821"
vector: [0.021, -0.847, 0.334, ...]
text: "Refunds for digital products must be requested within 14 days of purchase..."
metadata: { source: "refund-policy-v3.pdf", created: "2024-11-01", access_level: "public" }
```

Popular vector databases: pinecone, weaviate, chroma, pgvector.

![[Pasted image 20260707132557.png]]
![[Pasted image 20260707132608.png]]

- Embedding model must match. If differ, it exists in different mathematical space and similiarity score becomes meaningless
- Chunk size affect what gets retrieved (too large retrieve irrelevant content, too small split sensitive piece of data across 2 chunks)
- Top-k (number of chunks retrieved per query) high number increases 

Security risks:
- Sensitive data in vector store
- Missing per-user access controls at retrieval time
	- Similarity search has no concept of authorization

# AI/LLM Security Architecture

## Data Flow Analysis

### Identifying Trust Boundaries in AI Systems

Trust boundary: level of trust assigned to data/instruction changes. Point where data, control, or execution moves between components with different levels of trust
-> anything crossing a boundary must be validated, constrained, or monitored

Problem in AI system: model process data from both sides of the boundary in the same window, cannot distinguish trust & untrusted content

Principal hierarchy (who the model takes instructions from)
- Highest trust: model provider
- High trust: app developer
- Medium trust: human turn
- Low trust: tool result, retrieved documents, web pages
-> enforced by application design, not by model

![[Pasted image 20260707153823.png]]

Every major attack class against LLM system is fundamentally a **trust boundary violation**.
- Direct prompt injection: user -> developer trust level
- Indirect prompt injection: external content -> any trust level
- Cross-tenant data leakage: user data -> another user session
- Privilege escalation via system prompt leakage
	- Attacker extract system prompt, then know exact rules and craft more effective bypass attempts

Framework for mapping trust boundaries:
1. Identify all principals
2. Map every data flow into context window
3. Identify every trust level transition
4. Assess the control at each boundary
5. Assess model output boundaries (HITL before output -> irreversible action)

### Sensitive Data Flows in AI Applications

Context window is a single undifferentiated text buffer. PII etc. can appear in the same context window, model process them, and any of them can appear in the model's output

Category:
- PII
- Credentials: session ID, API keys, password
- Confidential data: financial data, trade secret, legal documents
- System configuration: system prompt content, security rules, model parameters
- Conversation: prior turns, user intent signal, behavioral patterns
- Tool output: DB query results, file contents, API responses

Where sensitive data enters the system
- User prompt
	- Input filter is the **only** control between raw user input and the model
	- Risk: user paste credentials, financial data, personal details, into chat interfaces. Without redaction, this data is logged, transmitted to model provider, and stored in conversation history.
- System prompt
	- Frequently contain sensitive configuration
	- Risk: system prompt is transmitted in plaintext on every API call. It is visible in logs and model provider
- RAG retrieval
	- Retrieved chunks can contain sensitive data from original documents
	- Risk: chunk containing PII treated the same as chunk containing product description. should be enforced by metadata filtering
- Tool results
	- Often contains more sensitive information because, for example, tool return entire records rather than specific fields
	- Risk: query (like `select *`) enters context window and logged

Once sensitive data enters context window, it moves to every system that touch the request, logged in API + get multiplier effect (sensitive data retransmitted every turn)

Exposure points at each layer
![[Pasted image 20260708151128.png]]
![[Pasted image 20260708151138.png]]

Defensive controls:
- Before context window
	1. PII detection & redaction
	2. Access-controlled retrieval
	3. System prompt hygiene
- After context window
	1. Output scanning before display
	2. Log redaction & access controls
	3. Conversation history limit

### Logging, Telemetry & Observability Risks

In AI application, logs capture full content of every conversation, retrieved document, tool call, and model response. Why? debugging requires the full context.

Sensitive data in log persist far longer than in active session (weeks-months). Log stores are typically granted read access to developer & operation teams.

5 typical categories of log data:
- Application request logs: by application layer before API call
	- Sensitivity: Critical. Contains assembled context window including system prompt, user message, conv history, chunks, API key reference, user session id 
- Model provider logs
	- Sensitivity: High. Developer has limited visibility and control over these logs, access governed by provider's ToS
- Orchestration and tool logs
	- Sensitivity: High-critical. Contain live data from external systems e.g. database records, API response, file contents
- Observability & tracing logs (LangSmith, Datadog, Helicone, OpenTelemetry pipelines)
	- Sensitivity: High
- Conversation history stores
	- Sensitivity: Medium-high

Common LLM observability tools: LangSmith (LangChain's tracing platform), Helicone, Weights & Biases, Datadog LLM Observabilty, custom OpenTelemetry pipelines
Risk:
- Tool often added by developer without security review, seen as debugging infrastructure rather than data processors
- Run as 3rd party platform, data processing agreement may not have been reviewed
- Have broad term access by default
- Retain data for months

Defensive controls for AI App Logging
- PII detection and redaction in log timeline
	- Replace sensitive values to tokens/hashed placeholders BEFORE LOG WRITE
- Structured logging with field-level sensitivity classification
	- Request timestamp, token count = low
	- Request body, response body = critical

## Practical Analysis (Lab)

### Identify Components & Architecture

### Data Flow Tracing & Log Analysis

### Vector Store Inspection
