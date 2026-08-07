import path from "path";
import { fileURLToPath } from "url";

import index from "../../../index.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const folderName = "v1";

const output = index({
    inFileType: "fromRoutesJs",
    inTargetPath: __dirname,
    inValue: folderName, OutValue: folderName
});

console.log("aaaaaaa : ", output);
