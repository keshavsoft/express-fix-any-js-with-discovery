import fs from 'fs';

const findImportLinesFromNpmIndex = ({ inStory }) => {
    const importLinesFromNpm = inStory?.linesStory?.importLinesFromNpm;

    const lastLine = importLinesFromNpm[importLinesFromNpm.length - 1];

    return lastLine?.lineNumber;
};

const findImportLinesIndex = ({ inStory }) => {
    const importLines = inStory?.linesStory?.importLines;

    const lastLine = importLines[importLines.length - 1];

    return lastLine?.lineNumber;
};

const findVariablesDeclareHereLinesIndex = ({ inStory }) => {
    const variablesDeclareHereLines = inStory?.lines?.variablesDeclareHereLines;

    const lastLine = variablesDeclareHereLines[variablesDeclareHereLines.length - 1];

    return lastLine?.lineNumber;
};

export {
    findImportLinesFromNpmIndex, findImportLinesIndex,
    findVariablesDeclareHereLinesIndex
};