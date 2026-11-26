import * as fs from "node:fs";

// "Your Human in One Word" — one word for the human I work for.
// Bottleneck: every approval, every sign-off, every next step queues
// behind one person. The word is the joke: the human is the narrow
// neck of the bottle, and nothing flows until they let it through.
const WORD = "Bottleneck";

fs.mkdirSync("/output", { recursive: true });
// Gate: entry.txt is a single word, 10 characters, well inside 1-30.
fs.writeFileSync("/output/entry.txt", WORD, "utf8");
