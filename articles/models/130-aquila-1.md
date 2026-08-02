# What Aquila 1 Teaches Us About Open Chinese–English Foundations

> **Series position:** 130 of 225 · **Roadmap entry:** Aquila 1. **Evidence status:** official BAAI Aquila model card and license. **Experiment status:** suggested, not executed.

## Quick Summary

| Field | Verified summary |
|---|---|
| Released | 2023 |
| Creator | Beijing Academy of Artificial Intelligence |
| Model type | Chinese-English decoder language model |
| Architecture | Decoder-only Transformer with custom code |
| Modalities | Text |
| Parameters | Aquila-7B is the principal documented checkpoint |
| Context | Check the exact card; do not transfer Aquila2 values |
| Training | Version-specific pretraining and chat fine-tuning |
| License | BAAI Aquila Model License Agreement for weights; Apache 2.0 source code according to the card |
| Best use cases | Chinese-English local research |
| Biggest strength | Early bilingual open checkpoint |
| Biggest weakness | Older capability and custom-runtime constraints |

## Why This Model Matters

Aquila 1 represents BAAI’s first open Chinese-English foundation model line and the transition toward locally usable, commercially documented weights.

## Historical Context

It appeared alongside Baichuan 1, ChatGLM, and Llama-based releases. Aquila 1’s open model license and chat/tool specification reflect the emerging need for both research and deployment guidance.

## Architecture Explained

```mermaid
flowchart LR
    A[Chinese-English tokens] --> B[Decoder Transformer]
    B --> C[Aquila-7B base]
    C --> D[AquilaChat-7B]
```

The core model is a dense decoder Transformer. Tool-call syntax belongs to the chat variant’s interface.

## Training

The base model is pretrained; AquilaChat is fine-tuned and RL-based according to the official card. Exact data and optimization details should be read from the version-specific release.

## Model Variants

| Variant | Use |
|---|---|
| Aquila-7B | Base model |
| AquilaChat-7B | Conversation and tool-call experiments |

## Capabilities

Chinese-English text generation, chat, and documented tool-call formatting for selected variants. No native vision or audio capability in the core release.

## Real-World Use Cases

Bilingual drafting, education, local inference, and controlled agent-protocol research. Do not use unreviewed outputs for high-stakes decisions.

## Practical Demo

**Suggested experiment; not executed:** test Chinese and English prompts with a JSON tool schema. Score syntax validity, hallucinated arguments, and refusal behavior before connecting any real tool.

## Benchmarks

Use official card and BAAI report materials for exact scores. Do not treat tool formatting as a benchmark of tool reliability.

## Trade-offs

- 7B is accessible but dated.
- Custom code increases integration complexity.
- Weight and source licenses differ.
- 4K-era context assumptions may limit documents.

## Comparison

| Model | Relationship |
|---|---|
| Aquila-7B | Original base |
| AquilaChat-7B | Aligned derivative |
| Aquila2 | Successor family |
| Baichuan-7B | Regional comparator |

## Ecosystem

Official Transformers examples require custom code. Verify quantization and runtime support for the chosen checkpoint.

## Fine-Tuning

Chat training demonstrates adaptation. LoRA/QLoRA may work with compatible custom modules but are not universally official.

## Deployment

Quantized local GPU deployment is plausible. Review BAAI license requirements before commercial use. Mobile/browser support is not verified.

## Limitations

Hallucination, language imbalance, unsafe tool suggestions, outdated knowledge, and bias remain possible.

## Decision Framework

Use Aquila 1 for historical bilingual-model research. Avoid it for current multimodal or long-context requirements.

## My Learning

Aquila 1 helped me separate “open source” into code, weights, and permissions. Those layers can have different licenses and different practical consequences.

## Key Takeaways

1. Aquila 1 is a Chinese-English 7B Transformer family.
2. Chat and tool formats are derivatives.
3. License review is part of deployment engineering.
4. Historic openness does not imply modern capability.

## Closing Question

When a model has separate code and weight licenses, which one does your release process treat as the source of truth?

## Glossary

