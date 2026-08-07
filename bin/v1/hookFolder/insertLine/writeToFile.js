import fs from 'fs';

const startFunc = ({ fileContent, filePath, lines }) => {

    fs.writeFileSync(filePath, lines.join(fileContent.includes("\r\n") ? "\r\n" : "\n"));
};

export default startFunc;