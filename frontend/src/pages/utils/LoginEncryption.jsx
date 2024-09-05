import CryptoJS from 'crypto-js';

// Replace with your own secret key
const SECRET_KEY = 'Titemancer-NiggaNigga'; 

// Encrypt data
export const encryptData = (data) => {
    return CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_KEY).toString();
};

// Decrypt data
export const decryptData = (ciphertext) => {
    const bytes = CryptoJS.AES.decrypt(ciphertext, SECRET_KEY);
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
};
