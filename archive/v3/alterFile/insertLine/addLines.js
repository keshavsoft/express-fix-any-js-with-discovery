const startFunc = ({
    inLines,
    inNewLine,
    inInsertAtIndex,
    inGapBefore = false,
    inGapAfter = false
}) => {
    let line = inNewLine;

    if (inGapBefore) line = "\n" + line;
    if (inGapAfter) line = line + "\n";

    inLines.splice(inInsertAtIndex, 0, line);
};

export default startFunc;