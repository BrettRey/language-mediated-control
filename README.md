# Language-Mediated Control

An open-access book, written in public, on the epistemology of AI security and assurance.

**Working label.** The final title gets decided at launch. The argument is stable: control of AI systems and evidence about AI systems both run through natural language, and language-mediation imports two problem families that engineering treats as solved ~-- pragmatics (what counts as an instruction, whose authority, quoted versus commanded) and projection (what an evaluation result licenses anyone to conclude). Security is where an adversary exploits both at once.

**For whom.** People who produce assurance evidence about AI systems (eval leads, red-teamers, auditors) and people who consume it and carry the liability (CTOs, general counsel, procurement). The book is about the handoff between them.

**How it works.** Chapters appear here as they reach reviewable-draft quality, free to read. Releases are versioned; released chapters are never silently rewritten. Every chapter opens with a documented real-world case verified against primary sources, and closes with what documentation would have had to exist for the failure to be diagnosable.

**Status.** Scaffold. The thesis and chapter list are being pressure-tested; the case file is being built. Nothing is released yet.

## Build

```bash
quarto render    # or: make
quarto preview   # or: make preview
```

## Layout

- `index.qmd` ~-- preface
- `chapters/` ~-- chapters, as they exist
- `cases/` ~-- the case file: verified incidents, one per file
- `notes/` ~-- project brief, working thesis, source-verification queue

## License

Text: CC BY-NC-ND 4.0 (provisional during serialization; see `DECISIONS.md`). Build tooling: MIT.
