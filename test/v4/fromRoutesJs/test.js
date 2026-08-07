import path from "path";
import { fileURLToPath } from "url";

import index from "../../../index.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// NOTE: This test invokes the auto-discovery engine. It will list the files in __dirname, 
// match "routes.js" to "fromRoutesJs" inside the fileNames mapping, and call the fixer.
// A caught TypeError: "Cannot use 'in' operator to search for 'false' in undefined" will be
// logged due to an operator precedence bug in the upstream dependency's config verification.
const output = index({
    inTargetPath: __dirname,
    raka: "v1", poka: "v11111"
});

console.log("aaaaaaa : ", output);

