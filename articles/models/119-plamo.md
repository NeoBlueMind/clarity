# What PLaMo Teaches Us About Building Japanese Foundation Models

> **Series position:** 119 of 225 · **Roadmap entry:** PLaMo. **Evidence status:** official PLaMo site and technical reports. **Experiment status:** suggested, not executed.

## Quick Summary

| Field | Verified summary |
|---|---|
| Released | PLaMo-100B report: October 2024; later PLaMo releases have separate dates |
| Creator | Preferred Networks, with later collaborations involving NICT |
| Model type | Japanese-focused foundation language-model family |
| Architecture | Version-specific decoder language models; PLaMo 2 report documents its own design |
| Modalities | Text for the original language models; later PLaMo 2.1-VL adds vision |
| Parameters | Versions include PLaMo-13B and PLaMo-100B; later family sizes differ |
| Context | Version-specific; do not transfer values across PLaMo releases |
| Languages | Japanese-focused, with English support in documented versions |
| License | Version-specific; read the model card or service terms |
| Best use cases | Japanese generation, translation, local research, and domain evaluation |
| Biggest strength | Japanese-first data and evaluation strategy |
| Biggest weakness | The family is not one uniform artifact and deployment terms vary |

## Why This Model Matters

PLaMo is an example of a country- and language-focused foundation model built from the ground up. Preferred Networks emphasizes Japanese data, Japanese benchmarks, and domestic deployment options. This makes PLaMo valuable for studying how language coverage, tokenizer design, and evaluation priorities shape model behavior.

## Historical Context

Early PLaMo checkpoints included PLaMo-13B; the PLaMo-100B report later described a much larger model. PLaMo 2 then documented supervised fine-tuning, DPO, synthetic Japanese instruction data, and model merging. The roadmap entry is a family overview; later entries should be used for exact checkpoints.

## Architecture Explained

```mermaid
flowchart LR
    A[Japanese and English corpus] --> B[Tokenizer]
    B --> C[Decoder language model]
    C --> D[Japanese generation]
    D --> E[Instruction/post-training for selected releases]
```

PLaMo is not one fixed architecture. The official reports describe version-specific designs and training. The safe statement is that the language-model releases are decoder-style autoregressive models; exact attention, context, and parameter details must come from the chosen version.

## Training

The PLaMo-100B report describes ground-up pretraining for Japanese proficiency. The PLaMo 2 report describes post-training with supervised fine-tuning and DPO, supported by synthetic Japanese instruction data and model merging. These are not automatically properties of PLaMo-13B or every PLaMo service model.

## Model Variants

| Variant | Use |
|---|---|
| PLaMo-13B | Early open Japanese-focused checkpoint |
| PLaMo-100B | Large ground-up model described in the 2024 technical report |
| PLaMo 2 | Later family with documented post-training and inference work |
| PLaMo 2.1-VL | Vision-language branch for Japanese local/edge scenarios |
| PLaMo 3 / Prime | Newer service and foundation-model releases; consult current official terms |

## Capabilities

Text generation, Japanese instruction following, translation, and domain-specific evaluation are documented across the family. PLaMo 2.1-VL adds visual question answering and grounding, but those capabilities should not be attributed to the original text-only PLaMo models.

## Real-World Use Cases

Use PLaMo for Japanese drafting, translation research, local enterprise assistants, education, and evaluation of Japanese terminology. The official site also describes cloud API, cloud VM, and on-premise options for certain offerings; model weights and service products are not interchangeable.

## Practical Demo

**Suggested experiment; not executed:** build a Japanese evaluation set covering instruction following, honorifics, named entities, translation, and structured JSON. Run the same prompts through two PLaMo versions and a general multilingual model. Have native speakers score meaning preservation and register, then report results by task rather than one aggregate score.

## Benchmarks

Official reports use Japanese benchmarks such as Jaster and M-IFEval Japanese, and PLaMo 2 reports comparisons with similarly sized open models. Exact scores belong to the release-specific report. Japanese benchmark performance should not be translated into a universal claim about English or other languages.

