const crypto = require('crypto');

var secretKey = process.env.KEY
var iv = process.env.IV
// Função para criptografar uma mensagem
function encrypt(message) {
    const cipher = crypto.createCipher('aes-256-cbc', secretKey, iv);
    let encrypted = cipher.update(message, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
}

// Função para descriptografar uma mensagem
function decrypt(encrypted) {
    const decipher = crypto.createDecipher('aes-256-cbc', secretKey, iv);
    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

module.exports = {
    encrypt,
    decrypt
}