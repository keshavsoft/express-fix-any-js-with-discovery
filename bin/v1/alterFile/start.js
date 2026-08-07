import fs from "fs";
import path from "path";
import { fileNamesJson as fromNpm } from "pattern-collector-base-files";

// import fileNamesJson from '../fileNames.json' with {type: 'json'};

const startFunc = ({ alterArray, inFileType, inTargetPath, inValue }) => {

    try {

        const fileNamesJson = fromNpm();

        if (!inFileType in fileNamesJson) {
            return false;
        };

        if (!"hookTo" in fileNamesJson[inFileType]) {
            return false;
        };

        if (!"fileName" in fileNamesJson[fileNamesJson[inFileType]?.hookTo]) {
            return false;
        };

        const jsFileName = fileNamesJson[fileNamesJson[inFileType]?.hookTo]?.fileName;

        const localJsPath = path.join(inTargetPath, inValue, jsFileName);

        let fileContent = fs.readFileSync(localJsPath, 'utf8');

        alterArray.forEach(element => {
            fileContent = fileContent.replaceAll(element.key, element.value);
        });

        fs.writeFileSync(localJsPath, fileContent);

        return true;

    } catch (error) {
        console.log("error : ", error);

    };
};

export default startFunc;