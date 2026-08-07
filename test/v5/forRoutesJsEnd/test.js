import path from "path";
import { fileURLToPath } from "url";

import index from "../../../index.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const folderName = "table1";

// NOTE: This test invokes the auto-discovery engine. It will list the files in __dirname, 
// matching "routes.js" to "fromRoutesJs" (instead of "fromRoutesJsEnd" because "fromRoutesJs"
// is defined first inside key order in fileNamesJson).
// A caught TypeError: "Cannot use 'in' operator to search for 'false' in undefined" will be
// logged due to an operator precedence bug in the upstream dependency's config verification.
const output = index({
    inTargetPath: __dirname,
    raka: folderName, poka: folderName
});

console.log("aaaaaaa : ", output);

