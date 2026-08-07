import fixAnyJs from "express-fix-any-js";
import searchPresentDir from "./searchPresentDir.js";

import { fileNamesJson as getFileNamesJsonFromNpm } from "pattern-collector-base-files";

const findKeyByFileName = ({ inObject, inFileName }) =>
    Object.keys(inObject).find(
        key => inObject[key].fileName === inFileName
    );

const findFirstKey = ({ inObject, inFiles }) => {
    for (const fileName of inFiles) {
        const key = findKeyByFileName({
            inObject,
            inFileName: fileName
        });

        if (key) return key;
    }

    return undefined;
};

const startFunc = ({ raka, poka, inTargetPath, alterArray }) => {
    const fileNamesJson = getFileNamesJsonFromNpm();

    const files = searchPresentDir(inTargetPath);

    const key = findFirstKey({
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