## Trade-offs

- Japanese specialization may improve target-language behavior while limiting transfer elsewhere.
- Large versions have substantial infrastructure costs.
- API, VM, on-premise, and open-weight offerings have different operational and license terms.
- Later vision-language versions change hardware and runtime requirements.

## Comparison

| Model | Difference |
|---|---|
| PLaMo-13B | Earlier Japanese-focused checkpoint |
| PLaMo-100B | Larger ground-up model |
| PLaMo 2 | Post-trained later family with DPO and model merging |
| Qwen / Gemma | Broad ecosystem comparators with different language priorities |

## Ecosystem

The PLaMo website documents API and deployment offerings; reports describe vLLM and quantization for selected releases. Runtime support must be checked per version. Do not assume PLaMo 2.1-VL can be loaded by the same stack as PLaMo-13B.

## Fine-Tuning

PLaMo 2’s report documents SFT and DPO in its own post-training pipeline. Further adaptation may be possible for released weights, but exact LoRA, QLoRA, PEFT, and full fine-tuning support is version-specific. The official sources do not verify a universal adapter recipe.

## Deployment

Small versions can support local research; large versions require multi-GPU infrastructure. The official site describes cloud API, cloud VM, and on-premise options for supported products. Mobile and browser deployment are not general family guarantees.

## Limitations

PLaMo can hallucinate, show uneven English performance, and fail on specialized facts. A Japanese-first model still needs grounding, safety testing, and native-speaker review. Newer multimodal variants introduce additional OCR, grounding, and image-bias failure modes.

## Decision Framework

Use PLaMo when:

- Japanese language quality is central;
- you can evaluate the exact version with native speakers;
- deployment location and licensing are clear.

Avoid it when:

- you need one uniform API or checkpoint across the family;
- broad multilingual coverage is more important than Japanese depth;
- you cannot perform version-specific operational review.

## My Learning

PLaMo reinforced a lesson from Poro and EXAONE: language specialization is an engineering choice, not a footnote. Reading the PLaMo reports made me want to compare tokenizer efficiency and instruction-following quality on real Japanese workflows rather than rely on an English-centered benchmark.

## Key Takeaways

1. PLaMo is a Japanese-focused family, not a single checkpoint.
2. PLaMo-100B and PLaMo 2 have different release contexts.
3. Japanese evaluation must be interpreted in Japanese.
4. API, open-weight, and vision variants require separate review.

## Closing Question

What would a genuinely language-native evaluation suite look like for the language your users speak every day?

## Glossary

- **Japanese-first model:** model whose data and evaluation prioritize Japanese use.
- **DPO:** preference optimization from chosen/rejected responses.
- **Ground-up pretraining:** training from newly initialized weights rather than adapting another model.
- **VLM:** vision-language model that accepts image and text inputs.







## Extended Research Notes

> **Evidence boundary:** The notes below deepen the engineering interpretation of this article’s verified fields. They do not introduce a new benchmark score, release date, license conclusion, or deployment guarantee. Where the source record is checkpoint-specific, the same caution applies here.

### Fact, observation, and opinion

- **FACT:** Model-specific claims in this article are limited to the verified fields and the primary sources listed at the end.
- **MY OBSERVATION:** I did not execute the suggested experiment in this article, so it contains no reported experimental result from me.
- **MY OPINION:** My deployment and decision recommendations are conditional engineering judgments, not claims that the model is universally superior.
- **UNVERIFIED FIELDS:** When an official source does not establish a requested detail, the correct statement is: “This information could not be verified from official sources.”

### How to read PLaMo

PLaMo appears at 119 of 225 in this series. That position is useful because a model is never only a list of parameters: it is a response to the research and product constraints that existed when it was released. The verified summary identifies the creator as **Preferred Networks, with later collaborations involving NICT**, the architecture as **Version-specific decoder language models; PLaMo 2 report documents its own design**, the modality as **Text for the original language models; later PLaMo 2.1-VL adds vision**, and the release information as **PLaMo-100B report: October 2024; later PLaMo releases have separate dates**. Those facts define the perimeter of the discussion. They do not, by themselves, prove that every checkpoint in the family has identical behavior.

