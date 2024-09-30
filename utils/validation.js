const validateInput = (input) => {
    // Simple example: Only allow alphanumeric characters
    const regex = /^[a-zA-Z0-9]*$/;
    return regex.test(input);
};

module.exports = { validateInput };

