import fs from "fs";
import path from "path";

import defaultFunc from 'pattern-collector-anyjs-story';
import { fileNamesJson as fromNpm } from "pattern-collector-base-files";

import insertLine from "../insertLine/index.js";

// import fileNamesJson from '../../fileNames.json' with {type: 'json'};

const startFunc = ({ inParts, inFileType, inTargetPath,
    presentKey, regexKey, templateKey, inConsiderKey
}) => {

    try {
        const fileNamesJson = fromNpm();

        const localJsPath = path.join(inTargetPath, fileNamesJson[inFileType]?.fileName);

        const fileContent = fs.readFileSync(localJsPath, 'utf8');

        const story = defaultFunc({ fileContent, fileType: inFileType });

        const fromInsertLine = insertLine({
            presentKey,
            linesStory: story.linesStory,
            onlyIndexesValues: story?.onlyIndexesValues,
            fileContent,
            importRegex: story?.extractRegex?.toInsertIndex?.[inFileType]?.[regexKey],
            filePath: localJsPath,
            inTemplate: story?.reverseTemplates?.[templateKey],
            inParts, inConsiderKey
        });

        return fromInsertLine;

    } catch (error) {
        console.log("error : ", error);

    };
};

export default startFunc;

// startFunc({ folderNameToInsert, fileType });