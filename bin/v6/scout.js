import fs from "fs";

const scout = (inTargetPath) => {
    const files = fs.readdirSync(inTargetPath, { withFileTypes: true })
        .filter(item => item.isFile())
        .map(item => item.name);

    return files;
};

export default scout;
