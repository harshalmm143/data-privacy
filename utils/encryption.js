const encrypt = (data, key) => {
    const keyLength = key.length;
    return data.split('').map((char, index) => {
        return String.fromCharCode(char.charCodeAt(0) ^ key.charCodeAt(index % keyLength));
    }).join('');
};

const decrypt = (cipherText, key) => {
    return encrypt(cipherText, key); // Symmetric encryption
};

module.exports = { encrypt, decrypt };
