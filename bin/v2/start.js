import hookFolder from "./hookFolder/start.js";
import alterFile from "./alterFile/start.js";

const startFunc = ({ inValue, OutValue,
    inFileType, jsFilePath, inTargetPath, alterArray }) => {

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