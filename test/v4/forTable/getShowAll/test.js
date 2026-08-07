import path from "path";
import { fileURLToPath } from "url";

import index from "../../../../index.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const output = index({
    inFileType: "tableGetShowAll",
    inTargetPath: __dirname,
    inValue: "showAll", OutValue: "showAll"
});

console.log("aaaaaaa : ", output);
