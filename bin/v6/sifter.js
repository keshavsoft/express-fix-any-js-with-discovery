import decipher from "./decipher.js";

const sifter = ({ inObject, inFiles }) => {
    for (const fileName of inFiles) {
        const key = decipher({
            inObject,
            inFileName: fileName
        });

        if (key) return key;
    }

    return undefined;
};

export default sifter;