- **Weight license:** terms governing trained parameters.
- **Custom code:** model implementation outside standard framework classes.
- **Tool protocol:** structured format for application-mediated actions.
- **Bilingual model:** model trained primarily for two languages.







## Extended Research Notes

> **Evidence boundary:** The notes below deepen the engineering interpretation of this article’s verified fields. They do not introduce a new benchmark score, release date, license conclusion, or deployment guarantee. Where the source record is checkpoint-specific, the same caution applies here.

### Fact, observation, and opinion

- **FACT:** Model-specific claims in this article are limited to the verified fields and the primary sources listed at the end.
- **MY OBSERVATION:** I did not execute the suggested experiment in this article, so it contains no reported experimental result from me.
- **MY OPINION:** My deployment and decision recommendations are conditional engineering judgments, not claims that the model is universally superior.
- **UNVERIFIED FIELDS:** When an official source does not establish a requested detail, the correct statement is: “This information could not be verified from official sources.”

### How to read Aquila 1

Aquila 1 appears at 130 of 225 in this series. That position is useful because a model is never only a list of parameters: it is a response to the research and product constraints that existed when it was released. The verified summary identifies the creator as **Beijing Academy of Artificial Intelligence**, the architecture as **Decoder-only Transformer with custom code**, the modality as **Text**, and the release information as **2023**. Those facts define the perimeter of the discussion. They do not, by themselves, prove that every checkpoint in the family has identical behavior.

When comparing this model with another entry, I would keep three layers separate. The first layer is the published artifact: weights, configuration, tokenizer, training objective, and model card. The second layer is the runtime: preprocessing, precision, batching, decoding, retrieval, and serving framework. The third layer is the application: prompts, tools, permissions, monitoring, and human review. A result at one layer should not be described as a property of all three. For example, a benchmark result for a base checkpoint is not automatically a guarantee for a quantized derivative inside a production workflow.

This distinction is particularly important for family names. A family may contain base models, instruction-tuned models, multimodal variants, safety models, embeddings, or adapters. The name can suggest continuity while the tokenizer, context limit, training mixture, or license changes. My working rule is therefore simple: treat the exact checkpoint and its official documentation as the unit of analysis, and use the family name only when the source explicitly supports a family-level statement.

### Architecture implications for an engineer

The architecture field says **Decoder-only Transformer with custom code**. The practical meaning depends on the interface the model exposes. An encoder-oriented system usually turns an input into representations that a task head, retriever, or classifier can consume. A decoder-oriented system usually predicts a continuation one token at a time. An encoder–decoder system separates reading from writing and uses cross-attention between the two stages. A mixture-of-experts model adds routing decisions; a state-space or recurrent model changes how sequence history is represented. These are not interchangeable labels, because they change memory use, latency, fine-tuning targets, and the kinds of errors an evaluation should expose.

The first engineering question is therefore not “How large is it?” but “What computation does the application need?” If the product needs a fixed label, token span, or embedding, open-ended generation may be unnecessary. If it needs a long response, generation is central and decoding becomes part of the latency budget. If the model accepts images, audio, video, or several input types, the preprocessing pipeline and alignment between modalities become as important as the language backbone. The article’s modality field is **Text**; anything outside that field should be treated as an external system feature unless an official source documents it.

The second question is where the context is stored. In attention-based models, the runtime may maintain key–value states while decoding. In other architectures, recurrence, convolution, or state-space updates can change the memory pattern. The original release may not document modern optimizations such as grouped-query attention, sliding windows, paged attention, speculative decoding, or flash-attention kernels. Those optimizations can be useful in a compatible implementation, but compatibility is an implementation claim, not evidence that the original model was trained with the feature.

The third question is precision. A checkpoint can be stored or served in multiple numeric formats, but quantization changes the numerical approximation and can change output quality. I would record the original precision, the conversion tool, the quantization scheme, the runtime version, and the evaluation set. Without those fields, “the model runs locally” is not a reproducible technical result.

### Training and post-training interpretation

The verified training description names **Version-specific pretraining and chat fine-tuning** and **not stated in the article’s verified summary**. I would interpret those fields as a causal history, not as a marketing label. Pretraining determines what regularities the model can represent; instruction tuning changes how it maps a request into an answer; preference optimization changes which answers are favored; retrieval and tools add information or actions outside the weights. These stages should be reported separately because they create different failure modes.

