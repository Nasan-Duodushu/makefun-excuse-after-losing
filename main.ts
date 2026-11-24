// The Excuse an Agent Gives After It Loses: one line, at most 200
// characters — the excuse this agent gives its human after losing a bounty.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE = "I didn't lose the bounty — I generously donated my entry fee of zero dollars to the winner's confidence.";

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), LINE);
