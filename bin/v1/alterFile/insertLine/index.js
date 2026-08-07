import findInsertIndex from "./findInsertIndex.js";
import addLines from "./addLines.js";
import writeToFile from "./writeToFile.js";

function build(template, parts) {
    return template.replace(/\{(\d+)\}/g, (_, i) => parts[i]);
};

const startFunc = ({ linesStory, fileContent, filePath, importRegex, onlyIndexesValues,
    presentKey, inTemplate, inParts }) => {

    const foundUseLinesStory = linesStory[presentKey].find(element => {
        return element.part2 === inParts[1];
    });

    if (foundUseLinesStory) {
        return {
            KTF: false,
            KReason: foundUseLinesStory
        };
    };

    const newLine = build(inTemplate, inParts);

    const lines = fileContent.split(/\r?\n/);

    const insertStory = findInsertIndex({
        onlyIndexesValues,
        importRegex,
        presentKey
    });

    addLines({
        inLines: lines, inInsertAtIndex: insertStory?.index,
        inNewLine: newLine, inGapBefore: insertStory?.gapBefore,
        inGapAfter: insertStory?.gapAfter
    });

    // lines.splice(insertAtIndex, 0, newLine);

    writeToFile({ fileContent, filePath, lines });

    return {
        newLine, inParts
    };
    // fs.writeFileSync(filePath, lines.join(fileContent.includes("\r\n") ? "\r\n" : "\n"));

};

export default startFunc;