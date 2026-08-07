import path from "path";
import { fileURLToPath } from "url";

import index from "../../../index.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const tableName = "table1";

const output = index({
    inFileType: "fromRoutesJsEnd",
    inTargetPath: __dirname,
    inValue: tableName, OutValue: tableName
});

console.log("aaaaaaa : ", output);
