import fixAnyJs from "express-fix-any-js";
import searchPresentDir from "./searchPresentDir.js";

import { fileNamesJson as getFileNamesJsonFromNpm } from "pattern-collector-base-files";

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

const findKeyByFileName = ({ inObject, inFileName }) =>
    Object.keys(inObject).find(
        key => inObject[key].fileName === inFileName
    );

const startFunc = ({ inValue, OutValue, inTargetPath, alterArray }) => {
    const fileNamesJson = getFileNamesJsonFromNpm();

    // const key1 = findKeyByFileName({
    //     inObject: fileNamesJson,
    //     inFileName: "routes.js"
    // });

    const files = searchPresentDir(inTargetPath);

    const key = findFirstKey({
        inObject: fileNamesJson,
        inFiles: files
    });

    const output = fixAnyJs({
        inFileType: key,
        inTargetPath,
        inValue, OutValue, alterArray
    });

    return output;
};

export default startFunc;