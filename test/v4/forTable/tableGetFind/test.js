import path from "path";
import { fileURLToPath } from "url";

import index from "../../../../index.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const output = index({
    inFileType: "tableGetFind",
    inTargetPath: __dirname,
    raka: "find", poka: "find"
});

console.log("aaaaaaa : ", output);
