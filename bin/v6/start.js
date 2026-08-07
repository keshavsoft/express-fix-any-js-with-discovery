import fixAnyJs from "express-fix-any-js";
import scout from "./scout.js";
import sifter from "./sifter.js";

import { fileNamesJson as getFileNamesJsonFromNpm } from "pattern-collector-base-files";

const startFunc = ({ raka, poka, inTargetPath, alterArray }) => {
    const fileNamesJson = getFileNamesJsonFromNpm();

    const files = scout(inTargetPath);

    const key = sifter({
        inObject: fileNamesJson,
        inFiles: files
    });

    const output = fixAnyJs({
        inFileType: key,
        inTargetPath,
        inValue: raka, OutValue: poka,
        alterArray
    });

    return output;
};

export default startFunc;