When comparing this model with another entry, I would keep three layers separate. The first layer is the published artifact: weights, configuration, tokenizer, training objective, and model card. The second layer is the runtime: preprocessing, precision, batching, decoding, retrieval, and serving framework. The third layer is the application: prompts, tools, permissions, monitoring, and human review. A result at one layer should not be described as a property of all three. For example, a benchmark result for a base checkpoint is not automatically a guarantee for a quantized derivative inside a production workflow.

This distinction is particularly important for family names. A family may contain base models, instruction-tuned models, multimodal variants, safety models, embeddings, or adapters. The name can suggest continuity while the tokenizer, context limit, training mixture, or license changes. My working rule is therefore simple: treat the exact checkpoint and its official documentation as the unit of analysis, and use the family name only when the source explicitly supports a family-level statement.

### Architecture implications for an engineer

The architecture field says **Version-specific decoder language models; PLaMo 2 report documents its own design**. The practical meaning depends on the interface the model exposes. An encoder-oriented system usually turns an input into representations that a task head, retriever, or classifier can consume. A decoder-oriented system usually predicts a continuation one token at a time. An encoder–decoder system separates reading from writing and uses cross-attention between the two stages. A mixture-of-experts model adds routing decisions; a state-space or recurrent model changes how sequence history is represented. These are not interchangeable labels, because they change memory use, latency, fine-tuning targets, and the kinds of errors an evaluation should expose.

The first engineering question is therefore not “How large is it?” but “What computation does the application need?” If the product needs a fixed label, token span, or embedding, open-ended generation may be unnecessary. If it needs a long response, generation is central and decoding becomes part of the latency budget. If the model accepts images, audio, video, or several input types, the preprocessing pipeline and alignment between modalities become as important as the language backbone. The article’s modality field is **Text for the original language models; later PLaMo 2.1-VL adds vision**; anything outside that field should be treated as an external system feature unless an official source documents it.

The second question is where the context is stored. In attention-based models, the runtime may maintain key–value states while decoding. In other architectures, recurrence, convolution, or state-space updates can change the memory pattern. The original release may not document modern optimizations such as grouped-query attention, sliding windows, paged attention, speculative decoding, or flash-attention kernels. Those optimizations can be useful in a compatible implementation, but compatibility is an implementation claim, not evidence that the original model was trained with the feature.

The third question is precision. A checkpoint can be stored or served in multiple numeric formats, but quantization changes the numerical approximation and can change output quality. I would record the original precision, the conversion tool, the quantization scheme, the runtime version, and the evaluation set. Without those fields, “the model runs locally” is not a reproducible technical result.

### Training and post-training interpretation

The verified training description names **not stated in the article’s verified summary** and **not stated in the article’s verified summary**. I would interpret those fields as a causal history, not as a marketing label. Pretraining determines what regularities the model can represent; instruction tuning changes how it maps a request into an answer; preference optimization changes which answers are favored; retrieval and tools add information or actions outside the weights. These stages should be reported separately because they create different failure modes.

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

The stated best-use field is **Japanese generation, translation, local research, and domain evaluation**. Before deployment, I would translate that broad description into a bounded service contract. What inputs are accepted? What outputs are allowed? Which claims must be grounded in a source? Which actions require approval? What happens when the model refuses, times out, exceeds the context limit, or returns malformed structured output?

Memory planning should start from the exact checkpoint, numeric format, sequence length, and concurrency target. Parameter count alone is not a complete capacity estimate: runtime buffers, activations, attention state, tokenizer memory, batching, and operating-system overhead also matter. A smaller model with a long prompt and high concurrency can be harder to serve than a larger model used with short inputs. I would benchmark cold start, steady-state latency, tokens per second, peak memory, and tail latency on the actual target hardware.

