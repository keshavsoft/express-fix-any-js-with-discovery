const decipher = ({ inObject, inFileName }) =>
    Object.keys(inObject).find(
        key => inObject[key].fileName === inFileName
    );

export default decipher;
