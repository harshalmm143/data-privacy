const maskData = (data) => {
    return '****-****-****-' + data.slice(-4);
};

const tokenize = (data) => {
    return Buffer.from(data).toString('base64'); // Simple tokenization
};

module.exports = { maskData, tokenize };
