# Second Pair — Problem Observatory Specification

## Purpose

Create a privacy-controlled internal dataset that learns the difference between what authors think is wrong and what manuscript evidence shows is happening.

## Fields

- declared problem;
- author's exact problem language;
- manuscript stage;
- genre;
- approximate word count;
- previous feedback;
- observed reader symptom;
- evidence spans;
- candidate causes;
- final diagnosis;
- diagnosis confidence;
- selected/recommended service;
- revision priority;
- author decision;
- outcome;
- repeat issue;
- referral/discovery source.

## Rules

- Keep client data private and access-controlled.
- Prefer anonymized identifiers for analytical use.
- Do not publish aggregate claims until the sample and collection method justify them.
- Do not infer prevalence from a small internal corpus.
- Store uncertainty where diagnosis is uncertain.
- Record the author's declared problem separately from the professional diagnosis.

## Business use

Over time this dataset can improve problem pages, diagnostic tools, intake routing, proof selection and service design. It is a learning system, not a public claims engine.