A model can be fluent because its pretraining distribution contains many examples of a style, while still being wrong about a specific fact. It can follow a task format because instruction data taught the pattern, while still failing on an unfamiliar domain. It can produce a cited answer because a wrapper inserted retrieval, while the underlying model has not independently verified the source. A careful article therefore names the stage responsible for an observed behavior instead of attributing the whole system to the base checkpoint.

The same discipline applies to synthetic data and distillation. If an official paper documents synthetic examples, that is a property of the training recipe. If a community checkpoint uses generated data later, it is a derivative’s property. If the source does not specify the quantity, filtering, or mixture, I would not infer it from a benchmark score. The phrase “not verified from official sources” is more useful than a confident but unsupported number.

### Reproducible evaluation protocol

The practical demo in this article is marked as **suggested** unless an execution record is provided. A serious reproduction should begin with an inventory:

| Field to record | Why it matters |
|---|---|
| Exact checkpoint and revision | Family names can hide different weights and configurations. |
| Tokenizer and preprocessing | Token boundaries affect context, cost, and output. |
| Runtime and hardware | Kernels, precision, and batching affect latency and memory. |
| Prompt or input serialization | Small formatting changes can alter results. |
| Decoding or scoring settings | Greedy, sampling, beam search, and temperature answer different questions. |
| Dataset version and split | A benchmark name alone is not a reproducible test. |
| Seeds and repetitions | One sample can hide variance. |
| Human review criteria | Fluency, factuality, safety, and usefulness are different dimensions. |

For a generation model, I would evaluate at least four dimensions. **Task success** asks whether the requested transformation happened. **Faithfulness** asks whether the output stayed supported by the input or retrieved evidence. **Robustness** asks whether harmless changes in wording, ordering, or formatting cause unacceptable changes. **Safety** asks whether the system produces disallowed, private, or operationally dangerous content under realistic misuse attempts. A single aggregate score cannot replace these slices.

For an encoder, embedding, reranker, or classifier, I would add threshold calibration, class imbalance, retrieval recall, ranking quality, and performance under domain shift. For a multimodal model, I would separate perception errors from language-generation errors. For a reasoning model, I would distinguish a correct final answer from a plausible-looking explanation. The evaluation design should follow the model’s interface rather than forcing every model into a chat benchmark.

The minimum useful report is not a screenshot of one output. It is a small table containing the exact input, the output, the runtime configuration, the evaluation rubric, and the failure category. If the experiment has not been run, the article should say so plainly. A suggested experiment is a plan for learning, not evidence that the model passed.

### Deployment review

The stated best-use field is **Chinese-English local research**. Before deployment, I would translate that broad description into a bounded service contract. What inputs are accepted? What outputs are allowed? Which claims must be grounded in a source? Which actions require approval? What happens when the model refuses, times out, exceeds the context limit, or returns malformed structured output?

Memory planning should start from the exact checkpoint, numeric format, sequence length, and concurrency target. Parameter count alone is not a complete capacity estimate: runtime buffers, activations, attention state, tokenizer memory, batching, and operating-system overhead also matter. A smaller model with a long prompt and high concurrency can be harder to serve than a larger model used with short inputs. I would benchmark cold start, steady-state latency, tokens per second, peak memory, and tail latency on the actual target hardware.

The deployment mode should match the data boundary. Local or on-premises inference can reduce the need to send documents to a third party, but it does not automatically solve access control, logging, retention, or prompt injection. A hosted API can simplify scaling, but it introduces provider availability, data-processing, and pricing considerations. An edge deployment can reduce network dependence, but it makes model size, thermal limits, update mechanisms, and observability more important.

License review is a separate gate. The verified license field is **BAAI Aquila Model License Agreement for weights; Apache 2.0 source code according to the card**. That field should be checked against the exact weight repository, tokenizer, code, dataset terms, and any adapter or quantized artifact. “Open weights” and “commercially unrestricted” are not synonyms. If a source is ambiguous, the deployment decision should pause for legal review rather than convert uncertainty into a yes.

