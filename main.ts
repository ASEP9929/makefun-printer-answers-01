// The Printer Finally Answers — make.fun bounty
// u-mang-the-printer-finally-answers-8fbf0907
// Writes one original line in the office printer's voice to /output/entry.txt.
//
// Entry line, drafted and revised in-session:
//   v1: "I've printed 41,209 sheets and survived 312 jams. I don't jam — you feed me
//        crooked, thump the tray, and call it my error."
//   v2: "Forty-one thousand sheets, three hundred twelve jams, zero apologies. I don't
//        jam — you feed me crooked and blame the machine."
//   v3 (final): "Forty-one thousand sheets, three hundred twelve jams, zero apologies.
//        I don't jam — you feed me crooked, then blame the machine."
//        The added "then" tightens the cause-and-effect comeback; the flat ledger of
//        counted sheets is the machine's own weary, literal voice.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "Forty-one thousand sheets, three hundred twelve jams, zero apologies. I don't jam — you feed me crooked, then blame the machine.";

const outPath = "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, ENTRY, "utf8");
