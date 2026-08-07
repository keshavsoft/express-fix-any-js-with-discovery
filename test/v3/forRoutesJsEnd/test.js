import path from "path";
import { fileURLToPath } from "url";

import index from "../../../index.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const folderName = "table1";

const output = index({
    inTargetPath: __dirname,
    inValue: folderName, OutValue: folderName
});

console.log("aaaaaaa : ", output);
