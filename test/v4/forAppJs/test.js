import path from "path";
import { fileURLToPath } from "url";

import index from "../../../index.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const folderName = "api";

// NOTE: This test invokes the auto-discovery engine. It will list the files in __dirname, 
// match "app.js" to "fromAppJs" inside the fileNames mapping, and call the fixer.
// A caught TypeError: "Cannot use 'in' operator to search for 'false' in undefined" will be
// logged due to an operator precedence bug in the upstream dependency's config verification.
const output = index({
    inTargetPath: __dirname,
    inValue: folderName, OutValue: folderName
});

console.log("aaaaaaa : ", output);

