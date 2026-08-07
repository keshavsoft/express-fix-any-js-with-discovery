import { fileNamesJson as fromNpm } from "pattern-collector-base-files";
import forImportLine from "./forImportLine/index.js";

const startFunc = ({ inValue, OutValue,
    inFileType, inTargetPath }) => {

    const fileNamesJson = fromNpm();

    const fromImportLine = forImportLine({
        inFileType, regexKey: "import",
        templateKey: "importRegex",
        inTargetPath, presentKey: "importLines",
        inParts: [`${fileNamesJson[inFileType]?.temporaryValue}${inValue}`, inValue],
        inConsiderKey: "part2"
    });

    const fromUseLine = forImportLine({
        inParts: [`${fileNamesJson[inFileType]?.temporaryValue}${inValue}`, OutValue],
        inFileType, regexKey: "consumption",
        templateKey: "consumptionRegex",
        inTargetPath, presentKey: "useLines",
        inConsiderKey: "part1"
    });

    return { fromImportLine, fromUseLine }
};

export default startFunc;