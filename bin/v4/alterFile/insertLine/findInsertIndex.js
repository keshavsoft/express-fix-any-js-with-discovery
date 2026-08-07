const startFunc = ({ onlyIndexesValues, importRegex, presentKey }) => {
    const insertStory = {};

    if (!importRegex) {
        return insertStory;
    };

    // Try each preferred location until one exists.
    for (const preference of importRegex) {

        const [group, property] = preference.split(".");

        // Preference like: importLines.firstLineIndex
        if (property) {
            if (onlyIndexesValues[group]?.[property] !== undefined) {
                insertStory.index = onlyIndexesValues[group][property];

                if (presentKey in onlyIndexesValues && !onlyIndexesValues[presentKey]) {
                    insertStory.gapBefore = true;
                }

                break;
            }

            continue;
        }

        // Special preference like: first
        if (preference === "firstLineIndex") {
            insertStory.index = 0;
            break;
        };
    };

    return insertStory;
};

export default startFunc;