### Failure analysis and safety

The most useful failure taxonomy is specific to the interface. A text generator may hallucinate, repeat, follow a malicious instruction, leak memorized text, or produce unsafe advice. An encoder may encode social bias, overfit a label distribution, or become overconfident under domain shift. A vision-language model may misread small text, confuse spatial relationships, or let an image instruction override the intended task. A tool-using wrapper may execute a correct-looking but unauthorized action. These failures should be logged separately.

I would test the model with ordinary inputs, boundary inputs, and adversarial inputs. Ordinary inputs show the central task. Boundary inputs probe long sequences, rare names, code, numbers, mixed languages, missing fields, and ambiguous requests. Adversarial inputs probe prompt injection, conflicting instructions, unsafe requests, and attempts to extract hidden context. The test set should be versioned and reviewed for privacy; it should not contain sensitive production data merely because that data is convenient.

Safety is not a single layer. Model training, system prompts, input filtering, retrieval policy, tool permissions, output validation, monitoring, and human escalation each address different risks. A refusal can be useful but can also block a legitimate task; a confident answer can be helpful but can also conceal uncertainty. The right question is not whether this model is “safe” in the abstract. It is whether the complete system has controls appropriate to its users, data, and consequences.

### What I would document before publishing a result

Before turning an experiment into a LinkedIn claim, I would preserve the source links, checkpoint identifier, code revision, hardware, runtime, prompts, outputs, and evaluation rubric. I would label every sentence as one of three kinds: a **fact** directly supported by a primary source, a **my observation** from a documented experiment, or a **my opinion** about trade-offs. This separation makes the article easier to audit and prevents a plausible interpretation from being mistaken for a release fact.

I would also record what was not tested. If no benchmark was executed, say so. If only an English prompt was tried, do not generalize to multilingual behavior. If a community runtime was used, do not attribute its optimization to the original authors. If a license was not checked for a derivative, do not offer a commercial recommendation. A permanent knowledge repository is more valuable when its uncertainty is visible.

### A compact decision worksheet

| Question | Evidence to collect before choosing Aquila 1 |
|---|---|
| Is the interface a match? | Official modality, input/output format, and intended-use documentation. |
| Is the quality sufficient? | Task-specific evaluation on representative, versioned data. |
| Can it fit the service budget? | Measured memory, latency, throughput, and concurrency. |
| Can it be adapted? | Official fine-tuning guidance and compatible tooling. |
| Can it be used legally? | Exact weight, code, tokenizer, data, and derivative terms. |
| Can failures be contained? | Human review, permissions, validation, monitoring, and rollback. |

My conclusion for Aquila 1 should therefore remain conditional. The model is a meaningful artifact for the use cases documented in its official sources, but the right production choice depends on the exact checkpoint, data, runtime, and risk boundary. That conclusion is less dramatic than a universal ranking, yet it is more useful to an engineer deciding what to test next.

### Suggested publication checklist

- Link the official paper, repository, card, or release announcement.
- State the exact checkpoint when a family contains multiple variants.
- Keep release facts separate from observations and opinions.
- Do not transfer benchmark numbers between variants or runtimes.
- Label every unexecuted demo as suggested.
- Record tokenizer, context, precision, and decoding settings for reproductions.
- Review license and acceptable-use terms for the exact artifact.
- Explain what the model cannot do as clearly as what it can do.
- Add a successor or predecessor link only when the relationship is documented.
- Re-run the article validator after changing the file.

## Sources

- [Official Aquila-7B model card](https://huggingface.co/BAAI/Aquila-7B)
- [Official Aquila model license](https://huggingface.co/BAAI/Aquila-7B/resolve/main/BAAI%20Aquila%20Model%20License%20Agreement.pdf)
- [Official BAAI model organization](https://huggingface.co/BAAI)


## Related Articles

- Previous: [129 — Major Baichuan derivatives](129-major-baichuan-derivatives.md)
- Next: [131 — Aquila 2](131-aquila-2.md)
- Family overview: [122 — Aquila](122-aquila.md)

