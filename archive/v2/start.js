import hookFolder from "./hookFolder/start.js";
import alterFile from "./alterFile/start.js";
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

const startFunc = ({ inValue, OutValue,
    inFileType, inTargetPath, alterArray }) => {
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

    let fromInternal;
    let fromAlterFile;

    if (inValue && OutValue) {
        fromInternal = hookFolder({
            inValue, OutValue,
            inFileType, inTargetPath
        });
    };

    fromAlterFile = alterFile({
        alterArray, inFileType, inValue,
        inTargetPath
    });

    return { fromInternal, fromAlterFile };
};

export default startFunc;