The deployment mode should match the data boundary. Local or on-premises inference can reduce the need to send documents to a third party, but it does not automatically solve access control, logging, retention, or prompt injection. A hosted API can simplify scaling, but it introduces provider availability, data-processing, and pricing considerations. An edge deployment can reduce network dependence, but it makes model size, thermal limits, update mechanisms, and observability more important.

License review is a separate gate. The verified license field is **Version-specific; read the model card or service terms**. That field should be checked against the exact weight repository, tokenizer, code, dataset terms, and any adapter or quantized artifact. “Open weights” and “commercially unrestricted” are not synonyms. If a source is ambiguous, the deployment decision should pause for legal review rather than convert uncertainty into a yes.

### Failure analysis and safety

The most useful failure taxonomy is specific to the interface. A text generator may hallucinate, repeat, follow a malicious instruction, leak memorized text, or produce unsafe advice. An encoder may encode social bias, overfit a label distribution, or become overconfident under domain shift. A vision-language model may misread small text, confuse spatial relationships, or let an image instruction override the intended task. A tool-using wrapper may execute a correct-looking but unauthorized action. These failures should be logged separately.

I would test the model with ordinary inputs, boundary inputs, and adversarial inputs. Ordinary inputs show the central task. Boundary inputs probe long sequences, rare names, code, numbers, mixed languages, missing fields, and ambiguous requests. Adversarial inputs probe prompt injection, conflicting instructions, unsafe requests, and attempts to extract hidden context. The test set should be versioned and reviewed for privacy; it should not contain sensitive production data merely because that data is convenient.

Safety is not a single layer. Model training, system prompts, input filtering, retrieval policy, tool permissions, output validation, monitoring, and human escalation each address different risks. A refusal can be useful but can also block a legitimate task; a confident answer can be helpful but can also conceal uncertainty. The right question is not whether this model is “safe” in the abstract. It is whether the complete system has controls appropriate to its users, data, and consequences.

### What I would document before publishing a result

Before turning an experiment into a LinkedIn claim, I would preserve the source links, checkpoint identifier, code revision, hardware, runtime, prompts, outputs, and evaluation rubric. I would label every sentence as one of three kinds: a **fact** directly supported by a primary source, a **my observation** from a documented experiment, or a **my opinion** about trade-offs. This separation makes the article easier to audit and prevents a plausible interpretation from being mistaken for a release fact.

I would also record what was not tested. If no benchmark was executed, say so. If only an English prompt was tried, do not generalize to multilingual behavior. If a community runtime was used, do not attribute its optimization to the original authors. If a license was not checked for a derivative, do not offer a commercial recommendation. A permanent knowledge repository is more valuable when its uncertainty is visible.

### A compact decision worksheet

| Question | Evidence to collect before choosing PLaMo |
|---|---|
| Is the interface a match? | Official modality, input/output format, and intended-use documentation. |
| Is the quality sufficient? | Task-specific evaluation on representative, versioned data. |
| Can it fit the service budget? | Measured memory, latency, throughput, and concurrency. |
| Can it be adapted? | Official fine-tuning guidance and compatible tooling. |
| Can it be used legally? | Exact weight, code, tokenizer, data, and derivative terms. |
| Can failures be contained? | Human review, permissions, validation, monitoring, and rollback. |

My conclusion for PLaMo should therefore remain conditional. The model is a meaningful artifact for the use cases documented in its official sources, but the right production choice depends on the exact checkpoint, data, runtime, and risk boundary. That conclusion is less dramatic than a universal ranking, yet it is more useful to an engineer deciding what to test next.

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

- [Official PLaMo website](https://plamo.preferredai.jp/)
- [PLaMo-100B technical report](https://arxiv.org/abs/2410.07563)
- [PLaMo 2 technical report](https://arxiv.org/abs/2509.04897)
- [PLaMo 2.1-VL technical report](https://arxiv.org/abs/2604.19324)
- [Official Preferred Networks technology news](https://tech.preferred.jp/ja/blog/llm-plamo/)


## Related Articles

- Previous: [118 — Poro](118-poro.md)
- Next: [120 — Orion](120-orion.md)
- Later specific entry: [225 — PLaMo-13B](225-plamo-13b.md)

