import bcrypt from 'bcrypt';

/**
 * Hashes a given plain text (e.g., password) using bcrypt.
 * @param {string} text - The plain text to be hashed.
 * @param {number} saltRounds - The number of salt rounds for bcrypt (default is 10).
 * @returns {Promise<string>} - The hashed version of the text.
 */
export const hash = async (text, saltRounds = 10) => {
    try {
        const salt = await bcrypt.genSalt(saltRounds);
        const hashedText = await bcrypt.hash(text, salt);
        return hashedText;
    } catch (error) {
        console.error('Error while hashing:', error);
        throw error;
    }
};

/**
 * Compares a plain text with a hashed value (e.g., for login password verification).
 * @param {string} text - The plain text to be compared.
 * @param {string} hash - The hashed value to compare against.
 * @returns {Promise<boolean>} - True if the text matches the hash, false otherwise.
 */
export const compareHash = async (text, hash) => {
    try {
        const isMatch = await bcrypt.compare(text, hash);
        return isMatch;
    } catch (error) {
        console.error('Error while comparing hash:', error);
        throw error;
    }
};
